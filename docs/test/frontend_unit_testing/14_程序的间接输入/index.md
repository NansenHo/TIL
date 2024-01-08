# 程序的间接输入

## 什么是直接输入

即业务代码里的函数**直接通过参数传入的形式**，去接受数据进行计算。

我们调用函数，传入参数即可，这种方式就是直接输入。

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## 什么是间接输入

像下面的代码一样，通过其他模块/函数/全局对象等等**传入参数之外的方式**输入数据，叫做间接输入。

```ts
export function doubleUserAge(): number {
  return userAge() * 2; // 通过 userAge 获得数据
}
```

### 为什么间接输入需要特殊处理

```js
function userAge() {
  return 23;
}
```

`userAge` 可能是通过请求 API 或者读取 `store` 里的数据来获取的。

即 `age` 是一个很可能会变化的值。

```js
const doubleAge = doubleUserAge();

expect(doubleAge).toBe(50);
```

如果像直接输入那样写死，测试就会在每次 `age` 更新后都需要维护。

这种测试就是脆弱的测试。

仔细思考一下，我们想测的实际上是 `* 2` 的这个逻辑。

`age` 的值是多少，其实不需要关心。

我们需要去控制 `userAge` 的值。

## 各种间接输入的处理方式

## 什么是 stub

**stub** 就是替换掉真实的逻辑实现的测试术语。

stub 可以使测试可以和外部真实代码实现解耦，使测试逻辑更简单，更容易理解。

### `vi.mock`

很多测试框架都提供了**修改模块内部值**的能力。

`vi.mock` 函数就是 Vitest 提供的 stub 实现。

`vi.mock` 接受两个参数，第一个参数是**路径/模块名**，第二个参数是一个**工厂函数**。
