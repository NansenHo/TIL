# Object API

### Object.entries(obj)

- 参数：obj
- 返回值：object 的 可枚举属性的键值对 组成的数组

返回的数组的排序，和 `for...in` 遍历该对象时返回的顺序一致。

> `for...in` 还会遍历原型链中的属性。

```js
const object1 = {
  a: 'somestring',
  b: 42
};

let array = Object.entries(object1)
console.log(array) // [[a, 'somestring'], [b, 42]]

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
  // a: somestring
  // b: 42
}
```

`new Map()` 接受一个可迭代的 entries ，所以借助 `Object.entries()` 就可以轻松地将 Object 转换成 Map。

### Object.fromEntries(iterable)

该方法把键值对列表转换成对象。

- 参数：类似 `Array` `Map` 或者其他实现了 **可迭代协议** 的可迭代对象。
- 返回值：由参数提供对应属性的新对象。

`Object.entries()` 和 `Object.fromEntries()` 是互逆的操作。

#### 常用用法

- 可以将 `Map` 转换成 `Object`
- 可以将 `Array` 转换成 `Object`
  ```js
  const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
  const obj = Object.fromEntries(arr);
  console.log(obj); // { 0: "a", 1: "b", 2: "c" }
  ```
- 对象转换
  ```js
  const object1 = { a: 1, b: 2, c: 3 };
  const object2 = Object.fromEntries(
    Object.entries(object1)
    .map(([ key, val ]) => [ key, val * 2 ])
  );

  console.log(object2);
  // { a: 2, b: 4, c: 6 }
  ```
