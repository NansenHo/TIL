# 位运算符在 Vue 源码中的运用例子

```JavaScript
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
  // 
}
```

该 `shapeFlags` 是用来判断每一个虚拟 DOM 的类型。