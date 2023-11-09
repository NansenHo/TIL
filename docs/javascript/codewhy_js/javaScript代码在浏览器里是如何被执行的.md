# JavaScript 代码在浏览器里是如何被执行的

### 1. 下载 JavaScript 文件，获取 JavaScript 代码

浏览器并不是直接在一开始就去下载 JavaScript 文件的，

而是先通过 DNS 域名解析后，访问到服务器，拿到 index.html 文件（入口文件），再根据 index.html 里的引用，再去下载对应的文件。

比如 index.html 里引用的 main.js，那浏览器就会去服务器相应位置下载 main.js 文件。

[浏览器内核](浏览器内核（渲染引擎）.md)

[浏览器渲染过程](浏览器渲染过程.md)