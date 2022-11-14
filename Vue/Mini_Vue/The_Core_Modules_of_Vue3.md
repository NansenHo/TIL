# The Core Modules of Vue3

![Vue 核心模块](assets/images/Vue核心模块.jpeg)

上部分处理**编译成JS**，下部分处理**运行时（来运行编译后的JS）**；

- `@vue/compiler-sfc`：专门解析单文件组件；
    - 单文件组件最终会被解析成一个纯 JS 文件；
    - `@vue/compiler-sfc` 包含了 `@vue/compiler-dom` 和 `@vue/compiler-core`；
- `@vue/compiler-dom` 和 `@vue/compiler-core` 负责配合起来将 `template` 编译成 `render` 函数；
    - `@vue/compiler-dom` 底层依赖了 `@vue/compiler-core` ；

> **注意**
> - `@vue/compiler-sfc` 把 sfc 转化成 js 文件；
> - `@vue/compiler-dom` 和 `@vue/compiler-core` 将 template 转化成 render 函数。
> 
> 这两者是完全不一样的。

[template 最终生成的 render 函数 —— 演示网站](https://vue-next-template-explorer.netlify.app)

> render 函数里面使用到的函数基本上都是在 Vue 的运行时里面导出的。

> 我们直接写 JS 文件，里面引入 Vue 运行时提供的函数，也是可以跑起来的。
--- 

- `@vue/runtime-dom` 处理 DOM 节点上的一些东西。
    - `@vue/runtime-dom` 底层依赖 `@vue/runtime-core`；
- `@vue/runtime-core` 是底层核心运行时（重点）；
- `@vue/reactivity` 实现了响应式；
  - 先要理解了 `@vue/reactivity` ，了解它是如何去收集/触发依赖后，才能去看 `@vue/runtime-core`

> 最外面的 Vue 只是所有内容的一个出口。