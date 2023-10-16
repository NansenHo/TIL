# 《JavaScript 设计模式与开发实践》

曾探

## 前言

有些程序员把设计模式视为圣经，唯模式至上；
有些人却认为设计模式只在 C++ 或者 Java 中有用武之地，JavaScript 这种动态语言根本就没有设计模式一说。

设计模式的定义是：**在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案**。

通俗一点说，设计模式是在某种场合下对某个问题的一种解决方案。

人类可以走到生物链顶端的前两个原因分别是会 “使用名字” 和 “使用工具”。

这个问题发生的场景似曾相识，以前我遇到并解决过这个问题，但是我不知道怎么跟别人去描述它。
我们非常希望给这个问题出现的场景和解决方案取一个统一的名字，当别人听到这个名字的时候，便知道我想表达什么。

> `each` 函数其实就是迭代器模式。

小说家很少从头开始设计剧情，足球教练也很少从头开始发明战术，他们总是沿袭一些已经存在的模式。
同样，在软件设计中，模式是一些经过了大量实际项目验证的优秀解决方案。
熟悉这些模式的程序员，对某些模式的理解也许形成了条件反射。
当合适的场景出现时，他们可以很快地找到某种模式作为解决方案。

当他们看到系统中存在一些大量的相似对象，这些对象给系统的内存带来了较大的负担。
如果他们熟悉享元模式，那么第一时间就可以想到用享元模式来优化这个系统。

> 享元模式。（享元：共享的单元）
> 享元模式通过复用对象，以达到节省内存的目的。
> 主要用于解决在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来。
> 如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。
> 当他们看到系统中存在一些大量的相似对象，这些对象给系统的内存带来了较大的负担。
> 如果他们熟悉享元模式，那么第一时间就可以想到用享元模式来优化这个系统。

系统中某个接口的结构已经不能符合目前的需求，但他们又不想去改动这个被灰尘遮住的老接口，一个熟悉模式的程序员将很快地找到适配器模式来解决这个问题。

《设计模式》这本书完全是从面向对象设计的角度出发的，通过对封装、继承、多态、组合等技术的反复使用，提炼出一些可重复使用的面向对象设计技巧。

《设计模式》最初讲的确实是静态类型语言中的设计模式，原书大部分代码由 C++ 写成。

所有设计模式的实现都遵循一条原则，即 **“找出程序中变化的地方，并将变化封装起来”**。

一个程序的设计总是可以分为可变的部分和不变的部分。
当我们找出可变的部分，并且把这些部分封装起来，那么剩下的就是不变和稳定的部分。
这些不变和稳定的部分是非常容易复用的。
这也是设计模式为什么描写的是可复用面向对象软件基础的原因。

设计模式被人误解的一个重要原因是人们对它的误用和滥用，比如将一些模式用在了错误的场景中，或者说在不该使用模式的地方刻意使用模式。
特别是初学者在刚学会使用一个模式时，恨不得把所有的代码都用这个模式来实现。

当我们有了一把锤子，看什么都是钉子。

哪些才算正确的地方，只有在我们深刻理解了模式的意图之后，再结合项目的实际场景才会知道。

**分辨模式的关键是意图而不是结构。**

有很多模式的类图和结构确实很相似，但这不太重要，辨别模式的关键是这个模式出现的场景，以及为我们解决了什么问题。

JavaScript 实际上是不需要工厂方法模式的。

模式的社区一直在发展。
GoF 在 1995 年提出了 23 种设计模式。
但模式不仅仅局限于这 23 种。
在近 20 年的时间里，也许有更多的模式已经被人发现并总结了出来。
比如一些 JavaScript 图书中会提到模块模式、沙箱模式等。

## 第一部分 基础知识

### 第一章：面向对象的 JavaScript

JavaScript 没有提供传统面向对象语言中的类式继承，而是通过原型委托的方式来实现对象与对象之间的继承。

#### 1.1 动态类型语言和鸭子类型

静态类型语言的优点首先是在编译时就能发现类型不匹配的错误，编辑器可以帮助我们提前避免程序在运行期间有可能发生的一些错误。
其次，如果在程序中明确地规定了数据类型，编译器还可以针对这些信息对程序进行一些优化工作，提高程序执行速度。

**静态类型语言的缺点**：

1. 首先是迫使程序员依照强契约来编写程序，为每个变量规定数据类型，归根结底只是辅助我们编写可靠性高程序的一种手段，而不是编写程序的目的，毕竟大部分人编写程序的目的是为了完成需求交付生产。

2. 其次，类型的声明也会增加更多的代码，在程序编写过程中，这些细节会让程序员的精力从思考业务逻辑上分散开来。

**动态类型语言的优点**：

1. 编写的代码数量更少，看起来也更加简洁，程序员可以把精力更多地放在业务逻辑上面。虽然不区分类型在某些情况下会让程序变得难以理解，但整体而言，代码量越少，越专注于逻辑表达，对阅读程序是越有帮助的。

**动态类型语言的缺点**：

1. 无法保证变量的类型，从而在程序的运行期有可能发生跟类型相关的错误。

鸭子类型的通俗说法是：“如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。”

鸭子类型指导我们只关注对象的行为，而不关注对象本身，也就是关注 HAS-A，而不是 IS-A。

在动态类型语言的面向对象设计中，鸭子类型的概念至关重要。

