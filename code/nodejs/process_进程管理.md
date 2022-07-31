# Process 进程管理

在 Node 中，有全局变量 `process` 表示当前的 Node 进程。

只要在 Node 的环境里， `process` 就不需要从包里载入，可以直接调用。

```jsx
console.log(process.argv);

// 执行 node index.js argv1 argv2
// 会得到
// [
//  'D:\\Software\\nodejs\\node.exe',
//  'C:\\Users\\pc\\Desktop\\nodejs\\03-process\\index.js',
//  'argv1',
//  'argv2'
// ]
```

> `process.env.NODE_ENV` 。
> `process.env` 包含着关于系统环境的信息，但是 `process.env` 中并不存在 `NODE_ENV` 这个东西。
> `NODE_ENV` 是用户一个自定义的变量，在 `webpack` 中 `NODE_ENV` 是判断是生产环境还是开发环境的依据。