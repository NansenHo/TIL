# 第二章：this, call 和 apply

## 2.1 this

JavaScript 的 `this` 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

`this` 的指向大致可以分为以下 4 种。

- 作为对象的方法调用。
- 作为普通函数调用。
- 构造器调用。
- `Function.prototype.call` 或 `Function.prototype.apply` 调用。

1. **作为对象的方法调用**

   当函数作为对象的方法被调用时，`this` 指向该对象：

   ```js
   var obj = {
     a: 1,
     getA: function () {
       alert(this === obj); // 输出：true
       alert(this.a); // 输出: 1
     },
   };
   obj.getA();
   ```

2. **作为普通函数调用**

   当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的 this 总是指向全局对象。

   有时候我们会遇到一些困扰，比如在 `div` 节点的事件函数内部，有一个局部的 `callback` 方法，`callback` 被作为普通函数调用时， `callback` 内部的 `this` 指向了 `window`，但我们往往是想让它指向该 `div` 节点。

   此时有一种简单的解决方案，可以用一个变量保存 `div` 节点的引用。

   在 ECMAScript 5 的 strict 模式下，这种情况下的 `this` 已经被规定为不会指向全局对象，而是 `undefined`。

3. **构造器调用**

   JavaScript 中没有类，但是可以从构造器中创建对象，同时也提供了 `new` 运算符，使得构造器看起来更像一个类。

   构造器的外表跟普通函数一模一样，它们的区别在于被调用的方式。
   当用 `new` 运算符调用函数时，该函数总会返回一个对象，通常情况下，构造器里的 `this` 就指向返回的这个对象，

   用 `new` 调用构造器时，还要注意一个问题，如果构造器显式地返回了一个 `object` 类型的对象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 `this`:

   ```js
   var MyClass = function () {
     this.name = "sven";
     return {
       // 显式地返回一个对象
       name: "anne",
     };
     var obj = new MyClass();
     alert(obj.name); // 输出：anne
   };
   ```

   如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题：

   ```js
   var MyClass = function () {
     this.name = "sven";
     return "anne"; // 返回 string 类型
   };
   var obj = new MyClass();
   alert(obj.name); // 输出：sven
   ```

4. **`Function.prototype.call` 或 `Function.prototype.apply` 调用**

   跟普通的函数调用相比，用 `Function.prototype.call` 或 `Function.prototype.apply` 可以动态地改变传入函数的 `this`。

   `call` 和 `apply` 方法能很好地体现 JavaScript 的函数式语言特性，在 JavaScript 中，几乎每一次编写函数式语言风格的代码，都离不开 `call` 和 `apply`。

   ```js
   var obj = {
     myName: "sven",
     getName: function () {
       return this.myName;
     },
   };
   console.log(obj.getName()); // 输出：'sven'
   var getName2 = obj.getName;
   console.log(getName2()); // 输出：undefined
   ```

   当调用 `obj.getName` 时，`getName` 方法是作为 `obj` 对象的属性被调用的，根据 2.1.1 节提到的规律，此时的 `this` 指向 `obj` 对象，所以 `obj.getName()` 输出 `'sven'`。

   当用另外一个变量 `getName2` 来引用 `obj.getName`，并且调用 `getName2` 时，根据 2.1.2 节提到的规律，此时是普通函数调用方式，`this` 是指向全局 `window` 的，所以程序的执行结果是 `undefined`。

   `document.getElementById` 这个方法名实在有点过长，我们大概尝试过用一个短的函数来代替它，如同 `prototype.js` 等一些框架所做过的事情：

   ```js
   var getId = function (id) {
     return document.getElementById(id);
   };
   console.log(getId("div1"));
   ```

   为什么不能用下面这种更简单的方式：

   ```js
   var getId = document.getElementById;
   getId("div1");
   ```

   现在不妨花 1 分钟时间，让这段代码在浏览器中运行一次：

   ```html
   <html>
     <body>
       <div id="div1">我是一个 div</div>
     </body>
     <script>
       var getId = document.getElementById;
       getId("div1");
     </script>
   </html>
   ```

   在 Chrome、Firefox、IE10 中执行过后就会发现，这段代码抛出了一个异常。

   这是因为许多引擎的 `document.getElementById` 方法的内部实现中需要用到 `this`。

   这个 `this` 本来被期望指向 `document`，当 `getElementById` 方法作为 `document` 对象的属性被调用时，方法内部的 `this` 确实是指向 `document` 的。

   但当用 `getId` 来引用 `document.getElementById` 之后，再调用 `getId`，此时就成了普通函数调用，函数内部的 `this` 指向了 `window`，而不是原来的 `document`。

   我们可以尝试利用 `apply` 把 `document` 当作 `this` 传入 `getId` 函数，帮助“修正” `this`：

   ```js
   document.getElementById = (function (func) {
     return function () {
       return func.apply(document, arguments);
     };
   })(document.getElementById);

   var getId = document.getElementById;
   var div = getId("app");

   alert(div.id); // 输出：app
   ```

