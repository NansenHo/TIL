- [React 全局状态管理 Redux](#react-全局状态管理-redux)
  - [MVC、MVP、MVVM](#mvcmvpmvvm)
  - [Flux](#flux)
  - [Redux](#redux)

# React 全局状态管理 Redux

为什么要使用 Redux ？什么时候使用 Redux ？Redux 是什么？

## MVC、MVP、MVVM

![](assets/mvc-base.png)

`MVC` 的全名是 `Model View Controller` ，是模型(model)-视图(view)-控制器(controller)的缩写，是一种软件设计典范。

`V` 即 View 视图是指用户看到并与之交互的界面。

`M` 即 Model 模型是管理数据 ，很多业务逻辑都在模型中完成。在MVC的三个部件中，模型拥有最多的处理任务。

`C` 即 Controller 控制器是指控制器接受用户的输入并调用模型和视图去完成用户的需求，控制器本身不输出任何东西和做任何处理。它只是接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示返回的数据

但 MVC 只是看起来很美

MVC 框架的数据流很理想，请求先到 Controller , 由 Controller 调用 Model 中的数据交给 View 进行渲染，但是在实际的项目中，若是允许 Model 和 View 直接通信的。就会出现了这样的结果：

![](assets/defect-of-mvc.png)

Controller 控制 Model 去渲染 View，View 可以触发事件去更改 Model，最后就变成了意面一样的代码。

![MVP](assets/MVP.png)
MVP

所以 MVC 是不够的，需要升级成 **MVP**。MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

View 与 Model 不发生联系了，都通过 Presenter 传递。Presenter 和 Model 以及 Presenter 和 View 的通信，都是双向的。

View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

**MVVM** 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

唯一的区别是，它采用双向绑定（data-binding）：View 的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。

[MVC，MVP 和 MVVM 的图示](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

![MVVM](assets/MVVM.png)

MVVM

## Flux

Flux 是一套前端应用架构模式，核心是单向数据流。Flux 不是具体的代码实现。

在 React 中，我们将 JS HTML CSS 都写在 View 里。React 只是一个 MVC 中的 V (视图层)，只管页面中的渲染。所以一旦需要数据管理的时候，React 本身的能力就不足以支撑复杂组件结构的项目。

在传统的 MVC 中，就需要用到 Model 和 Controller 。但 Facebook 对于当时世面上的 MVC 框架并不满意。

于是 Facebook 在推出 React 的同时，也推出了 Flux 。但 Flux 并不是一个 MVC 框架，而是一种新的思想。


> 在 Vue 中，Vue 是完整的 MVVM 框架，而 Vuex 只是个全局的插件。
> 
> Flux 是状态管理的鼻祖。Vuex 和 Redux 的灵感都来源于 Flux 。

![](assets/Flux%20model.png)

Flux 模型的实现

- View： 视图层
- ActionCreator（动作创造者）：视图层发出的消息（比如 mouseClick ）
- Dispatcher（派发器）：用来接收 Actions 、执行回调函数
- Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒 Views 要更新页面

Flux 的流程：

1. 组件获取到 store 中保存的数据挂载在自己的状态上
2. 用户产生了操作，调用 actions 的方法
3. actions 接收到了用户的操作，进行一系列的逻辑代码、异步操作
4. 然后 actions 会创建出对应的 action，action 带有标识性的属性
5. actions 调用 dispatcher 的 dispatch 方法将 action 传递给 dispatcher
6. dispatcher 接收到 action 并根据标识信息判断之后，调用 store 的更改数据的方法
7. store 的方法被调用后，更改状态，并触发自己的某一个事件
8. store 更改状态后事件被触发，该事件的处理程序会通知 view 去获取最新的数据

## Redux

React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。

有两个方面，它没涉及：

- 代码结构
- 组件之间的通信

2013 年 Facebook 提出了 Flux 架构的思想，引发了很多的实现。

2015 年，Redux 出现，将 Flux 与 [函数式编程](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/) 结合一起，很短时间内就成为了最热门的前端架构。

如果你不知道你是否需要使用 Redux，那你就是不需要。可以用 Context 等来满足需求。

简单说，如果你的 UI 层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

比如以下情况：

- 用户的使用方式非常简单
- 用户之间没有协作
- 不需要与服务器大量交互，也没有使用 WebSocket
- 视图层（View）只从单一来源获取数据

那什么项目需要 Redux ：

- 用户的使用方式复杂
- 不同身份的用户有不同的使用方式（比如普通用户和管理员）
- 多个用户之间可以协作
- 与服务器大量交互，或者使用了WebSocket
- View要从多个来源获取数据

什么组件需要 Redux ：

- 某个组件的状态，需要共享
- 某个状态需要在任何地方都可以拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另一个组件的状态

Redux 的设计思想：

1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面（唯一数据源）。

> 注意：flux、Redux 都不是必须和 React 搭配使用的，因为 flux 和 Redux 是完整的架构，在学习 React 的时候，只是将 React 的组件作为 Redux 中的视图层去使用了。
> 

Redux 的使用的三大原则：

- Single Source of Truth(唯一的数据源)
- State is read-only(状态是只读的)
- Changes are made with pure function(数据的改变必须通过纯函数完成)