利用鸭子类型的思想，我们不必借助超类型的帮助，就能轻松地在动态类型语言中实现一个原则：**“面向接口编程，而不是面向实现编程”**。

例如，一个对象若有 `push` 和 `pop` 方法，并且这些方法提供了正确的实现，它就可以被当作栈来使用。

一个对象如果有 `length` 属性，也可以依照下标来存取属性（最好还要拥有 `slice` 和 `splice` 等方法），这个对象就可以被当作数组来使用。

**“面向接口编程”是设计模式中最重要的思想。**

在 JavaScript 语言中，“面向接口编程”的过程跟主流的静态类型语言不一样。
因此，在 JavaScript 中实现设计模式的过程与在一些我们熟悉的语言中实现的过程会大相径庭。

#### 1.2 多态

“多态”一词源于希腊文 polymorphism，拆开来看是 poly（复数）+ morph（形态）+ ism，从字面上我们可以理解为复数形态。

多态的实际含义是：**同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果**。

多态背后的思想是将 “做什么” 和 “谁去做以及怎样去做” 分离开来。

动物都会叫，这是不变的，但是不同类型的动物具体怎么叫是可变的。

JavaScript 是一门不必进行类型检查的动态类型语言，为了真正了解多态的目的，我们需要转一个弯，从一门静态类型语言说起。

某些时候，在享受静态语言类型检查带来的安全性的同时，我们亦会感觉被束缚住了手脚。

为了解决这一问题，静态类型的面向对象语言通常被设计为可以向上转型：当给一个类变量赋值时，这个变量的类型既可以使用这个类本身，也可以使用这个类的超类。

多态性的表现正是实现众多设计模式的目标。

使用继承来得到多态效果，是让对象表现出多态性的最常用手段。

继承通常包括实现继承和接口继承。

多态的思想实际上是把 “做什么” 和 “谁去做” 分离开来，要实现这一点，归根结底先要消除类型之间的耦合关系。

一个 JavaScript 对象，既可以表示 Duck 类型的对象，又可以表示 Chicken 类型的对象，这意味着 **JavaScript 对象的多态性是与生俱来的**。

某一种动物能否发出叫声，只取决于它有没有 makeSound 方法，而不取决于它是否是某种类型的对象，这里不存在任何程度上的“类型耦合”。

在 JavaScript 中，并不需要诸如向上转型之类的技术来取得多态的效果。

多态的最根本好处在于，你不必再向对象询问 “你是什么类型” 而后根据得到的答案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制都会为你安排妥当。

**多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句**。

每个对象应该做什么，已经成为了该对象的一个方法，被安装在对象的内部，每个对象负责它们自己的行为。
所以这些对象可以根据同一个消息，有条不紊地分别进行各自的工作。

将行为分布在各个对象中，并让这些对象各自负责自己的行为，这正是面向对象设计的优点。

在 JavaScript 这种将函数作为一等对象的语言中，函数本身也是对象，函数用来封装行为并且能够被四处传递。

当我们对一些函数发出“调用”的消息时，这些函数会返回不同的执行结果，这是“多态性”的一种体现，也是很多设计模式在 JavaScript 中可以用高阶函数来代替实现的原因。

#### 1.3 封装

封装的目的是将信息隐藏。

这一节将讨论更广义的封装，不仅包括封装数据和封装实现，还包括封装类型和封装变化。

在许多语言的对象系统中，封装数据是由语法解析来实现的，这些语言也许提供了 `private`、`public`、`protected` 等关键字来提供不同的访问权限。

除了 ECMAScript 6 中提供的 `let` 之外，一般我们通过函数来创建作用域。

在 ECMAScript 6 中，还可以通过 `Symbol` 创建私有属性。

有时候我们喜欢把封装等同于封装数据，但这是一种比较狭义的定义。

封装的目的是将信息隐藏，封装应该被视为“任何形式的封装”，也就是说，封装不仅仅是隐藏数据，还包括隐藏实现细节、设计细节以及隐藏对象的类型等。

封装使得对象之间的耦合变松散，对象之间只通过暴露的 API 接口来通信。
当我们修改一个对象时，可以随意地修改它的内部实现，只要对外的接口没有变化，就不会影响到程序的其他功能。

迭代器的作用是在不暴露一个聚合对象的内部表示的前提下，提供一种方式来顺序访问这个聚合对象。

一般而言，封装类型是通过抽象类和接口来进行的。

把对象的真正类型隐藏在抽象类或者接口之后，相比对象的类型，客户更关心对象的行为。

在许多静态语言的设计模式中，想方设法地去隐藏对象的类型，也是促使这些模式诞生的原因之一。
比如工厂方法模式、组合模式等。

对于 JavaScript 的设计模式实现来说，不区分类型是一种失色，也可以说是一种解脱。

从设计模式的角度出发，封装在更重要的层面体现为封装变化。

> **“找到变化并封装之”**。

这 23 种设计模式分别被划分为 **创建型模式**、**结构型模式** 和 **行为型模式**。

1. 创建型模式的目的就是 **封装创建对象的变化**。
2. 结构型模式封装的是 **对象之间的组合关系**。
3. 行为型模式封装的是 **对象的行为变化**。

#### 1.4 原型模式和基于原型继承的 JavaScript 对象系统

在 Brendan Eich 为 JavaScript 设计面向对象系统时，借鉴了 Self 和 Smalltalk 这两门基于原型的语言。

