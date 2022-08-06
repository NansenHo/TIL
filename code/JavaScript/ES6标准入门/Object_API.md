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

