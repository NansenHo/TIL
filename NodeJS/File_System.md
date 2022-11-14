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

> 在 Node.js 里，其回调函数有 `error` 优先的特点，即 `error` 是回调函数的第一个参数。