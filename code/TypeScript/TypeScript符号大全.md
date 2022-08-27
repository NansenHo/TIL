# TypeScript 符号大全

## ?. 可选链（Optional Chaining）操作符

我们可以使用可选链链式地访问一个对象上可能为 `null` 或 `undefined` 的属性，并且不用检查中间的属性是否为空。

如果遇到 `null` 或 `undefined` 就可以立即停止某些表达式的运行。

可选链支持的写法有：

```jsx
obj?.prop

obj?.[expr]

arr?.[index]

func?.(args)
```

## ! 非空断言操作符

> ! 非空断言操作符 —— TypeScript 代码中的清道夫

只需在一个变量后加上 `!`，它就会排除掉该变量中的 `null` 和 `undefined` 。

`x!` 将从 `x` 值域中排除 `null` 和 `undefined` 。 