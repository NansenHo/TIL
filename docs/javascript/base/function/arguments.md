# Function Arguments

`arguments` is an **array-like object**, not an array.

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

If we want to convert it to a real array, we can: 

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```
