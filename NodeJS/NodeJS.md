# 认识 Node.js

## 学习 node.js 之前，我们需要准备的环境和工具

1. `node.js`
2. `nrm`，用于切换下载源。 
    `yarn` 对应 `npm` ； 
    `yrm` 对应 `nrm`。 
    尽量使用 `yarn` 和 `yrm`。    
3. `ts-node`，可以运行 TypeScript 的 `node`。
5. `iTerm2` & `oh my zsh`。

> **中英文 nodejs 官网**
> - [Node.js 英文官网](https://nodejs.org/en/)
> - [Node.js 中文网（有教程和 API 文档）](http://nodejs.cn/)

> 官网里，有 **LTS** 和 **Current** 两个版本。
> - 前者是 long time support 长期支持版，
> - 后者是当前最新版本。
> - 一般情况下，在生产环境里，用 LTS 版本。

## 认识 Node.js

严格来说，Node.js 不是一门编程语言，而和浏览器一样，都是 JS 的运行环境 之一。

**Node.js 是一个提供给 JS 运行的环境**，它集结了多种技术，使得 JS 在其中可以调用很多系统级别的接口，如文件读写 ( File System ) 、进程的管理 ( Process ) 、网络通信 ( HTTP/HTTPS ) 等等。

> node 一共有三类模块：
> 1. 内置模块
> 2. 第三方模块
> 3. 自定义模块

而浏览器是有安全级别限制的，有[安全沙箱](https://juejin.cn/post/6844903805419536398)、同源策略等。

在浏览器的环境下，去操作本地资源、进程等等都是很难的。

> **nodejs 学习教程**
> - [廖雪峰 nodejs 讲解](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025235359040)
> - [《深入理解Node.js：核心思想与源码分析》](https://yjhjstz.gitbooks.io/deep-into-node/content/)