在以类为中心的面向对象编程语言中，类和对象的关系可以想象成铸模和铸件的关系，对象总是从类中创建而来。

在原型编程的思想中，类并不是必需的，对象未必需要从类中创建而来，一个对象是通过克隆另外一个对象所得到的。

原型模式不单是一种设计模式，也被称为一种编程泛型。

从设计模式的角度讲，原型模式是用于创建对象的一种模式。

如果我们想要创建一个对象，一种方法是先指定它的类型，然后通过类来创建这个对象。

原型模式选择了另外一种方式，我们不再关心对象的具体类型，而是找到一个对象，然后通过克隆来创建一个一模一样的对象。

如果需要一个跟某个对象一模一样的对象，就可以使用原型模式。

原型模式的实现关键，是语言本身是否提供了 `clone` 方法。

ECMAScript 5 提供了 `Object.create` 方法，可以用来克隆对象。

原型模式的真正目的并非在于需要得到一个一模一样的对象，而是提供了一种便捷的方式去创建某个类型的对象，克隆只是创建这个对象的过程和手段。

在用 Java 等静态类型语言编写程序的时候，类型之间的解耦非常重要。

用 `new XXX` 创建对象的方式显得很僵硬。工厂方法模式和抽象工厂模式可以帮助我们解决这个问题，但这两个模式会带来许多跟产品类平行的工厂类层次，也会增加很多额外的代码。

原型模式提供了另外一种创建对象的方式，通过克隆对象，我们就不用再关心对象的具体类型名字。这就像一个仙女要送给三岁小女孩生日礼物，虽然小女孩可能还不知道飞机或者船怎么说，但她可以指着商店橱柜里的飞机模型说“我要这个”。

在 JavaScript 这种类型模糊的语言中，创建对象非常容易，也不存在类型耦合的问题。

在 JavaScript 语言中不存在类的概念，对象也并非从类中创建出来的，所有的 JavaScript 对象都是从某个对象上克隆而来的。

作为一门基于原型的语言，Io 中同样没有类的概念，每一个对象都是基于另外一个对象的克隆。
就像吸血鬼的故事里必然有一个吸血鬼祖先一样。

跟使用“类”的语言不一样的地方是，Io 语言中最初只有一个根对象 `Object`，其他所有的对象都克隆自另外一个对象。

如果 A 对象是从 B 对象克隆而来的，那么 B 对象就是 A 对象的原型。

这个原型链是很有用处的，当我们尝试调用 Dog 对象的某个方法时，而它本身却没有这个方法，那么 Dog 对象会把这个请求委托给它的原型 Animal 对象，如果 Animal 对象也没有这个属性，那么请求会顺着原型链继续被委托给 Animal 对象的原型 Object 对象，这样一来便能得到继承的效果，看起来就像 Animal 是 Dog 的“父类”, Object 是 Animal 的“父类”。

这个机制并不复杂，却非常强大，Io 和 JavaScript 一样，基于原型链的委托机制就是原型继承的本质。

原型编程中的一个重要特性，即当对象无法响应某个请求时，会把该请求委托给它自己的原型。

我们可以发现原型编程范型至少包括以下基本规则：

- 所有的数据都是对象。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
- 对象会记住它的原型。
- 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

在原型继承方面，JavaScript 的实现原理和 Io 语言非常相似，JavaScript 也同样遵守这些原型编程的基本规则：

- 所有的数据都是对象。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
- 对象会记住它的原型。
- 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

下面我们来分别讨论 JavaScript 是如何在这些规则的基础上来构建它的对象系统的。

1. **所有的数据都是对象**

   JavaScript 在设计的时候，模仿 Java 引入了两套类型机制：基本类型和对象类型。
   基本类型包括 undefined、number、boolean、string、function、object。

   > 从现在看来，这并不是一个好的想法。

   按照 JavaScript 设计者的本意，除了 `undefined` 之外，一切都应是对象。

   为了实现这一目标，`number`、`boolean`、`string` 这几种基本类型数据也可以通过“包装类”的方式变成对象类型数据来处理。

   能说在 JavaScript 中所有的数据都是对象，但可以说**绝大部分数据都是对象。**

   在 JavaScript 中也一定会有一个根对象存在，这些对象追根溯源都来源于这个根对象。

   JavaScript 中的根对象是 `Object.prototype` 对象。
   `Object.prototype` 对象是一个空的对象。

   我们在 JavaScript 遇到的每个对象，实际上都是从 `Object.prototype` 对象克隆而来的，`Object.prototype` 对象就是它们的原型。

   ```js
   var obj1 = new Object();
   ​​var obj2 = {};​​
   ```

   可以利用 ECMAScript 5 提供的 `Object.getPrototypeOf` 来查看这两个对象的原型。

   ```js
   console.log( Object.getPrototypeOf( obj1 ) === Object.prototype ); //输出：true
   ​​​​​​​​console.log( Object.getPrototypeOf( obj2 ) === Object.prototype ); //输出：true​​
   ```

