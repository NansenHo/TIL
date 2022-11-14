# Destructuring assignment（解构赋值）

解构赋值可以让我们将 属性/值 从对象/数组中取出，赋值给其他变量。

```js
let [a, b] = [1, 2]

let [a, b, ...c] = [1, 2, 3, 4, 5, 6]
```

## 数组解构赋值

### 预设默认值

防止我们从数组里取出的是一个 undefined，可以在表达式左边的数组中，为任意对象设置默认值。

```js
let a, b
[a=5, b=6] = [1] // 分别给 a 和 b 设置了默认值 5，6
console.log(b) // 6 
```

### 交换变量

使用解构赋值，我们可以轻松地交换两个变量的值。

没有解构赋值之前，我们需要一个中间变量来完成。

```js
let a = 1,
    b = 2;

[a, b] = [b, a]

console.log(a) // 2
console.log(b) // 1
```

### 忽略一些值

```js
let a,
    b,
    arr = [1, 2, 3];
[a, , b] = arr
console.log(a) // 1
console.log(b) // 3
```

### 用正则表达式提取值

`RegExp.prototype.exec()` 方法接受一个字符串作为参数，如果字符串匹配正则成功，它就返回