# Map and WeakMap

## Links

- [WeakMap - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [Map - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## 定义

`WeakMap` 是一种键值对的集合。

`WeakMap` 的键必须是 **对象 / 非全局注册的 Symbol **，值可以是**任意的 JavaScript 类型**。

> 由于 `WeakMap` 的键必须是要可以被垃圾回收的。
> 而大多数原始数据类型可以被任意地创建，且没有生命周期，因此不能作为键。
> 

`WeakMap` 的键是**弱引用（weak reference）**的。
在普通的 JavaScript 对象（如 `Map`、`Object`）中，键是强引用（strong reference）的。

### 弱引用和强引用

强引用是指，只要对象被某个变量或数据结构（如对象、数组等）引用着，JavaScript 的垃圾回收器（GC）就不会回收这个对象。

弱引用

```js
let obj = { name: "John" };
const map = new Map();
map.set(obj, "value");

// 这只会解除 `obj` 变量对 { name: 'John' } 对象引用
// 但 `map` 仍然持有对这个对象的引用
obj = null;
obj; //=> null

// 现在 obj 被 map 强引用，无法被垃圾回收
[...map.keys()][0]; //=> {name: 'John'}
```

```js
let obj = { name: "John" };
const weakMap = new WeakMap();
weakMap.set(obj, "value");

obj = null; // 这次，不仅 obj 变量被清除了，WeakMap 也不再引用 { name: 'John' }
obj; //=> null

weakMap.get(obj); //=> undefined
```