## 2.2 `call` 和 `apply`

ECAMScript 3 给 `Function` 的原型定义了两个方法，它们是 `Function.prototype.call` 和 `Function. prototype.apply`。

实际开发中，特别是在一些函数式风格的代码编写中，`call` 和 `apply` 方法尤为有用。

在 JavaScript 版本的设计模式中，这两个方法的应用也非常广泛。

`apply` 接受两个参数，第一个参数指定了函数体内 `this` 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，`apply` 方法把这个集合中的元素作为参数传递给被调用的函数。

`call` 传入的参数数量不固定，跟 `apply` 相同的是，第一个参数也是代表函数体内的 `this` 指向，从第二个参数开始往后，每个参数被依次传入函数。

当调用一个函数时，JavaScript 的解释器并不会计较形参和实参在数量、类型以及顺序上的区别。

JavaScript 的参数在内部就是用一个数组来表示的。
从这个意义上说，`apply` 比 `call` 的使用率更高，我们不必关心具体有多少参数被传入函数，只要用 `apply` 一股脑地推过去就可以了。

`call` 是包装在 `apply` 上面的一颗语法糖，如果我们明确地知道函数接受多少个参数，而且想一目了然地表达形参和实参的对应关系，那么也可以用 `call` 来传送参数。

当使用 `call` 或者 `apply` 的时候，如果我们传入的第一个参数为 `null`，函数体内的 `this` 会指向默认的宿主对象，在浏览器中则是 `window`。

```js
var func = function (a, b, c) {
  alert(this === window); // 输出 true
};
func.apply(null, [1, 2, 3]);
```

但如果是在严格模式下，函数体内的 `this` 还是为 `null`：

```js
var funcStrict = function (a, b, c) {
  "use strict";
  alert(this === null); // 输出 true
};
funcStrict.apply(null, [1, 2, 3]);
```

`call` 和 `apply` 主要有三种用法：

1. **改变 `this` 指向**

2. **`Function.property.bind`**

   大部分高级浏览器都实现了内置的 `Function.prototype.bind`，用来指定函数内部的 `this` 指向，即使没有原生的 `Function.prototype.bind` 实现，我们来模拟一个也不是难事。

   ```js
   Function.prototype.bind = function (context) {
     var self = this; // 保存原函数
     return function () {
       // 返回一个新的函数
       return self.apply(context, arguments); // 执行新的函数的时候，会把之前传入的 context
       // 当作新函数体内的 this
     };
   };

   var obj = {
     name: "sven",
   };

   var func = function () {
     alert(this.name); // 输出：sven
   }.bind(obj);

   func();
   ```

   `Function.prototype.bind` 实现，通常我们还会把它实现得稍微复杂一点，使得可以往 `func` 函数中预先填入一些参数：

   ```js
   Function.prototype.bind = function () {
     var self = this, // 保存原函数
       context = [].shift.call(arguments), // 需要绑定的 this 上下文
       args = [].slice.call(arguments); // 剩余的参数转成数组
     return function () {
       // 返回一个新的函数
       return self.apply(
         context,
         [].concat.call(args, [].slice.call(arguments))
       );
       // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
       // 并且组合两次分别传入的参数，作为新函数的参数
     };
   };

   var obj = {
     name: "sven",
   };

   var func = function (a, b, c, d) {
     alert(this.name); // 输出：sven
     alert([a, b, c, d]); // 输出：[1, 2, 3, 4]
   }.bind(obj, 1, 2);

   func(3, 4);
   ```