2. **要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它**

   在 JavaScript 语言里，我们并不需要关心克隆的细节，因为这是引擎内部负责实现的。
   我们所需要做的只是显式地调用 `var obj1 = new Object()` 或者 `var obj2 = {}`。
   此时，引擎内部会从 `Object.prototype` 上面克隆一个对象出来，我们最终得到的就是这个对象

   ```js
   function Person(name) {
     this.name = name;
   }
   Person.prototype.getName = function () {
     return this.name;
   };
   var a = new Person("sven");
   console.log(a.name); // 输出：sven
   console.log(a.getName()); // 输出：sven
   console.log(Object.getPrototypeOf(a) === Person.prototype); // 输出：true
   ```

   在这里 `Person` 并不是类，而是**函数构造器**。

   > JavaScript 的函数既可以作为普通函数被调用，也可以作为构造器被调用。

   当使用 `new` 运算符来调用函数时，此时的函数就是一个构造器。

   用 `new` 运算符来创建对象的过程，实际上也只是先克隆 `Object.prototype` 对象，再进行一些其他额外操作的过程。

   在 Chrome 和 Firefox 等向外暴露了对象 `__proto__` 属性的浏览器下，我们可以通过下面这段代码来理解 `new` 运算的过程。

   ```js
   function Person(name) {
     this.name = name;
   }
   Person.prototype.getName = function () {
     return this.name;
   };
   var objectFactory = function () {
     var obj = new Object(), // 从 Object.prototype 上克隆一个空的对象
       Constructor = [].shift.call(arguments); // 取得外部传入的构造器，此例是 Person
     obj.__proto__ = Constructor.prototype; // 指向正确的原型
     var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给 obj 设置属性
     return typeof ret === "object" ? ret : obj; // 确保构造器总是会返回一个对象
   };
   var a = objectFactory(Person, "sven");
   console.log(a.name); // 输出：sven
   console.log(a.getName()); // 输出：sven
   console.log(Object.getPrototypeOf(a) === Person.prototype); // 输出：true
   ```

   我们看到，分别调用下面两句代码产生了一样的结果。

   ```js
   ​​​​​​​​​​var a = objectFactory( A, 'sven' );
   ​​var a = new A( 'sven' );​​
   ```

3. **对象会记住它的原型**

   如果请求可以在一个链条中依次往后传递，那么每个节点都必须知道它的下一个节点。

   同理，要完成 Io 语言或者 JavaScript 语言中的原型链查找机制，每个对象至少应该先记住它自己的原型。

   就 JavaScript 的真正实现来说，其实并不能说对象有原型，而只能说对象的构造器有原型。

   对于“对象把请求委托给它自己的原型”这句话，更好的说法是对象把请求委托给它的构造器的原型。

   JavaScript 给对象提供了一个名为 `__proto__` 的隐藏属性，某个对象的 `__proto__` 属性默认会指向它的构造器的原型对象，即 `{Constructor}.prototype`。

   实际上，`__proto__` 就是对象跟“对象构造器的原型”联系起来的纽带。
   正因为对象要通过 `__proto__` 属性来记住它的构造器的原型。

4. **如果对象无法响应某个请求，它会把这个请求委托给它的构造器的原型**

   这条规则即是原型继承的精髓所在。

   对 Io 语言的学习中，我们已经了解到，当一个对象无法响应某个请求的时候，它会顺着原型链把请求传递下去，直到遇到一个可以处理该请求的对象为止。

   JavaScript 的克隆跟 Io 语言还有点不一样。

   Io 中每个对象都可以作为原型被克隆。

   而在 JavaScript 中，每个对象都是从 `Object.prototype` 对象克隆而来的，

   这样的话，我们只能得到单一的继承关系，即每个对象都继承自 `Object.prototype` 对象，这样的对象系统显然是非常受限的。

   实际上，虽然 JavaScript 的对象最初都是由 `Object.prototype` 对象克隆而来的，但对象构造器的原型并不仅限于 `Object.prototype` 上，而是可以动态指向其他对象。

   这样一来，当对象 `a` 需要借用对象 `b` 的能力时，可以有选择性地把对象 `a` 的构造器的原型指向对象 `b`，从而达到继承的效果。

   ```js
   var obj = { name: "sven" };
   var A = function () {};
   A.prototype = obj;
   var a = new A();
   console.log(a.name); // 输出：sven
   ```

   我们来看看执行这段代码的时候，引擎做了哪些事情。

   - 尝试遍历对象 `a` 中的所有属性，但没有找到 `name` 这个属性。
   - 查找 `name` 属性的这个请求被委托给对象 `a` 的构造器的原型，它被 `a.__proto__` 记录着并且指向 `A.prototype`，而 `A.prototype` 被设置为对象 `obj`。
   - 在对象 `obj` 中找到了 `name` 属性，并返回它的值。

   ```js
   var A = function () {};
   A.prototype = { name: "sven" };
   var B = function () {};
   B.prototype = new A();
   var b = new B();
   console.log(b.name); // 输出：sven
   ```

   再看这段代码执行的时候，引擎做了什么事情。

   - 首先，尝试遍历对象 `b` 中的所有属性，但没有找到 `name` 这个属性。
   - 查找 `name` 属性的请求被委托给对象 `b` 的构造器的原型，它被 `b.__proto__` 记录着并且指向 `B.prototype`，而 `B.prototype` 被设置为一个通过 `new A()` 创建出来的对象。
   - 在该对象中依然没有找到 `name` 属性，于是请求被继续委托给这个对象构造器的原型 `A.prototype`。
   - 在 `A.prototype` 中找到了 `name` 属性，并返回它的值。

   原型链并不是无限长的。

   `Object.prototype` 的原型是 `null`。

   设计模式在很多时候其实都体现了语言的不足之处。

   Peter Norvig 曾说，设计模式是对语言不足的补充，如果要使用设计模式，不如去找一门更好的语言。

   当前的 JavaScript 引擎下，通过 `Object.create` 来创建对象的效率并不高，通常比通过构造函数创建对象要慢。

   通过设置构造器的 `prototype` 来实现原型继承的时候，除了根对象 `Object.prototype` 本身之外，任何对象都会有一个原型。

   通过 `Object.create(null)` 可以创建出没有原型的对象。

