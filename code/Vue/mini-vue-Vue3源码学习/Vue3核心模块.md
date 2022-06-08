# Vue 核心模块

![Vue 核心模块](../../../images/mini-vue/Vue核心模块.jpeg)

上部分处理编译成JS，下部分处理运行时（来运行编译后的JS）；

1. @vue/compiler-sfc：解析单文件组件；
    - 单文件组件最终会被解析成一个纯 JS 文件；
    - @vue/compiler-sfc 包含了 @vue/compiler-dom 和 @vue/compiler-core；
2. @vue/compiler-dom：@vue/compiler-sfc 和 @vue/compiler-core 配合着将 template 编译成 render 函数；
    - @vue/compiler-dom 底层依赖了 @vue/compiler-core ；
3. @vue/runtime-dom 处理 DOM 节点上的一些东西。
    - @vue/runtime-dom 底层依赖 @vue/runtime-core；
4. @vue/runtime-core 是底层核心运行时；
5. @vue/reactivity 实现了响应式；

Vue 只是一个出口

[可以看到 template 最终被转换成的 render 函数](https://vue-next-template-explorer.netlify.app)

Vue 运行起来后，里面用的都是 runtime-core 里的函数。

我们自己也可以引入一些 运行时 的函数来写 render 函数，和我们写单文件组件一样。
