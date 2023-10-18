# `Console.log()` 的 bug

## The Bug

在 Console 面板中运行以下代码，会发现打印出来的都是修改后的对象。

```js
let cat = {
  name: "miaomiao",
  age: "1",
};
console.log(cat);

cat.name = "mimi";
cat.age = "3";
console.log(cat);
```

![](assets/console_log的bug.jpg)

## Why

这是因为 `console.log()` 参数，即对象在被打印前，是 **以引用的方式被储存的** 。

我们 **传入 `console.log(obj)` 的参数实际上是 `obj` 对象的引用地址值** 。

所以最后打印出来的都是最终被修改了的值。

## 那我们要怎么处理这种情况呢？

1. 使用 Source/资源 面板中的断点来调试
2. 打印一个从这个对象复制出来的对象。
3. 使用 `JSON.stringify()` 方法处理打印的结果
