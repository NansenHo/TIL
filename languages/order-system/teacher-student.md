

## 目录

+ [`window.open()` 跳转新标签页被浏览器拦截问题](#`window.open()` 跳转新标签页被浏览器拦截问题)
+ [打开一个空白新标签页，新标签页里的所有内容都从接口获取](#打开一个空白新标签页，新标签页里的所有内容都从接口获取)
+ 

### `window.open()` 跳转新标签页被浏览器拦截问题

在浏览器的安全机制里，非用户触发的 `window.open` 方法是会被拦截的。

例如，
我们将 `window.open` 放到了 AJAX 的回调函数里面的话，就会被浏览器拦截，因为浏览器认定这不是用户所触发的。
但如果我们在一个 button 的 click 事件上加上 `window.open` 的话，浏览器就会认为是用户点击触发的。

而我这里遇到的问题就是，将 `window.open` 写在了 AJAX 的回调

函数里面，所以导致了浏览器拦截。于是我将 `window.open` 的相关代码，都封装到了一个方法里面，然后在 AJAX 的回调函数中调用这个方法。这样就 ok 了，浏览器就不会拦截了。

### 打开一个空白新标签页，新标签页里的所有内容都从接口获取

接口返给我的内容为：

```html
<html>
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=Windows-31J">
     </head>
     <body>
        <form name="UnionpayStartCall" action="https://pt01.mul-pay.jp/payment/UnionpayStart.idPass" method="POST">
        <noscript>
        <center>
            <h2>ネット銀聯の決済画面へ遷移します。</h2>
            <input type="submit" value="続行">
        </center>
        </noscript>    <input type="hidden" name="AccessID" id="AccessID" value="d152e8e1a8fb8083fee9df833552bf23" />
    <input type="hidden" name="Token" id="Token" value="zbL634SU13iCi5b71U5jFITofi6suAQBcUc6xFa1+cmwBS7yYvxSiC0zeMVH+O4F" />
     </form>
     <script >

     function OnLoadEvent() {
         console.log("submit");
        document.UnionpayStartCall.submit();
     }
        OnLoadEvent();

     </script>
     </body>
</html>
```

注意，里面有 JavaScript 代码。

然后，现在来看一下整体的实现思路：

```javascript
let newWin = window.open('_blank');  // 先打开一个新标签
newWin.document.write(response); // 然后把接口返的东西放到新标签里
```

由于接口返给我们的页面内容里有 JavaScript 代码，如果直接把接口返的页面内容放到新标签里，JavaScript 是不会执行的。

解决方法是，将 response 存到 localStorage 里，再拿出来用。（如果没有 JavaScript 代码也就不需要这一步了）

```javascript
window.localStorage.setItem('responseHTML', response);
let newWin = window.open('_blank');
newWin.document.write(localStorage.getItem('responseHTML'));
newWin.document.close(); // 关闭输出流
```

到此为止，该问题就解决了。

但要注意，如果在 AJAX 的回调函数中直接使用 `window.open` ，现在的浏览器一般会拦截新标签页的打开，详细可参考 [这里](#`window.open()` 跳转新标签页被浏览器拦截问题) 。

### 点击某按钮后，为整个页面添加遮罩

想实现，用户点击付款，然后用户跳转到新页面去付款。于是当前页面跟着盖上遮罩，让用户无法操作该页面，并在这遮罩上添加一个“支付完成”按钮，用户点击该按钮，遮罩和该按钮都会去掉。

```javascript
    createMask() {
      if (document.querySelector('#mask')) {
        return true;
      }
      let mask = document.createElement('div');
      let finish = document.createElement('button');
      mask.id = 'mask';
      mask.className = 'mask';
      mask.style = 'left: 0; top: 0; bottom:0; right:0; position: fixed; z-index: 				200; background: rgba(0,0,0,0.6);';
      finish.id = 'finish';
      finish.className = 'finish';
      finish.style = 'position: absolute; z-index: 300; top: 50%; right: 50%; 						margin-top: -25px; margin-right: -91px; padding: 1em 2em; font-size: 14px; 				 border: none; border-radius: 4px; color: #fff; background-color: #409eff';
      finish.innerHTML = '支払い終わりました';
      document.body.appendChild(mask);
      document.body.appendChild(finish);
      document.documentElement.classList.add('htmlMask');
      finish.addEventListener('click', this.deleteMask);
    },

    deleteMask() {
      let mask;
      let finish;
      if (mask = document.querySelector('#mask')) {
        mask.parentNode.removeChild(mask);
        document.documentElement.classList.remove('htmlMask');
      }
      if (finish = document.querySelector('#finish')) {
        finish.parentNode.removeChild(finish);
      }
    },
```

以上代码是写在 Vue methods 里面的，createMask 函数绑定到增加遮罩的点击事件上。

以上代码有几个知识点需要注意：

1. mask 的 style 写法

2. finish 按钮的 style 写法
   `top: 50%; right: 50%; margin-top: -25px; margin-right: -91px;` 这里使用了负 margin 以让按钮垂直水平居中。

3. 文档对象模型DOM

   + `let mask = document.createElement('tagName')` 创建一个新的元素；[Document.createElement]([Document.createElement() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement))

   + `document.body.appendChild(mask)` 将一个节点附加到指定父节点的子节点列表的末尾处。
     如果将被插入的节点已经存在于当前文档的文档树中，那么 `appendChild()` 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）；

     [Node.appendChild]([Node.appendChild - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild))

   + 尽量使用 `document.querySelector()`  和 `document.querySeletorAll()` 来获取元素；
     不推荐用 `document.getElementById()` 和 `document.getElementByTagName()` 和 `document.getElementByClassName()` 来获取元素。

   + `mask.parentNode` 返回指定的节点，即 mask 节点在DOM树中的父节点。[Node.parentNode]([Node.parentNode - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentNode))

   + `mask.parentNode.removeChild(mask)` 删除 mask 节点自己。`Node.removeChild()` 方法从DOM中删除一个子节点。返回删除的节点。

   + `document.documentElement.classList` 返回一个元素的类属性的实时 [`DOMTokenList`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList) 集合。我们可以对这个集合做 `.add('className')` 和 `.remove('className')` 等操作。[Element.classList]([Element.classList - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList))
   



### 关于 `process.env.NODE_ENV`

在 node 中，有全局变量 process 表示的是当前的 node 进程。

我们可以在项目中把这个 process 打出来看看。

`process.env` 包含着关于系统环境的信息，但是 `process.env` 中并不存在 `NODE_ENV` 这个东西。

`NODE_ENV` 是一个用户自定义的变量，在 webpack 中它的用途是**判断是生产环境还是开发环境**。

```javascript
// 开发环境
process.env.NODE_ENV === "development"

// 生产环境
process.env.NODE_ENV === "production"
```

### 后端传给我 pdf  的 base64 字段，我在前端需要将 pdf  内嵌到  pdf.js 的 viewer.html 里面打开

pdf.js 插件里，原来是 viewer.html 但是在这个项目里我将其重命名成了 index.html 。

其实之前我们已经实现了将 pdf 内嵌到 pdf.js 的 index.html 页面里打开了，并在该页面里实现了客户想要的禁止右键、隐藏打印等按钮以及打印页面就让页面变成空白的功能。

但是由于之前是直接将 pdf 的 url 传过来，我再将 url 放到地址栏的 file 参数里，所以用户可以直接复制地址栏里的链接去下载 pdf 。所以后端现在改了，不直接传 url， 而是经过 base64 加密后的 pdf url 的字段。

```json
JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVhdG9yIChNb... // 后面还有非常长的内容
```

上面就是一个经过 base64 加密后的 pdf url 字段。

**首先我要做的是将这个 base64 字段解密，能打开后端传给我的 pdf 。**

刚开始尝试直接用 pdf.js 打开 base64 的 pdf ，但由于 base64 字段太长，根本没法从 file 参数里传过去（报 414 URL TooLong 错误）。还尝试挺多别的方法，都没成，但现在已经不太记得清了。

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
    if (process.env.NODE_ENV == 'production') {
        window.open('/pdf/index.html?file=' + _this.url);
    } else {
        window.open('/pdf/index.html?file=' + _this.url);
    }
}
```

用以上代码，就能成功实现了打开后端传过来的 base64 加密后的 pdf 。

但还有个问题，我们用 `URL.createObjectURL` 生成的这个 URL 也是可以打开 pdf 的。而且这个 URL 是直接写在地址栏的 file 参数里面的。

**那现在怎么解决这个问题呢？**

调查了很多，思路大概有三个，不通过地址栏的 file 参数来传 url；把 url 加密之后传给 file 参数，然后 index.html 的代码里面去解密；尝试用 pdf.js 插件直接直接收 base64 的 pdf。

不通过地址栏传那就需要自己写一个页面，在里面用 canvas 标签或者 iframe 标签等来显示；

用 pdf.js 插件直接接收 base64 的 pdf 这个考虑到我的 pdf.js 版本比较老，而且之前也对 pdf.js 文件做了一些修改，所以不好重新再来完全换一种实现方式；

最后还是尝试用第二种方式来做。

[前端加密的几种方式](https://blog.csdn.net/qq_41107680/article/details/109596232) 看了这篇博客，base64 加密肯定不行，base64 字段太长，浏览器会报 414 URL TooLong 错；MD5 和 sha1 是不可逆的也不行；`escape()` 只会将所有的空格符、标点符号、特殊字符以及其他非ASCII字符都将被转化成%xx格式的字符编码，这种加密明显不够也不行；最后决定使用 AES/DES 加密方式。

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



### 「导出 memo」按钮的 bug 解决

最开始的代码是这么写的，直接调用接口

```javascript
handleExport(row) { // 跳转按钮的点击事件
    let _this = this;
    let token = sessionStorage.getItem('token');
    // this.address_img 是 http://101.34.137.163:8008/ 
    window.open(`${_this.address_img}api/student/txt?token=${token}`);
}
```

这样在学生有 memo 的时候，接口直接返给我的是所有需要下载的数据，然后我这边只需要跳转该 url  ``${_this.address_img}api/student/txt?token=${token}`` 就能下载下来学生的 memo。

但是学生没有 memo 的时候，后端 `api/student/txt` 接口返给我的是 

```json
{
	data: ""
	status: "0000"
	msg: ""
}
```

所以在没有 memo 时，就会跳转到一个新标签页，然后里面的内容是上面的这些 json 数据。

所以需要有个判断，学生是否有 memo 。

这里我最开始用 `response.data.length` 的长度来判断，后来又换了用 `res.status === "0000"` 来判断。但都不行，最后用了 `typeof res == 'object'` 总算是成功了。最终代码如下：

```javascript
handleExport(row) { // 跳转按钮的点击事件
    let _this = this;
    let data = {};
    let token = sessionStorage.getItem('token');
    getTxt(data).then((res) => {
        if (typeof res == 'object') {
            _this.$message.error('还没有 memo 呢');
        } else {
            window.open(`${_this.address_img}api/student/txt?token=${token}`);
        }
    });
},
```

### 用 WinSCP 将前端代码打包上传至服务器

1. 前端项目中运行 `npm run build` 打包代码。
2. 打开我们公司用来上传服务器的软件 WinSCP。
   WinSCP 是一个 Windows 环境下使用的 SSH 的开源图形化 SFTP 客户端。同时支持 SCP 协议。它的主要功能是在本地与远程计算机间安全地复制文件，并且可以直接编辑文件。
3. 输入 Host name 和 User name 和 Password ，点击 Log in 登录进入软件。
4. 在左侧（本地目录）找到前端打包好的 dist 目录，在右侧（远程目录）找到需要上传的位置。
5. 将右侧的需要更新的文件删除，将左侧 dist 目录里的最新打包好的文件拖进去。

### ElementUI 的 `this.$message.success()` 使用

`this.$message.success()` 里面的内容不能是 `undefined` 。

如果是 `undefined` 的话会报错，具体如下：

```
Uncaught (in promise) TypeError: Cannot set properties of undefined (setting 'type')
at Function.Message.<computed> [as success]
```

