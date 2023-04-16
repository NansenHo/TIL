# tsc 和 ts-node {ignore=true}

[toc]

## tsc (typescript compiler)

**tsc 是一个编译器**。
把 ts 编译为 js。**只编译**。

```shell
# add `tsconfig.json` file to your project
npx tsc --init
```

### tsc --watch

如果我们要在浏览器中使用 ts 文件，

那首先需要将 ts 文件通过 tsc 转译成 js 文件，
再引入浏览器中使用。

如果我们更改了原来的 ts 文件，那需要重新进行转译。

为了避免如此麻烦，可以使用

```shell
tsc index.ts --watch
```

`--watch` 表示开启了**监听模式**，只要重新保存了 ts 文件，就会自动调用 tsc 将其转译成 js 文件。

## ts-node

**ts-node 是一个执行环境**。
把 ts 编译为 js ，然后在node上运行。即：**编译+执行**。

## Main difference

1. `tsc` transpile all the file according to your tsconfig

2. `ts-node` will start from the entry file and transpile the file step by step through the tree based on the import/export.


## Links

[Typescript with Node: Should I use ts-node or tsc & node? - reddit/typescript](https://www.reddit.com/r/typescript/comments/8vkvzy/typescript_with_node_should_i_use_tsnode_or_tsc/)