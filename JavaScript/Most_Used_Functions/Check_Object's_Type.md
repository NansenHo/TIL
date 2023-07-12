# Checking object's Type

```js
// We also could use `apply()` here.
const isObject = t => Object.prototype.toString.call(t).slice(8,-1) === 'Object'

let obj = {}
isObject(obj) // true
let arr = []
isObject(arr) // false
```

```js
const isObject = t => {
	return (
		typeof t === 'object' &&
		!Array.isArray(t) &&
		t !== null
	)
}

let obj = {}
isObject(obj) // true
```