### 第二章：this, call 和 apply

#### 2.1 this

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

#### 2.2 `call` 和 `apply`

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

### 第三章 闭包和高阶函数

虽然 JavaScript 是一门完整的面向对象的编程语言，但这门语言同时也拥有许多函数式语言的特性。

函数式语言的鼻祖是 LISP。

JavaScript 在设计之初参考了 LISP 两大方言之一的 Scheme，引入了 Lambda 表达式、闭包、高阶函数等特性。

使用这些特性，我们经常可以用一些灵活而巧妙的方式来编写 JavaScript 代码。

在 JavaScript 版本的设计模式中，许多模式都可以用闭包和高阶函数来实现。

#### 3.1 闭包

当在函数中声明一个变量的时候，如果该变量前面没有带上关键字 `var`，这个变量就会成为全局变量，这当然是一种容易造成命名冲突的做法。

当在函数中搜索一个变量的时候，如果该函数内并没有声明这个变量，那么此次搜索的过程会随着代码执行环境创建的作用域链往外层逐层搜索，一直搜索到全局对象为止。

变量的搜索是从内到外而非从外到内的。

对于全局变量来说，全局变量的生存周期当然是永久的，除非我们主动销毁这个全局变量。

而对于在函数内用 `var` 关键字声明的局部变量来说，当退出函数时，这些局部变量即失去了它们的价值，它们都会随着函数调用的结束而被销毁。

```js
var func = function () {
  var a = 1;
  return function () {
    a++;
    alert(a);
  };
};

var f = func();
f(); // 输出：2
f(); // 输出：3
f(); // 输出：4
f(); // 输出：5
```

这是因为当执行 `var f = func();` 时，`f` 返回了一个匿名函数的引用，它可以访问到 `func()` 被调用时产生的环境，而局部变量 `a` 一直处在这个环境里。

既然局部变量所在的环境还能被外界访问，这个局部变量就有了不被销毁的理由。

在这里产生了一个闭包结构，局部变量的生命看起来被延续了。

利用闭包我们可以完成许多奇妙的工作，下面介绍一个闭包的经典应用。

假设页面上有 5 个 `div` 节点，我们通过循环来给每个 `div` 绑定 `onclick` 事件，按照索引顺序，点击第 1 个 `div` 时弹出 `0`，点击第 2 个 `div` 时弹出 1，以此类推。
代码如下：

```html
<html>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <script>
      var nodes = document.getElementsByTagName("div");
      for (var i = 0, len = nodes.length; i < len; i++) {
        nodes[i].onclick = function () {
          alert(i);
        };
      }
    </script>
  </body>
</html>
```

测试这段代码就会发现，无论点击哪个 `div`，最后弹出的结果都是 `5` 。

这是因为 `div` 节点的 `onclick` `事件是被异步触发的，当事件被触发的时候，for` 循环早已结束，此时变量 `i` 的值已经是 `5`，所以在 `div` 的 `onclick` 事件函数中顺着作用域链从内到外查找变量 `i` 时，查找到的值总是 `5`。

解决方法是在闭包的帮助下，把每次循环的 `i` 值都封闭起来。当在事件函数中顺着作用域链中从内到外查找变量 `i` 时，会先找到被封闭在闭包环境中的 `i`，如果有 `5` 个 `div`，这里的 `i` 就分别是 `0`, `1`, `2`, `3`, `4`：

```js
for (var i = 0, len = nodes.length; i < len; i++) {
  (function (i) {
    nodes[i].onclick = function () {
      console.log(i);
    };
  })(i);
}
```

根据同样的道理，我们还可以编写如下一段代码：

```js
var Type = {};
for (var i = 0, type; (type = ["String", "Array", "Number"][i++]); ) {
  (function (type) {
    Type["is" + type] = function (obj) {
      return Object.prototype.toString.call(obj) === "[object " + type + "]";
    };
  })(type);
}
Type.isArray([]); // 输出：true
Type.isString("str"); // 输出：true
```

在实际开发中，闭包的运用非常广泛。