3. **借用其他对象的方法**

借用方法的第一种场景是“借用构造函数”，通过这种技术，可以实现一些类似继承的效果：

```js
// 构建了两个函数构造器
var A = function (name) {
  this.name = name;
};
// 这个函数构造器 A 接受一个参数 name，并将它赋值给新对象的 name 属性。
var B = function () {
  A.apply(this, arguments);
};
// 这个函数构造器 B 没有参数，但在它的内部，它调用了函数构造器 A，
// 并用 apply 方法将 B 函数内部的 this 上下文设置为当前对象，
// 并将传入 B 函数的所有参数传递给 A 函数。
// 这样，B 函数实际上继承了 A 函数的属性和方法。

B.prototype.getName = function () {
  return this.name;
};
// 这段代码将一个 getName 方法添加到 B 函数的原型链上。
// 这意味着通过 B 构造的所有对象都能够访问和使用这个 getName 方法。

var b = new B("sven");
// 创建了一个新的 B 对象，传入的参数是 'sven'。
// 因为 B 内部调用了 A 函数，并将参数传递给了 A 函数，所以 this.name 被设置为 'sven'。

console.log(b.getName()); // 输出：'sven'
// 调用 b.getName() 将返回 'sven'，因为对象 b 的 name 属性被成功设置为 'sven'。
```

函数的参数列表 `arguments` 是一个类数组对象，虽然它也有 “下标”，但它并非真正的数组，所以也不能像数组一样，进行排序操作或者往集合里添加一个新的元素。

这种情况下，我们常常会借用 `Array.prototype` 对象上的方法。

比如想往 `arguments` 中添加一个新的元素，通常会借用 `Array.prototype.push`：

```js
(function () {
  Array.prototype.push.call(arguments, 3);
  console.log(arguments); // 输出[1, 2, 3]
})(1, 2);
```

在操作 `arguments` 的时候，我们经常非常频繁地找 `Array.prototype` 对象借用方法。

想把 `arguments` 转成真正的数组的时候，可以借用 `Array.prototype.slice` 方法；

想截去 `arguments` 列表中的头一个元素时，又可以借用 `Array.prototype.shift` 方法。

我们不妨翻开 V8 的引擎源码，以 `Array.prototype.push` 为例，看看 V8 引擎中的具体实现：

```js
function ArrayPush() {
    var n = TO_UINT32(this.length); // 被 push 的对象的 length
    var m = %_ArgumentsLength(); // push 的参数个数
    for (var i = 0; i < m; i++) {
        this[i + n] = %_Arguments(i); // 复制元素 (1)
    }
    this.length = n + m; // 修正 length 属性的值 (2)
    return this.length;
};
```

通过这段代码可以看到，`Array.prototype.push` 实际上是一个**属性复制**的过程，**把参数按照下标依次添加到被 `push` 的对象上**面，顺便**修改了这个对象的 `length` 属性**。

至于被修改的对象是谁，到底是数组还是类数组对象，这一点并不重要。

由此可以推断，我们可以把 “任意” 对象传入 `Array.prototype.push`：

```js
var a = {};
Array.prototype.push.call(a, "first");
alert(a.length); // 输出：1
alert(a[0]); // first
```

```js
var a = {};
a.push("first"); // Uncaught TypeError: a.push is not a function
```

这段代码在绝大部分浏览器里都能顺利执行，但由于引擎的内部实现存在差异，如果在低版本的 IE 浏览器中执行，必须显式地给对象 `a` 设置 `length` 属性：

```js
var a = {
  length: 0,
};
```

可以借用 `Array.prototype.push` 方法的对象至少要满足以下两个条件：

1. 对象本身要可以存取属性；

2. 对象的 `length` 属性可读写。

如果借用 `Array.prototype.push` 方法的不是一个 `object` 类型的数据，而是一个 `number` 类型的数据呢？

我们无法在 `number` 身上存取其他数据，那么从下面的测试代码可以发现，一个 `number` 类型的数据不可能借用到 `Array.prototype.push` 方法：

```js
var a = 1;
Array.prototype.push.call(a, "first");
alert(a.length); // 输出：undefined
alert(a[0]); // 输出：undefined
```
