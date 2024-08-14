# Iterator

An `Iterator` object is an object that conforms to the iterator protocol by providing a `next()` method that returns an iterator result object.

The `Iterator.prototype` object is a hidden global object that all built-in iterators inherit from. It provides a `@@iterator` method that returns the iterator object itself, making the iterator also iterable.

```js
let arr = [
  [1, "button"],
  [2, "popover"],
  [3, "Icon"],
  [4, "Table"],
];
let map = new Map(arr);

// the first key-value pair
console.log(map.keys().next()); // {value: 1, done: false}
// key of the first key-value pair
console.log(map.keys().next().value); // 1

map.delete(1);
map.set(1, "Button");

console.log(map.keys().next()); // {value: 2, done: false}
console.log(map.keys().next().value); // 2
```
