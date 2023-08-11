## 禁止下载 PDF

其实之前我们已经实现了将 pdf 内嵌到 pdf.js 的 index.html 页面里打开了，

并在该页面里实现了客户想要的禁止右键、隐藏打印等按钮以及打印页面就让页面变成空白的功能。

但是由于之前是直接将 pdf 的 url 传过来，我再将 url 放到地址栏的 file 参数里，所以用户可以直接复制地址栏里的链接去下载 pdf 。所以后端现在改了，不直接传 url， 而是经过 base64 加密后的 pdf 。

```json
JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVhdG9yIChNb... // 后面还有非常长的内容
```

上面就是一个经过 base64 加密后的 pdf 。

首先我要做的是将这个 base64 字段解密，能打开后端传给我的 pdf 。

这里的思路是，将 base64 转成 blob ，然后再用 `window.URL.createObjectURL` 方法将 blob 转成 url 打开。

[Base64 representing PDF to blob - JavaScript]([Base64 representing PDF to blob - JavaScript - Stack Overflow](https://stackoverflow.com/questions/36036280/base64-representing-pdf-to-blob-javascript))

在上面这篇文章里找到了如何将 base64 的 pdf 转成 blob。

```javascript
handleClick(row) {
    let _this = this;
    let data = {
        files_name: row.name,
        subject_id: row.subject_id,
        level_id: row.level_id
    };
    pdfCheck(data)
        .then((res) => {
        // res.data 是后端传过来的 pdf 的 base64 字段
        let base64str = res.data;
        // 以防万一我会在 index.html 里会用到这个 base64 字段，所以存了一下 localStorage ，但实际上没有用到
        localStorage.setItem('url', res.data);
        // 将 pdf base64 字段解密成 blob 的代码
        let binary = atob(base64str.replace(/\s/g, ''));
        let len = binary.length;
        let buffer = new ArrayBuffer(len);
        let view = new Uint8Array(buffer);
        for (let i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        let blob = new Blob([view], {type: 'application/pdf'});
        // 将 blob 用 URL.createObjectURL 转成 url
        this.url = URL.createObjectURL(blob);
        // 如果不判断 this.url !== '' 在第一次直接跳转一个 file= 参数为空的 index.html 页面
        if (this.url !== '') {
            this.windowOpen();
        }
    });
},

windowOpen() {
    let _this = this;
    window.open('/pdf/index.html?file=' + _this.url);
}
```

用以上代码，就能成功实现了打开后端传过来的 base64 加密后的 pdf 。

但还有个问题，我们用 `URL.createObjectURL` 生成的这个 URL 也是可以打开 pdf 的。而且这个 URL 是直接写在地址栏的 file 参数里面的。

那现在怎么解决这个问题呢？

调查了很多，思路大概有 4 个：

1. 不通过地址栏的 file 参数来传 url；
2. 把 url 加密之后传给 file 参数，然后 index.html 的代码里面去解密；
3. 尝试用 pdf.js 插件直接直接收 base64 的 pdf。
4. 不通过地址栏传那就需要自己写一个页面，在里面用 canvas 标签或者 iframe 标签等来显示；

用 pdf.js 插件直接接收 base64 的 pdf 这个考虑到我的 pdf.js 版本比较老，而且之前也对 pdf.js 文件做了一些修改，所以不好重新再来完全换一种实现方式；

最后还是尝试用第二种方式来做。

前端常见的几种加密方式：

- base64 加密肯定不行，base64 字段太长，浏览器会报 414 URL TooLong 错；
- MD5 和 sha1 是不可逆的也不行；
- `escape()` 只会将所有的空格符、标点符号、特殊字符以及其他非ASCII字符都将被转化成%xx格式的字符编码，这种加密明显不够也不行；
- 最后决定使用 **AES/DES** 加密方式。

先要给 url 加密，url 需要在 teacherList.vue 组件加密。我们先在项目中安装 `npm install cryptojs` 

然后在 utils 目录下，创建一个 utils.js 文件，在里面将加密的方法写进去。

```javascript
const CryptoJS = require('crypto-js'); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量

//加密方法
export function Encrypt(word) {
	let srcs = CryptoJS.enc.Utf8.parse(word);
	let encrypted = CryptoJS.AES.encrypt(srcs, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.ciphertext.toString().toUpperCase();
	// 如果不需要解密.ciphertext.toString().toUpperCase();将这段代码删除
}

export default {
	Encrypt
}
```

然后再到需要的地方将这个文件里的 Encrypt 方法引入，对想要加密的 url 进行加密即可。

```javascript
 this.url = Encrypt(URL.createObjectURL(blob));
```

接下来就是解密了，我们需要将 `<script src="https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js"></script>` 放到 `<script src="./viewer.js"></script>` 的前面，然后在 viewer.js 文件里面将一下解密的部分写进去。

```javascript
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量

function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  // console.log(Decrypt)
  return decryptedStr.toString();
}
```

现在我们需要找到 viewer.js 是在哪里拿地址栏的 file 参数并对 file 做处理的，然后在那里将这个 file 参数解密。

经过打了多个 log，最后找到了在如下位置，我们给它解密了就可以了。

```javascript
    var parameters = Object.create(null);
    if (typeof file === 'string') { // URL
      this.setTitleUsingUrl(Decrypt(file)); // 这里
      parameters.url = Decrypt(file);  // 这里
    } else if (file && 'byteLength' in file) { // ArrayBuffer
      parameters.data = file;
    } else if (file.url && file.originalUrl) {
      this.setTitleUsingUrl(file.originalUrl);
      parameters.url = file.url;
    }
    if (args) {
      for (var prop in args) {
        parameters[prop] = args[prop];
      }
    }
```
