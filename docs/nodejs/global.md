# Global

## What's `global`

The `global` variable is the global object in Node.js

`globalThis` is usually akin to the `global` object.

```js
console.log(globalThis === global) // true
```

```js
console.log(this) // {}
console.log(this === global) // false
```

## the difference of `global` in browser and `global` in Nodejs

In browsers, the top-level scope is the global scope. This means that within the browser `var something` will define a new global variable.

In Node.js this is different. The top-level scope is not the global scope; `var something` inside a Node.js module will be local to that module.