1. **封装变量**

   闭包可以帮助把一些不需要暴露在全局的变量封装成“私有变量”。

   假设有一个计算乘积的简单函数：

   ```js
   var mult = function () {
     var a = 1;
     for (var i = 0, l = arguments.length; i < l; i++) {
       a = a * arguments[i];
     }
     return a;
   };
   ```

   `mult` 函数接受一些 `number` 类型的参数，并返回这些参数的乘积。

   现在我们觉得对于那些相同的参数来说，每次都进行计算是一种浪费，我们可以加入缓存机制来提高这个函数的性能：

   ```js
   var cache = {};
   var mult = function () {
     var args = Array.prototype.join.call(arguments, ", ");
     if (cache[args]) {
       return cache[args];
     }
     var a = 1;
     for (var i = 0, l = arguments.length; i < l; i++) {
       a = a * arguments[i];
     }
     return (cache[args] = a);
   };
   alert(mult(1, 2, 3)); // 输出：6
   alert(mult(1, 2, 3)); // 输出：6
   ```

   我们看到 `cache` 这个变量仅仅在 `mult` 函数中被使用，与其让 `cache` 变量跟 `mult` 函数一起平行地暴露在全局作用域下，不如把它封闭在 `mult` 函数内部，这样可以减少页面中的全局变量，以避免这个变量在其他地方被不小心修改而引发错误。
   代码如下：

   ```js
   var mult = (function () {
     var cache = {};
     return function () {
       var args = Array.prototype.join.call(arguments, ", ");
       if (args in cache) {
         return cache[args];
       }
       var a = 1;
       for (var i = 0, l = arguments.length; i < l; i++) {
         a = a * arguments[i];
       }
       return (cache[args] = a);
     };
   })();
   ```

   提炼函数是代码重构中的一种常见技巧。

   如果在一个大函数中有一些代码块能够独立出来，我们常常把这些代码块封装在独立的小函数里面。

   独立出来的小函数有助于代码复用，如果这些小函数有一个良好的命名，它们本身也起到了注释的作用。

   如果这些小函数不需要在程序的其他地方使用，最好是把它们用闭包封闭起来。代码如下：

   ```js
   var mult = (function () {
     var cache = {};
     var calculate = function () {
       var a = 1;
       for (var i = 0, l = arguments.length; i < l; i++) {
         a = a * arguments[i];
       }
       return a;
     };
     return function () {
       var args = Array.prototype.join.call(arguments, ", ");
       if (args in cache) {
         return cache[args];
       }
       return (cache[args] = calculate.apply(null, arguments));
     };
   })();
   mult(1, 2, 3); // 6
   ```

2. **延续局部变量的寿命**

   `img` 对象经常用于进行数据上报，如下所示：
   ​​​​

   ```js
   var report = function (src) {
     var img = new Image();
     img.src = src;
   };
   report("http://xxx.com/getUserInfo");
   ```

   但是通过查询后台的记录我们得知，因为一些低版本浏览器的实现存在 `bug`，在这些浏览器下使用 `report` 函数进行数据上报会丢失 30% 左右的数据，也就是说，`report` 函数并不是每一次都成功发起了 HTTP 请求。

   丢失数据的原因是 `img` 是 `report` 函数中的局部变量，当 `report` 函数的调用结束后，`img` 局部变量随即被销毁，而此时或许还没来得及发出 HTTP 请求，所以此次请求就会丢失掉。

   现在我们把 `img` 变量用闭包封闭起来，便能解决请求丢失的问题：

   ```js
   var report = (function () {
     var imgs = [];
     return function (src) {
       var img = new Image();
       imgs.push(img);
       img.src = src;
     };
   })();
   ```

闭包和面向对象设计

过程与数据的结合是形容面向对象中的“对象”时经常使用的表达。

对象以方法的形式包含了过程，而闭包则是在过程中以环境的形式包含了数据。

通常用面向对象思想能实现的功能，用闭包也能实现。

反之亦然。在 JavaScript 语言的祖先 Scheme 语言中，甚至都没有提供面向对象的原生设计，但可以使用闭包来实现一个完整的面向对象系统。

```js
var extent = function () {
  var value = 0;
  return {
    call: function () {
      value++;
      console.log(value);
    },
  };
};

var extentObj = extent();
extentObj.call(); // 输出：1
extentObj.call(); // 输出：2
extentObj.call(); // 输出：3
```

如果换成面向对象的写法，就是：

```js
var extent = {
  value: 0,
  call: function () {
    this.value++;
    console.log(this.value);
  },
};

extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3
```

或者：

```js
var Extent = function () {
  this.value = 0;
};

Extent.prototype.call = function () {
  this.value++;
};

var extent = new Extent();
extent.call();
extent.call();
extent.call();
console.log(extent.value); // 输出：3
```

用面向对象的方式来编写一段命令模式的代码。

```html
<html>
  <body>
    <button id="execute">点击我执行命令</button>
    <button id="undo">点击我执行命令</button>
    <script>
      var Tv = {
        open: function () {
          console.log("打开电视机");
        },
        close: function () {
          console.log("关上电视机");
        },
      };

      var OpenTvCommand = function (receiver) {
        this.receiver = receiver;
      };

      OpenTvCommand.prototype.execute = function () {
        this.receiver.open(); // 执行命令，打开电视机
      };

      OpenTvCommand.prototype.undo = function () {
        this.receiver.close(); // 撤销命令，关闭电视机
      };

      var setCommand = function (command) {
        document.getElementById("execute").onclick = function () {
          command.execute(); // 输出：打开电视机
        };
        document.getElementById("undo").onclick = function () {
          command.undo(); // 输出：关闭电视机
        };
      };

      setCommand(new OpenTvCommand(Tv));
    </script>
  </body>
</html>
```

命令模式的意图是把请求封装为对象，从而**分离请求的发起者和请求的接收者（执行者）**之间的耦合关系。

在 JavaScript 中，函数作为一等对象，本身就可以四处传递，用函数对象而不是普通对象来封装请求显得更加简单和自然。

如果需要往函数对象中预先植入命令的接收者，那么闭包可以完成这个工作。

