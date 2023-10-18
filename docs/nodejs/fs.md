# File System

## fs

In Node.js, you can programmatically manipulate files with the built-in fs module.

The module contains all the functions you need to read, write, and delete files on the local machine.

This unique aspect of Node.js makes JavaScript a useful language for back-end or CLI tool programming.

The `fs` module supports interacting with files synchronously, asynchronously, or via streams.

## usage of fs

### `fs.writeFile(file, data[, options], callback)`

```js
const fs = require('fs')

fs.writeFile('./hello.md', 'hello', err => {
	// if failed, return Error object.
})
```

## File System

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

