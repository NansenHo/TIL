# eval 函数

`eval` 命令接受一个字符串作为参数，并将这个字符串当作语句执行。

放在 `eval` 中的字符串，应该有独自存在的意义，不能用来与 `eval` 以外的命令配合使用。

```javascript
eval('return;');
// Uncaught SyntaxError: Illegal return statement
// return 不能单独使用，必须在函数中使用。
```

`eval` **没有自己的作用域**，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

由于这个原因，`eval` 有安全风险。为了防止这种风险，JavaScript 规定，如果使用严格模式，`eval` 内部声明的变量，不会影响到外部作用域，但还是能读取改写当前作用域的变量。

由于安全风险和**不利于 JavaScript 引擎优化执行速度**，一般不推荐使用。

解析 JSON 数据的字符串，应该使用原生的 `JSON.parse()` 方法，而不是使用 `eval` 。