# 禁止下载 PDF

## 项目背景

我们已经实现了将 PDF 内嵌到 pdf.js 的 `index.html` 页面里打开，并在该页面里实现了客户想要的禁止右键、隐藏打印等按钮以及打印页面就让页面变成空白的功能。

但，由于是直接将 PDF 的 URL 传给前端，前端再将 URL 放到地址栏的 `file` 参数里。

所以用户可以直接复制地址栏里的链接去下载 PDF 。

## 解决过程

### 解密 `base64` 的 PDF 文件

现在后端不直接传 URL， 而是经过 `base64` 加密后的 PDF。

```json
// 通过 base64 加密后的 PDF
JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVhdG9yIChNb... // 后面还有非常长的内容
```

首先我要做的是将这个 `base64` 字段解密，打开后端传给我的 PDF。

这里的思路是，将 `base64` 转成 `blob`，然后再用 `window.URL.createObjectURL` 方法将 `blob` 转成 URL 打开。

[Base64 representing PDF to blob - JavaScript](https://stackoverflow.com/questions/36036280/base64-representing-pdf-to-blob-javascript)

在上面这篇文章里找到了如何将 `base64` 的 PDF 转成 `blob`。

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

用以上代码，就能成功实现了打开后端传过来的 `base64` 加密后的 PDF。

但还有个问题，我们用 `URL.createObjectURL` 生成的这个 URL 也是可以打开 PDF 的。

且这个 URL 还是直接暴露在地址栏的 `file` 参数里面的。

### 避免在地址栏暴露 PDF URL

#### 选解决方案

调查了很多解决方法，思路大概有 4 个：

1. 不通过地址栏的 `file` 参数来传 URL；

2. 把 URL 加密后，传给 `file` 参数，然后再在 `pdf.js` 里去解密；

3. 尝试用 `pdf.js` 插件直接直接收 `base64` 的 PDF。

不通过地址栏传那就需要自己写一个页面，在里面用 `canvas` 标签或者 `iframe` 标签等来展示 PDF。

这样做比较复杂，暂不考虑。

考虑到我的 `pdf.js` 版本比较老，而且之前也对 `pdf.js` 文件做了一些修改，所以不好重新再来完全换一种实现方式。

所以用 `pdf.js` 插件直接接收 `base64` 的 PDF 的方案不行。

最后决定，先尝试用第二种方式来做。

#### 前端加密方案

前端常见的几种加密方式：

1. `base64` 加密

   该方案肯定不行。因为 `base64` 字段太长，浏览器会报 `414 URL TooLong` 错误。

2. `MD5` 和 `sha1`

   这两种加密方式是不可逆的，所以也不行。

3. `escape()`

   只会将所有的空格符、标点符号、特殊字符以及其他非 ASCII 字符都将被转化成 `%xx` 格式的字符编码，这种加密不够强大，也不行；

4. 最后决定使用 **AES/DES** 加密方式。

   加密可逆，且加密力度适合。

#### 加密具体实现

我们先在项目中安装 `npm install cryptojs`

然后在 `utils` 目录下，创建一个 `utils.js` 文件，在里面将加密的方法写进去。

```javascript
const CryptoJS = require("crypto-js"); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412"); //十六位十六进制数作为密钥偏移量

//加密方法
export function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
  // 如果不需要解密.ciphertext.toString().toUpperCase();将这段代码删除
}

export default {
  Encrypt,
};
```

然后再到需要的地方将这个文件里的 `Encrypt` 方法引入，对想要加密的 URL 进行加密即可。

```javascript
this.url = Encrypt(URL.createObjectURL(blob));
```

#### 解密具体实现

接下来就是解密了，我们需要将

```html
<script src="https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js"></script>
```

放到

```html
<script src="./viewer.js"></script>
```

的前面，然后在 `viewer.js` 文件里面将一下解密的部分写进去。

```javascript
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412"); //十六位十六进制数作为密钥偏移量

function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  // console.log(Decrypt)
  return decryptedStr.toString();
}
```

但我们还需要找到 `viewer.js` 是在哪里拿地址栏的 `file` 参数并做处理的。

然后在那里将 `file` 参数解密。

我找到代码里的相关逻辑和变量，并通过打印 `log` 来确定。

最后找到了在如下位置：

```javascript
var parameters = Object.create(null);
if (typeof file === "string") {
  // URL
  this.setTitleUsingUrl(Decrypt(file)); // 这里
  parameters.url = Decrypt(file); // 这里
} else if (file && "byteLength" in file) {
  // ArrayBuffer
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
