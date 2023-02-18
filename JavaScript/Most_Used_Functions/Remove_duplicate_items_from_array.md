# 数组去重

这个要从分两种情况

1. 简单类型的数组
2. 引用类型的数组

## 针对简单类型：使用 Set

```js
let arr = [1,2,3,4,5,6,7,8,9,10,1,2,4,5,6,7]

function uniqueArr(array){
  // 以下两种方式都可以将 Set 转成 array
  // 1. ... 拓展运算符
  // 2. Array.from()
	// return Array.from(new Set(array))
  return [...(new Set(array))]
}

console.log(uniqueArr(arr))
```

## 针对引用类型：使用 reduce