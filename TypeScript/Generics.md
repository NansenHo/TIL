# Generics 泛型 {ignore=true}

[toc]

## What's Generics

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

## What's `<T>`

```ts
function identity<T>(value: T) ：T {
	return value;
}
```

`<T>` 是我们希望传递给 identity 函数的**类型占位符**。

> 常见泛型变量：
> T, Type 表示类型
> K, Key 表示对象中键的类型
> V, Value 表示对象中值的类型
> E, Element 表示元素类型

实际上，`T` 可以用任何有效名称代替。

`(value: T) : T` 是将 `<T>` 链式传递给参数和返回值类型。

## 更复杂的例子

```ts
// 增加一个新的类型变量 U，用于拓展 identity 函数
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
```
