# Spread Syntax(...) 拓展运算符

```javascript
let arr = [1, 2]
let arr1 = [3, 4]
let arr2 = [5, 6]

arr.push(...arr1)
arr // (4) [1, 2, 3, 4]
arr.push(arr2)
arr // (5) [1, 2, 3, 4, Array(2)]
```