在面向对象版本的命令模式中，预先植入的命令接收者被当成对象的属性保存起来；

而在闭包版本的命令模式中，**命令接收者会被封闭在闭包形成的环境中**。

```js
var Tv = {
  open: function () {
    console.log("打开电视机");
  },
  close: function () {
    console.log("关上电视机");
  },
};

var createCommand = function (receiver) {
  var execute = function () {
    return receiver.open(); // 执行命令，打开电视机
  };
  var undo = function () {
    return receiver.close(); // 执行命令，关闭电视机
  };
  return {
    execute: execute,
    undo: undo,
  };
};

var setCommand = function (command) {
  document.getElementById("execute").onclick = function () {
    command.execute(); // 输出：打开电视机
  };
  document.getElementById("undo").onclick = function () {
    command.undo(); // 输出：关闭电视机
  };
};

setCommand(createCommand(Tv));
```

人们对闭包也有诸多误解。

一种耸人听闻的说法是闭包会造成内存泄露，所以要尽量减少闭包的使用。

局部变量本来应该在函数退出的时候被解除引用，但如果局部变量被封闭在闭包形成的环境中，那么这个局部变量就能一直生存下去。
从这个意义上看，闭包的确会使一些数据无法被及时销毁。

使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的，这里并不能说成是内存泄露。

如果在将来需要回收这些变量，我们可以手动把这些变量设为 `null`。

跟闭包和内存泄露有关系的地方是，使用闭包的同时比较容易形成循环引用，如果闭包的作用域链中保存着一些 `DOM` 节点，这时候就有可能造成内存泄露。

这本身并非闭包的问题，也并非 JavaScript 的问题。在 IE 浏览器中，由于 `BOM` 和 `DOM` 中的对象是使用 C++ 以 `COM` 对象的方式实现的，而 `COM` 对象的垃圾收集机制采用的是**引用计数策略**。

在基于引用计数策略的垃圾回收机制中，如果**两个对象之间形成了循环引用**，那么这两个对象都无法被回收，但循环引用造成的内存泄露在本质上也不是闭包造成的。

如果要解决循环引用带来的内存泄露问题，我们只需要把循环引用中的变量设为 `null` 即可。

将变量设置为 `null` 意味着切断变量与它此前引用的值之间的连接。

当垃圾收集器下次运行时，就会删除这些值并回收它们占用的内存。

#### 3.2 高阶函数

高阶函数是指至少满足下列条件之一的函数。

- 函数可以作为参数被传递；

- 函数可以作为返回值输出。

把函数当作参数传递，这代表我们可以抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。

其中一个重要应用场景就是常见的回调函数。

1. **回调函数**

   在 ajax 异步请求的应用中，回调函数的使用非常频繁。

   ```js
   var getUserInfo = function (userId, callback) {
     $.ajax("http://xxx.com/getUserInfo?" + userId, function (data) {
       if (typeof callback === "function") {
         callback(data);
       }
     });
   };

   getUserInfo(13157, function (data) {
     alert(data.userName);
   });
   ```

   回调函数的应用不仅只在异步请求中，当一个函数不适合执行一些请求时，我们也可以把这些请求封装成一个函数，并把它作为参数传递给另外一个函数，“委托”给另外一个函数来执行。

   把 `div.style.display = 'none'` 的逻辑硬编码在 `appendDiv` 里显然是不合理的，`appendDiv` 未免有点个性化，成为了一个难以复用的函数，并不是每个人创建了节点之后就希望它们立刻被隐藏。

   于是我们把 `div.style.display = 'none'` 这行代码抽出来，用回调函数的形式传入 `appendDiv` 方法：

   ```js
   var appendDiv = function (callback) {
     for (var i = 0; i < 100; i++) {
       var div = document.createElement("div");
       div.innerHTML = i;
       document.body.appendChild(div);
       if (typeof callback === "function") {
         callback(div);
       }
     }
   };
   appendDiv(function (node) {
     node.style.display = "none";
   });
   ```

2. **`Array.prototype.sort`**

   `Array.prototype.sort` 接受一个函数当作参数，这个函数里面封装了数组元素的排序规则。

   从 `Array.prototype.sort` 的使用可以看到，我们的目的是对数组进行排序，这是不变的部分；

   而使用什么规则去排序，则是可变的部分。

   把可变的部分封装在函数参数里，动态传入 `Array.prototype.sort`，使 `Array.prototype.sort` 方法成为了一个非常灵活的方法。

   ```js
   // 从小到大排列
   [1, 4, 3].sort(function (a, b) {
     return a - b;
   });
   // 输出：[1, 3, 4]

   // 从大到小排列
   [1, 4, 3].sort(function (a, b) {
     return b - a;
   });
   // 输出：[4, 3, 1]
   ```

相比把函数当作参数传递，函数当作返回值输出的应用场景也许更多，也更能体现函数式编程的巧妙。

让函数继续返回一个可执行的函数，意味着运算过程是可延续的。

1. **判断数据的类型**

   更好的方式是用 `Object.prototype.toString` 来计算。

   不同的只是 `Object.prototype.toString.call(obj)` 返回的字符串。

   为了避免多余的代码，我们尝试把这些字符串作为参数提前值入 `isType` 函数。

   我们还可以用循环语句，来批量注册这些 `isType` 函数：

   ```js
   var Type = {};
   for (var i = 0, type; (type = ["String", "Array", "Number"][i++]); ) {
     (function (type) {
       Type["is" + type] = function (obj) {
         return Object.prototype.toString.call(obj) === "[object " + type + "]";
       };
     })(type);
   }
   Type.isArray([]); // 输出：true
   Type.isString("str"); // 输出：true
   ```

