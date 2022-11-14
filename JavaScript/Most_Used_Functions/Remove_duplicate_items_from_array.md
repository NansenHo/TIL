# 数组去重

这个要从分两种情况

1. 简单类型的数组
2. 引用类型的数组

## 针对简单类型：使用 Set

```js
let arr = [1, 2, 3, 4, 1, 3, 4]
let uniqueSet = new Set(arr)
// 以下两种方式都可以将 Set 转成 array
// 1. ... 拓展运算符
let newArr = [...uniqueSet]
// 2. Array.from() 
let newArr = Array.from(uniqueSet)
```

## 针对引用类型：使用 reduce