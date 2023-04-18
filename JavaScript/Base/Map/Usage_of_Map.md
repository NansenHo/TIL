# Usage of Map {ignore=true}

[toc]

### `Map.prototype.get(key)`

The `get()` method returns a specified element from a Map object.

The element associated with the specified key, or `undefined` if the key can't be found in the Map object.

If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

```js
let keyNaN = NaN;
let map = new Map();

map.set(keyNaN, "I'm Not A Number");

// Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works
// because NaNs are indistinguishable from each other.
map.get(keyNaN);
map.get(Number("foo"));
map.get(NaN);
```

### `Map.prototype.delete(key)`

The `delete()` method **removes** the specified element from a Map object by key.

### `Map.prototype.set(key, value)`

The `set()` method **adds** or **updates** an entry in a Map object with a specified key and a value.

```js
let mapDemo = new Map();
mapDemo.set("zh", "86");
```

Since the set() method returns back the same Map object, you can chain the method call like below:

```js
// Add new elements to the map with chaining.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

### Iterating Map

#### Iterating Map with `for...of`

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

#### Iterating Map with `forEach`

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### `Map.prototype.has(key)`

The `has()` method returns a boolean indicating whether an element with the specified key exists or not.

return `true` if an element with the specified key exists in the Map object; otherwise `false`.

### `Map.prototype.size`

Returns the number of key/value pairs in the Map object.

### `Map.prototype.clear()`

The `clear()` method removes all elements from a Map object.

### `Map.prototype.keys()`

The `keys()` method returns a new [map iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys for each element in the Map object in insertion order.

An Iterator object is an object that conforms to the iterator protocol by providing a `next()` method that returns an iterator result object.

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

### `Map.prototype.values()`

The `values()` method returns a new map iterator object that contains the values for each element in the Map object in insertion order.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

### `Map.prototype.entries()`

Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

### Cloning and Merging Maps

Just like Arrays, Maps can be cloned:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

Maps can be merged, maintaining key uniqueness:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Maps can be merged with Arrays too:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```
