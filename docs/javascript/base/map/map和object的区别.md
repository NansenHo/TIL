# Map 和 Object 的区别

### 允许的键的类型

- Map 的键可以是**任意值**，包括对象、函数、**正则**、**DOM 节点**和基本类型。

- Object 的键必须是 **String / Symbol**。

```js
myMap.set(/^1[3456789]\d{9}$/, "手机号");
myMap.set($0, "one element");
```

### 意外的键

- Map 只包含我们插入的键。除此之外，一般情况下不会包含有其他键。

- Object 上有原型，原型链上的键名可能与你自己设置的有冲突。

ES5 开始也可以用 `Object.create(null)` 来创建一个无原型链的对象了，但这种用法比较少见。

```js
let myObj = Object.create(null);
console.dir(myObj); // Object > No Properties
```

### 元素的顺序和长度

Map 访问元素的复杂度为 $O(0)$。
Map 的元素顺序始终保持插入顺序。
在迭代的时候，Map 会以插入的顺序来返回键值。
Map 保持对长度的跟踪。

Object 的键值并不总是有顺序的，最好不要依赖对象属性的顺序。
Object 想要获取属性长度，需要手动进行迭代，这样时间复杂度将为 $O(n)$。
Object 从 ES6 开始，String 和 Symbol 键是按顺序存的，但是通过隐式转换保存成 String 的键是乱序的。

```js
let myMap = new Map();
myMap.set("key1", "one");
myMap.set("key2", "two");
myMap.set("20", "twenty");
console.log(myMap);
// {'key1' => 'one', 'key2' => 'two', '20' => 'twenty'}

let myObj = {};
myObj["key1"] = "one";
myObj["key2"] = "two";
myObj["20"] = "twenty";
console.log(myObj);
// {20: 'twenty', key1: 'one', key2: 'two'}
```

### 增删键值对的性能对比

- Map 在频繁**增删**键值对的情况下，表现更好。

- Object 在频繁增删键值对的情况下未做优化。

需要破坏原有对象的操作，尽量采用 Map。

### 可迭代性对比

- Map 是[可迭代的](usage_of_map.md#iterating-map)。
  Map 直接可迭代，性能肯定比还需要去转一遍才能迭代的 Object 更好。

- Object 没有实现迭代协议，不能用 `for ... of` 表达式来直接迭代对象。

```js
const myObj = {
  1: "one",
  2: "two",
  3: "three",
};

for (const i of Object.entries(myObj)) {
  console.log(i);
  // Array(2) 0: "1", 1: "one"
  // Array(2) 0: "2", 1: "two"
  // Array(2) 0: "3", 1: "three"
}
```

`for ... in` 表达式允许你迭代一个 Object 的可枚举属性。

```js
const myObj = {
  1: "one",
  2: "two",
  3: "three",
};

for (i in myObj) {
  console.log(i);
  // 1
  // 2
  // 3
}
```

### 计算键值对的个数

- 通过 `Map.prototype.size` 属性即可获得。
- 需要手动计算。

### 序列化和解析

- Map 没有元素的序列化和解析的支持。

- Object 是 JavaScript 原生支持。

```js
const myObj = { 1: "one", 2: "two" };
let str = JSON.stringify(myObj);
let _myObj = JSON.parse(str);
console.log(str); // {"1":"one","2":"two"}
console.log(_myObj); // {1: 'one', 2: 'two'}
```
