# 程序的间接输入

## 什么是直接输入

即业务代码里的函数**直接通过参数传入的形式**，去接受数据进行计算。

然后我们调用函数，传入参数即可。

这种方式就是直接输入。

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## 什么是间接输入

像下面的代码一样，通过其他模块/函数/全局对象等等，**传入参数之外的方式**输入数据，叫做间接输入。

```ts
export function doubleUserAge(): number {
  return userAge() * 2; // 通过 userAge 获得数据
}
```