2. **`getSingle`**

   下面是一个单例模式的例子：

   ```js
   var getSingle = function (fn) {
     var ret;
     return function () {
       return ret || (ret = fn.apply(this, arguments));
     };
   };
   ```

   这个高阶函数的例子，既把函数当作参数传递，又让函数执行后返回了另外一个函数。

   ```js
   var getScript = getSingle(function () {
     return document.createElement("script");
   });
   // getScript 是使用单例模式封装的函数。

   var script1 = getScript();
   // 第一次调用 getScript() 时，会创建一个新的 <script> 元素，并将其缓存下来。
   var script2 = getScript();
   // 再次调用 getScript() 时，将直接返回缓存的 <script> 元素。

   alert(script1 === script2); // 输出：true
   ```

AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。

把这些功能抽离出来之后，再通过“动态织入”的方式掺入业务逻辑模块中。

这样做的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。

在 JavaScript 这种动态语言中，AOP 的实现更加简单，这是 JavaScript 与生俱来的能力。

通常，在 JavaScript 中实现 AOP，都是指把一个函数“动态织入”到另外一个函数之中，具体的实现技术有很多。

本节我们通过扩展 `Function.prototype` 来做到这一点。

```js
// 这段代码演示了函数的装饰器模式。
Function.prototype.before = function (beforefn) {
  var self = this; // 保存原函数的引用
  return function () {
    beforefn.apply(this, arguments); // 执行新函数，修正 this
    return self.apply(this, arguments); // 执行原函数
  };
};
// before 方法用于在函数执行前执行另一个函数，

Function.prototype.after = function (afterfn) {
  var self = this;
  return function () {
    var ret = self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
// after 方法用于在函数执行后执行另一个函数。

var func = function () {
  console.log(2);
};

func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });

func(); // 控制台输出 1, 2, 3
```

我们把负责打印数字 `1` 和打印数字 `3` 的两个函数通过 AOP 的方式动态植入 `func` 函数。

这种使用 AOP 的方式来给函数添加职责，也是 JavaScript 语言中一种非常特别和巧妙的装饰者模式实现。

这种装饰者模式在实际开发中非常有用。

函数柯里化（function currying）

`currying` 的概念最早由俄国数学家 Moses Schönfinkel 发明，而后由著名的数理逻辑学家 Haskell Curry 将其丰富和发展，`currying` 由此得名。

`currying` 又称 **部分求值**。

一个 `currying` 的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。

待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

虽然下面的 `cost` 函数还不是一个 `currying` 函数的完整实现，但有助于我们了解其思想：

```js
var cost = (function () {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      var money = 0;
      for (var i = 0, l = args.length; i < l; i++) {
        money += args[i];
      }
      return money;
    } else {
      [].push.apply(args, arguments);
    }
  };
})();

cost(100); // 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
console.log(cost()); // 求值并输出：600
```

接下来我们编写一个通用的 `function currying(){}`

```js
var currying = function (fn) {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  };
};

var cost = (function () {
  var money = 0;
  return function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i];
    }
    return money;
  };
})();

var cost = currying(cost); // 转化成 currying 函数
cost(100); // 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
alert(cost()); // 求值并输出：600
```

在 JavaScript 中，当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法，这是动态类型语言的特点，也是常说的鸭子类型思想。

同理，一个对象也未必只能使用它自身的方法。

我们常常让类数组对象去借用 `Array.prototype` 的方法，这是 `call` 和 `apply` 最常见的应用场景之一。

```js
(function () {
  Array.prototype.push.call(arguments, 4); // arguments借用Array.prototype.push方法
  console.log(arguments); // 输出：[1, 2, 3, 4]
})(1, 2, 3);
```

在我们的预期中，`Array.prototype` 上的方法原本只能用来操作 `array` 对象。

但用 `call` 和 `apply` 可以把任意对象当作 `this` 传入某个方法，这样一来，方法中用到 `this` 的地方就不再局限于原来规定的对象，而是加以泛化并得到更广的适用性。

`uncurrying` 的话题来自 JavaScript 之父 Brendan Eich 在 2011 年发表的一篇 Twitter。

以下代码是 `uncurrying` 的实现方式之一：

```js
// uncurrying 方法返回一个新的函数，在这个函数内部，
// 使用 apply 方法将原始函数（self）与传入的对象（obj）和参数（arguments）绑定在一起，实现了非柯里化的效果。
Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};
```

在类数组对象 `arguments` 借用 `Array.prototype` 的方法之前，先把 `Array.prototype.push.call` 这句代码转换为一个通用的 `push` 函数。

```js
var push = Array.prototype.push.uncurrying();

(function () {
  push(arguments, 4);
  console.log(arguments); // 输出：[1, 2, 3, 4]
})(1, 2, 3);
```

通过 `uncurrying` 的方式，`Array.prototype.push.call` 变成了一个通用的 `push` 函数。

这样一来，`push` 函数的作用就跟 `Array.prototype.push` 一样了，同样不仅仅局限于只能操作 `array` 对象。

而对于使用者而言，调用 `push` 函数的方式也显得更加简洁和意图明了。
