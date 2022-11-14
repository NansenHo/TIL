# template 和 jsx

vue 是更彻底的 dsl ，举个例子，你没法把 vue 组件单独拎出来处理，react 组件本质上就是 class 或者 function ，随便你拿去做什么。

template里面的变量只能是有限的几个来源，data computed methods setup props，jsx哪些是静态的部分很容易判断。如果是render jsx，来源就多了：import，某些值来自函数调用：object[xxx]()，完全不知道哪些依赖状态，哪些不会变化，diff就没办法通过打tag优化

换句话说 dsl 给了足够的约束，编译时的优化很好做。完全放开jsx，本质上就是js，举个例子：变量object[a]，完全无法判断这个变量究竟是个固定的字符串，还是状态

哪怕 render 前后完全没有变化，还是得 diff 一下看看