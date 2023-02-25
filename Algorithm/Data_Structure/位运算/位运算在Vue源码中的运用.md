# 位运算符在 Vue 源码中的运用例子

```ts
// packages/shared/src/shapeFlags.ts
export const enum ShapeFlags {
  ELEMENT = 1,                           // 1
  FUNCTIONAL_COMPONENT = 1 << 1,         // 
  STATEFUL_COMPONENT = 1 << 2,           // 
  TEXT_CHILDREN = 1 << 3,                // 
  ARRAY_CHILDREN = 1 << 4,               // 
  SLOTS_CHILDREN = 1 << 5,               // 
  TELEPORT = 1 << 6,                     // 
  SUSPENSE = 1 << 7,                     // 
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,  // 
  COMPONENT_KEPT_ALIVE = 1 << 9,         // 
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
  // 使用按位或，将这两种类型授权给了 COMPONENT
}
```

该 `shapeFlags` 是用来判断每一个虚拟 DOM 的类型。

上面代码将每一种虚拟 DOM 类型**标记了一个 2 进制位**。

## 授权、验证、删除授权

用 `|` 按位或运算来进行授权。
用 `&` 按位与运算来进行权限验证。 
用 `^` 异或运算来删除权限。

如：
```js
let BOSS = 1,
    PG = 1<<1,
    PM = 1<<2,
    TL = 1<<3,
    HR = 1<<4;

// 授权
let Tom = PG | PM

// 验证
console.log('Tom是PG', !!(Tom&PG))
console.log('Tom是PM', !!(Tom&PM))
console.log('Tom是HR', !!(Tom&HR))
console.log('Tom是BOSS', !!(Tom&BOSS))

// 删除授权
Tom = Tom ^ PM
console.log('Tom是PM', !!(Tom&PM))

// 授权
Tom = Tom | TL
```