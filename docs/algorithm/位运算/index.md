# 位运算

## 什么是位运算

计算机对二进制的运算，就是位运算。

计算机中的数在内存中都是以二进制形式进行存储的，
用位运算就是**直接对整数存在内存中的二进制位进行操作**，
因此其**执行效率非常高**，
**在程序中尽量使用位运算进行操作，这会大大提高程序的性能**。

位图：用一串比特位存储 `0` 和 `1` 两种状态。

## 位运算符

<!-- prettier-ignore -->
| 位运算符号 | 运算规则 |
| :--- | :--- |
| `<<` 左移 |	各二进位全部左移若干位，高位丢弃，低位补 `0` |
| `>>` 右移	| 各二进位全部右移若干位，对无符号数，高位补 `0`，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补 `0`（逻辑右移）|
| `&` 按位与 | 两个位都为 `1` 时，结果才为 `1`，否则结果为 `0` |
| `\|` 按位或 | 两个位都为 `0` 时，结果才为 `0`，否则结果为 `1` |
| `^`	异或 | 两个位相同为 `0`，相异为 `1` |
| `~` 取反 | `0` 变 `1`，`1` 变 `0` |

## 位运算符在 Vue 源码中的运用例子

<!-- prettier-ignore -->
```ts
// packages/shared/src/shapeFlags.ts
export const enum ShapeFlags {
  ELEMENT = 1,                          // 0000000001
  FUNCTIONAL_COMPONENT = 1 << 1,        // 0000000010
  STATEFUL_COMPONENT = 1 << 2,          // 0000000100
  TEXT_CHILDREN = 1 << 3,               // 0000001000
  ARRAY_CHILDREN = 1 << 4,              // 0000010000
  SLOTS_CHILDREN = 1 << 5,              // 0000100000
  TELEPORT = 1 << 6,                    // 0001000000
  SUSPENSE = 1 << 7,                    // 0010000000
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 0100000000
  COMPONENT_KEPT_ALIVE = 1 << 9,        // 1000000000
  // 使用按位或，将这两种类型授权给了 COMPONENT
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT, // 0000000110
}
```

该 `shapeFlags` 是用来判断每一个虚拟 DOM 的类型。

上面代码将每一种虚拟 DOM 类型**标记了一个 2 进制位**。

### 授权、验证、删除授权

- 用 `|` 按位或运算来进行 **授权**。

- 用 `&` 按位与运算来进行 **权限验证**。

- 用 `^` 异或运算来 **删除权限**。

如：

<!-- prettier-ignore -->
```js
let BOSS = 1,  // 00001
  PG = 1 << 1, // 00010
  PM = 1 << 2, // 00100
  TL = 1 << 3, // 01000
  HR = 1 << 4; // 10000

// 授权
let Tom = PG | PM;

// 验证
console.log("Tom是PG", !!(Tom & PG));
console.log("Tom是PM", !!(Tom & PM));
console.log("Tom是HR", !!(Tom & HR));
console.log("Tom是BOSS", !!(Tom & BOSS));

// 删除授权
Tom = Tom ^ PM;
console.log("Tom是PM", !!(Tom & PM));

// 授权
Tom = Tom | TL;
```

## JS 下的进制转换

### 其他进制转换成十进制

```js
// 2 进制转换成 10 进制
parseInt("10", 2); // 2

// 16 进制转换成 10 进制
parseInt("a", 16); // 10
```

### 十进制转换成其他进制

<!-- prettier-ignore -->
```js
2..toString(2); // '10'
(2).toString(2); // '10'

(10).toString(16); // 'a'
```
