# 实现组件 `props` 功能

## `props` 涉及到的功能点

1. 可以通过 `setup` 传入 `props`

2. 在 `render` 里可以通过 `this` 访问到 `props` 里 `key` 的值。

3. `props` 是一个 `readonly` 的响应式对象，是不可修改的。
