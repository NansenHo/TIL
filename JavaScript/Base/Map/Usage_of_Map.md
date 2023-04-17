# Usage of Map {ignore=true}

[toc]

### `Map.prototype.get(key)`

The `get()` method returns a specified element from a Map object.

The element associated with the specified key, or `undefined` if the key can't be found in the Map object.

If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

### `Map.prototype.delete(key)`

The `delete()` method **removes** the specified element from a Map object by key.

### `Map.prototype.set(key, value)`

The `set()` method **adds** or **updates** an entry in a Map object with a specified key and a value.

```js
let mapDemo = new Map();
mapDemo.set('zh', '86');
```

Since the set() method returns back the same Map object, you can chain the method call like below:

```js
// Add new elements to the map with chaining.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
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
let arr = [[1, "button"], [2, "popover"], [3, "Icon"], [4, "Table"],];
let map = new Map(arr);

// the first key-value pair
console.log(map.keys().next()) // {value: 1, done: false}
// key of the first key-value pair
console.log(map.keys().next().value) // 1

map.delete(1)
map.set(1, "Button")

console.log(map.keys().next()) // {value: 2, done: false}
console.log(map.keys().next().value) // 2
```