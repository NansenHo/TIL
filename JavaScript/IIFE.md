# IIFE 立即调用函数

在定义函数之后，立即调用该函数。

> **语句** 和 **表达式** 的区别？
> 1. 一个表达式产生一个值。一个表达式执行后一定会生成一个值。
> 2. 一条语句执行一个动作。语句不一定会产生值。语句主要是用来执行动作，程序就是由一系列语句组成。

`function` 关键字既可以作语句，又可以作表达式：

```javascript
// 语句
function f() {}

// 表达式
var f = function f() {}
```

所以我们不能直接这样写：

```javascript
// function 关键字在这里是做语句，声明了一个函数。
// 我们不能在函数的声明语句后面直接调用。

function(){ /* code */ }();
```

但 `function` 关键字作表达式的时候可以：

```javascript
var f = function f(){ return 1}();
```

不会报错的原因是是 `function` 作为表达式，引擎就把函数定义当作一个值。

为了避免解析的歧义，JavaScript 规定，如果 `function` 关键字出现在行首，一律解释成语句。因此，引擎看到行首是 `function` 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

函数定义后立即调用的解决方法，就是不要让 `function` 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```javascript
(function(){ /* code */ }());

// 或者

(function(){ /* code */ })();

// 注意，结尾都必须加 ;
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表达式，而不是函数定义语句，所以就避免了错误。这就叫做 **“立即调用的函数表达式”（Immediately-Invoked Function Expression）**，简称 IIFE。

注意，上面两种写法最后的分号都是必须的。
如果省略分号，遇到连着两个 IIFE，可能就会报错。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面这些写法。

```javascript
var i = function(){ return 10; }();

true && function(){ /* code */ }();

0, function(){ /* code */ }();

!function () { /* code */ }();

~function () { /* code */ }();

-function () { /* code */ }();

+function () { /* code */ }();
```

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。目的有两个：

1. 不必为函数命名，避免了污染全局变量；
2. IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```javascript
var tmp = newData;
processData(tmp);
storeData(tmp);

// 上面代码写成这样更好，因为完全避免了污染全局作用域
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
```