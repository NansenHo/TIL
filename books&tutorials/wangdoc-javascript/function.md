# 数据类型——函数

## 函数声明等

声明函数的三种方式：

* 函数的声明：function fn(parameters) {… …}
* 函数表达式：let fn = function(parameters) {… …};
    * 将一个匿名函数赋值给一个变量
    * 函数表达式的末尾一定要加上 ; 表示结尾，而函数的声明不需要
* Function 构造函数
    * Function 构造函数接收 n 个参数，除了最后一个参数是函数体之外，其他都是生成函数的参数。
    * 只有一个参数，那该参数就是函数体。

// Function 构造函数
var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}

如果一个函数被重复声明，那后面声明的函数会覆盖掉前面的声明，
而且由于函数名的提升，前一次声明的在任何时候都是无效的。

JavaScript 引擎遇到 return 语句，会直接返回 return 后面的表达式的值（函数的返回值），即使后面还有语句，也不会得到执行。
return 语句不是必需的，如果没有的话，该函数就会返回 undefined 。

函数可以调用自身，这就是递归。

JavaScript 将函数也看作是一种值，与其他值（数值、字符串、布尔值等）地位相同，凡是可以使用值的地方都可以使用函数。（函数是 JavaScript 中的第一公民。）

函数名的提升：JavaScript 引擎将函数名视同为变量名，所以采用 function 声明函数时，整个函数会变得像声明变量一样，被提升到代码头部。

```javascript
// 以下代码不会报错
f()
function f(){}

// 但用赋值语句不可以
f()
var f = function(){}
```

下面的代码最后会打印出来什么

```javascript
var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f()
```

表面看后面声明的函数会覆盖前面声明的，但是由于存在函数提升，所以实际上正好反过来了。


## 函数的属性和方法

### name 属性

length 属性
length 属性返回函数预期传入的参数个数。不管实际调用时输入了多少个参数，length 始终等于函数定义中的参数个数。

length 属性提供了一种机制，可以判断定义和调用时，参数的差异，以便实现变成的 方法重载（overload）。

toString()
返回一个字符串，字符串的内容是函数的源码。
函数内部的注释也会返回。


### 函数作用域

作用域（scope）指的是变量存在的范围。

变量v同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量v覆盖了全局变量v。

对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。


### 参数

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

即使函数 f 定义了两个参数，但实际运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。省略的参数的值就变为undefined。

没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined。


### 传递方式

参数是原始类型的值：传值传递
	函数体内部修改参数不影响函数体外部。

参数是符合类型的值：地址传递
	函数体内部修改参数将会影响到函数体外部的原始值。

### arguments 对象

在函数体内部读取所有参数的一种机制。

`arguments` 对象包含了函数运行时的所有参数，
`arguments[0]` 就是第一个参数，`arguments[1]` 就是第二个参数，以此类推。
这个对象只有在函数体内部，才可以使用。

严格模式下，修改 `arguments` 对象不会影响到实际的函数参数。

通过 `arguments` 对象的 `length` 属性，可以判断函数调用时到底带几个参数。

将 `arguments` 对象转为数组的两种方法：

1. `var args = Array.prototype.slice.call(arguments);`
2. ```javascript
   let args = [];
   for (var i = 0; i < arguments.length; i++) {
     args.push(arguments[i]);
   }
   ```

`arguments` 对象带有一个 `callee` 属性，返回它所对应的原函数。

可以通过 `arguments.callee` ，达到调用函数自身的目的。
这个属性在严格模式里面是禁用的，因此不建议使用。

## 其他

### 闭包

JavaScript 有两种作用域：

1. 全局作用域
2. 函数作用域

函数内部可以直接读取全局变量。

但函数 A 无法直接读取到函数 B 里面的变量，除非把 A 写进 B 的内部。
这样 A 中的所有局部变量对 B 都是可见的，但 B 中的对 A 来讲不可见。

利用这一点，我们可以

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  // f2 写在 f1 内部，f2 可以访问 f1 里的局部变量
  // 这样再把 f2 返回出来，我们在外部就也能访问 f1 里的局部变量了
  return f2;
}

var result = f1();
result(); // 999
```

闭包就是函数 `f2`，即能够读取其他函数内部变量的函数。

因此可以把闭包简单理解成“定义在一个函数内部的函数”。
闭包最大的特点，就是它可以“记住”诞生的环境，比如 f2 记住了它诞生的环境 f1 ，所以从 f2 可以得到 f1 的内部变量。
在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

```javascript
function createIncrementor(start) {
  // return 的函数尽量不要写成箭头函数
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
```

为什么闭包能够返回外层函数的内部变量？

闭包（上例的inc）用到了外层变量（start），导致外层函数（createIncrementor）不能从内存释放。
只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。

闭包内存消耗大，滥用闭包会造成网页的性能问题。

#### 闭包的使用场景

1. 创建私有变量
2. 延长变量的生命周期

柯里化函数和闭包结合起来：

柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用

```javascript
// 假设我们有一个求长方形面积的函数
function getArea(width, height) {
    return width * height
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea(width) {
    return height => {
        return width * height
    }
}

const getTenWidthArea = getArea(10)

// 之后碰到宽度为10的长方形就可以这样计算面积
const area1 = getTenWidthArea(20)

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea(20)
```


### 立即调用函数 IIFE