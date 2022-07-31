# File System 文件系统

文件模块是我们平时用得比较多的一个模块，比如常用的 webpack 的 loader（加载文件）。

```jsx
const fs = require('fs')

fs.writeFile('./xxx.txt', 'nansen', (error, data) => {
		// error 优先
    if (error) { console.log(error) }
    console.log('文件创建成功')
})
```

拥有对文件的操作能力，这在浏览器环境中，是难以想象的。

试想你打开一个网页，网页上的一段脚本在你电脑上创建了文件夹，再往里面塞入了一堆骂你的文字。

> 在 Node.js 里，其**回调函数有error 优先的特点，即 error 是回调函数的第一个参数**。

