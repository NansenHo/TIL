# 变量声明提升与函数声明提升

- 变量声明提升：**通过 `var` 声明**的变量，其在定义语句之前就可以访问到，但值为 undefined。
- 函数声明提升：**通过 `function` 声明**的函数，在其声明之前就可以直接调用，值是函数定义（对象）。

经典面试题：a 输出多少？（考察变量声明提升和作用域）

```jsx
var a = 2
function fn(){
	console.log(a)
	var a = 4
}
fn()
```

但上面代码实际上运行时的顺序是：

```jsx
var a = 2
function fn(){
	var a
	console.log(a)
	a = 4
}
```

所以 `console.log(a)` 先找到 `fn()` 里面的 `a`，然而 `a` 那会话没有赋值，所以打出来是 `undefined` 。

```jsx
fn2() // 可调用 打出 fn2()

function fn2(){
	console.log('fn2()')
}
```

```jsx
fn3() //不能调用

var fn3 = function(){
	console.log('fn3()')
}
```

之所以不能调用，是因为这里遵循的是变量声明提升，而不是函数声明提升。

所以实际上的代码执行是这样的：

```jsx
var fn3

fn3()

fn3 = function(){
	console.log('fn3()')
}
```

```jsx
function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2
```

```jsx
function f() {
  console.log(2);
}
function f() {
  console.log(1);
}

~~~~f() // 2
~~~~f() // 2
```

```jsx
function f() {
  console.log(1);
}
function f() {
  console.log(2);
}

f() // 2
f() // 2
```

`return`语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回`undefined`。

JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。

```jsx
var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f() // 1
```

```jsx
var f;

function f() {
  console.log('2');
}

f = function () {
  console.log('1');
}

f() // 1
```

`toString()`方法返回了函数的源码，包含换行符在内。

对于那些原生的函数，`toString()`方法返回`function (){[native code]}`。

```jsx
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
```