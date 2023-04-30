# Generics 泛型 {ignore=true}

[toc]

## what's generics

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

> 泛型：泛化的類型

我们在声明方法时，当在完成方法功能时如果有未知的数据需要参 与，这些未知的数据需要在调用方法时才能确定，那么我们把这样的数据通过**形参**表示。在方法体中，**用这个形参名来代表那个未知的数据，而调用者在调用时，对应的传入实参就可以了**。

受此啟發，誕生了泛型的概念。

泛型，即**類型參數**，参数化类型(Parameterized type)。
這個類型參數代表**未知的某種通用的類型**。

## how to use generics

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

```ts
// 增加一个新的泛型变量 U
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

// 在使用函数的时候，再显式指定泛型变量的实际类型
identity<number, string>(1999, '1999')
// 也可以不显式指定，让 TypeScript 自动完成类型推导
identity(1998, 1998)
```