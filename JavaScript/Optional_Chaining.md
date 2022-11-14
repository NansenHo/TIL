# Optional Chaining(?.) 可选链操作符

The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

e.g.
```jsx
obj?.prop

obj?.[expr]

arr?.[index]

func?.(args)
```