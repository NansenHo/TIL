# 前端面试准备

- [前端面试准备](#前端面试准备)
  - [技术之外的问题](#技术之外的问题)
    - [自我介绍](#自我介绍)
    - [项目介绍（你做了什么）](#项目介绍你做了什么)
    - [项目介绍（项目是什么样的）](#项目介绍项目是什么样的)
    - [职业规划](#职业规划)
  - [题目分析](#题目分析)
    - [不同类型题目的答题思路](#不同类型题目的答题思路)
  - [相关问题](#相关问题)
    - [学习前端多久了](#学习前端多久了)
    - [你有看什么书吗](#你有看什么书吗)
  - [HTML](#html)
    - [空元素是什么，有哪些](#空元素是什么有哪些)
    - [Canvas 和 SVG 的区别](#canvas-和-svg-的区别)
    - [iframe](#iframe)
    - [SEO 是啥（语义化）](#seo-是啥语义化)
    - [meta viewport 标签怎么写？](#meta-viewport-标签怎么写)
    - [使用 Canvas 一般是什么流程？](#使用-canvas-一般是什么流程)
    - [localStorage 和 cookie 的区别？](#localstorage-和-cookie-的区别)
  - [CSS](#css)
    - [BFC 是什么](#bfc-是什么)
    - [▶️CSS 实现动画，可以有哪些属性可以做](#️css-实现动画可以有哪些属性可以做)
    - [▶️重绘和重排是什么，有什么区别？](#️重绘和重排是什么有什么区别)
    - [CSS 常用的布局是什么？是用哪些属性？](#css-常用的布局是什么是用哪些属性)
    - [CSS 选择器的优先级](#css-选择器的优先级)
    - [flex grow 是用来干嘛的？](#flex-grow-是用来干嘛的)
  - [项目相关](#项目相关)
    - [页面中使用 iframe 嵌入 PDF.js 的 viewer.html 时会有什么问题](#页面中使用-iframe-嵌入-pdfjs-的-viewerhtml-时会有什么问题)
    - [文件上传，怎么获取文件流](#文件上传怎么获取文件流)
    - [文件上传之前做拦截是怎么做的（文件大小不超过多少、文件类型等等）](#文件上传之前做拦截是怎么做的文件大小不超过多少文件类型等等)
    - [文件流怎么转成文件](#文件流怎么转成文件)
    - [下载文件怎么获取文件名](#下载文件怎么获取文件名)
    - [下载文件，如何给文件名重命名](#下载文件如何给文件名重命名)
    - [计算首屏加载时间](#计算首屏加载时间)
    - [加载首屏加载速度慢](#加载首屏加载速度慢)
  - [实战题 / 场景题](#实战题--场景题)
    - [很多数据通过懒加载加载在同一个页面上](#很多数据通过懒加载加载在同一个页面上)
  - [JS](#js)
    - [JS 的所有的数据类型](#js-的所有的数据类型)
    - [JS 里声明变量和函数都会提升](#js-里声明变量和函数都会提升)
    - [== 和 === 的区别](#-和--的区别)
    - [map 和 forEach 的区别](#map-和-foreach-的区别)
    - [addEventListener()](#addeventlistener)
    - [JS 的组成部分](#js-的组成部分)
    - [知道哪些 ES6 语法](#知道哪些-es6-语法)
    - [原型链是什么](#原型链是什么)
    - [如何自己创建一个原型链](#如何自己创建一个原型链)
    - [原型链解决了什么问题](#原型链解决了什么问题)
    - [原型链的优缺点](#原型链的优缺点)
    - [实例化 & 继承](#实例化--继承)
    - [`this` 是什么](#this-是什么)
    - [JS 的 `new` 做了什么（记忆题）](#js-的-new-做了什么记忆题)
    - [`Promise.all` 这个 API 是干嘛的](#promiseall-这个-api-是干嘛的)
    - [现在有三个请求，第一个请求失败了，我还想拿到第二个请求的结果，用 `Promise.all()` 如何来做？](#现在有三个请求第一个请求失败了我还想拿到第二个请求的结果用-promiseall-如何来做)
    - [`Promise.all` 和 `Promise.rase` 的区别](#promiseall-和-promiserase-的区别)
    - [手写函数节流（**throttle**）和函数防抖（**debounce**）](#手写函数节流throttle和函数防抖debounce)
    - [柯里化（currying）](#柯里化currying)
  - [TypeScript](#typescript)
    - [TypeScript 和 JavaScript 的区别](#typescript-和-javascript-的区别)
    - [你为什么要用 TypeScript](#你为什么要用-typescript)
    - [any、unknown、never 的区别是什么](#anyunknownnever-的区别是什么)
    - [TypeScript 函数返回 void 和 undefined](#typescript-函数返回-void-和-undefined)
    - [type 和 interface 的区别](#type-和-interface-的区别)
    - [TypeScript 的面向对象能力](#typescript-的面向对象能力)
    - [类 类的继承 类的复用](#类-类的继承-类的复用)
    - [public private protected](#public-private-protected)
    - [static 静态方法](#static-静态方法)
    - [数组去重](#数组去重)
  - [Vue](#vue)
    - [Vue 和 React 的区别](#vue-和-react-的区别)
    - [Vue2.0 和 Vue3.0 的区别](#vue20-和-vue30-的区别)
    - [Vue2 是如何实现双向绑定的](#vue2-是如何实现双向绑定的)
    - [组件间通信的方式](#组件间通信的方式)
    - [watch 和 computed 的区别](#watch-和-computed-的区别)
    - [Vue 有哪些生命周期函数，分别有什么用](#vue-有哪些生命周期函数分别有什么用)
    - [MVVM 框架是什么](#mvvm-框架是什么)
    - [对 Vue Router 的理解](#对-vue-router-的理解)
    - [`$router` 和 `$route` 的区别](#router-和-route-的区别)
    - [Vue Router 懒加载](#vue-router-懒加载)
    - [Vuex 是什么](#vuex-是什么)
    - [mixin（混入）是什么](#mixin混入是什么)
  - [HTTP](#http)
    - [GET 和 POST 的区别](#get-和-post-的区别)
  - [Webpack](#webpack)
    - [用过哪些常用的 loader 和 plugin](#用过哪些常用的-loader-和-plugin)
    - [loader 和 plugin 的区别](#loader-和-plugin-的区别)
    - [webpack 如何按需加载代码](#webpack-如何按需加载代码)
  - [版本管理](#版本管理)
    - [Git 和 SVN 的区别](#git-和-svn-的区别)
    - [`git rebase` 是什么](#git-rebase-是什么)
  - [计算机基础](#计算机基础)
    - [说一下进程与线程](#说一下进程与线程)
  - [数据结构](#数据结构)
    - [栈和队列的区别](#栈和队列的区别)
    - [二叉树的定义是什么](#二叉树的定义是什么)
    - [没有根节点的也算是二叉树吗](#没有根节点的也算是二叉树吗)
    - [满二叉树和完全二叉树的区别](#满二叉树和完全二叉树的区别)
  - [算法](#算法)
    - [你熟悉的算法有哪些？](#你熟悉的算法有哪些)
    - [数据库新用户标识](#数据库新用户标识)
  - [前端相关](#前端相关)
    - [前端性能优化——必考](#前端性能优化必考)
    - [前端工程化](#前端工程化)

[蚂蚁金服架构师总结的400道前端面试题，已拿淘系offer](https://zhuanlan.zhihu.com/p/462386587)

## 技术之外的问题

### 自我介绍

面试官你好，我叫张三，今年23岁。

我大学学的是日语，但我并不甘于只用日语来工作，更想是掌握一门技术，然后再结合语言的优势来工作。

所以当时就选择了日本的 IT 企业。日本的 IT 企业看我日语好，也愿意培养我。所以这样我就顺利进入了一家在东京的日本企业。但是由于我毕业那年发生了疫情，日本禁止外国人入境，工作签证就迟迟办不下来。公司就安排我在大连一家合作公司先上着班，等待日本政策开放。我日本那边公司是这家大连公司的甲方，两家合作了10多年了，就让我过去那边先熟悉业务。

我在大连公司就了解了软件开发中的整体流程和各个业务，也是在这些工作中，我了解了前端后端这些概念、和一些 HTML 和 CSS 代码，然后发现很感兴趣，就开始了自学和在网上买了一些线上课程。

我的学习路线是，

1. 先学习了前端三件套，
    - HTML 和 CSS 是跟着 MDN 和一些 CSS 小项目视频教程学的；
    - JS 是跟着 MDN 、网道 JavaScript 教程、阮一峰 ES6 和购买的线上视频来学习的，一边学自己也会一边写来实践试试；
2. 接着又学习了HTTP 和 前后端分离的相关知识；
3. 接着开始学习 Vue，并做了一些个人项目；

由于项目组里缺前端，这之后部长就把我调到了前端的岗位上；

### 项目介绍（你做了什么）

预约系统项目中，我主要负责了大部分的网页样式实现、接口对接和对应的页面功能实现、测试和疑难杂症的解决；在公司还负责了另外两个后台管理系统和一个大屏可视化项目的疑难杂症的解决；

yellow UI 库里面的 UI 设计和代码编写都由我独立完成。

### 项目介绍（项目是什么样的）

预约系统项目是分两个模块，老师和学生登陆的模块和管理员登陆的模块。

用到的技术栈有，Vue、Vue router、Axios、ElementUI、Webpack 等。

这两个模块中的大部分网页样式的实现、接口对接和对应页面功能实现、测试，以及疑难杂症的解决都是由我独立完成。

yellow UI 库是我参考 Element UI 的源码和一些教程，自己实现的一个 UI 库，里面一共有 icon button input 栅栏 布局 toast message 手风琴等 9 个组件。

用到的技术栈有，Vue、JavaScript、Parcel 等。

该项目里的所有 UI 设计和代码编写都由我独立完成。

### 职业规划

近期是把公司项目做好。另外是把技术进一步学习提升，夯实技术，多学一些组件插件，多学一两款框架。

中长期是想研究一门后台语言，比如 Java PHP，这样以后能更好地为公司开发工作服务。另外相信公司也有合理的晋升机制和制度，如果有幸有这样的机会，我也会当仁不让。

## 题目分析

### 不同类型题目的答题思路

1. **概念题**
    
    比如：BFC
    
    答题思路：是什么、怎么做、解决了什么问题、有什么优缺点，缺点如何解决。
    
2. **区别题**
    
    答题思路：A 是什么、B 是什么、A B 的相同点和不同点。

## 相关问题

### 学习前端多久了

我是从2020 年 8 月份开始学的。学了快一年的时候，转岗到了web前端开发。

### 你有看什么书吗

1. 《网道 JavaScript 》
2. 《阮一峰 ES6 》
3. 《你不知道的JS》

## HTML

### 空元素是什么，有哪些

一个**空元素（empty element）**可能是 HTML，SVG，或者 MathML 里的一个不能存在子节点（例如内嵌的元素或者元素内的文本）的元素。

比如：

- `<link>`
- `<meta>`
- `<hr>`
- `<img>`

[空元素 - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/empty_element)

### Canvas 和 SVG 的区别

> 区分题的答题思路：
> 
> 
> 先说 A 是什么；再说 B 是什么；然后说 A B 的相同点和不同点。
> 
1. Canvas 主要是用笔刷来绘制 2D 图形。
2. SVG 主要是用标签来绘制不规则的矢量图形；
3. 相同点：Canvas 和 SVG 都是用来绘制 2D 图形的；
4. 不同点：
    1. Canvas 绘制的是位图，SVG 绘制的是矢量图。
    2. SVG 节点过多时渲染慢，Canvas 性能更好一点，但写起来更复杂。
    3. SVG 支持分层和事件，Canvas 不支持，但可以用库支持。

### iframe

iframe 标签能够将另一个 HTML 页面嵌入到当前页面中。

iframe 的属性：

1. src：被嵌套的页面的 URL 地址；
2. frameborder：是否显示边框（yes / no ）；
3. height width：建议在 CSS 中设置；
4. name：`window.frames[name]` 时专用的属性；
5. scrolling /sk'rəʊlɪŋ/：是否滚动（yes / no / auto）；
6. sandbox：启用一些额外的限制条件；
7. ...

获取 iframe

1. iframe.contentWindow。。。
2. iframe.contentDocument
3. 结合 name 属性，通过 window 提供的 frames 获取

### SEO 是啥（语义化）

SEO 就是搜索引擎优化。

搜索引擎网站的后台会有一个非常庞大的数据库，里面存储了海量的关键词，而每个关键词又对应着很多网址。

这些网站都是网络爬虫去互联网上抓取的。

如果我们网站都用 div + css 来布局的话，网络爬虫

### meta viewport 标签怎么写？

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

1. `width=device-width` : 宽度就是设备的宽度。
2. `initial-scale=1.0` : 初始的缩放比例为 `1.0`，即不缩放。
3. `minimum-scale=1.0` : 最小缩放比例为`1.0` 。
4. `maximum-scale=1.0` : 最大缩放比例为`1.0` 。
5. `user-scalable=no` : 用户不能进行缩放。


### 使用 Canvas 一般是什么流程？

1. 创建一个 Canvas 并给一个 id “canvas”。
2. 获取上下文。canvas.cancast
3. 设置画笔的颜色宽度等

### localStorage 和 cookie 的区别？

| 存储方式 | cookie | localStorage | sessionStorage | indexedDB |
| --- | --- | --- | --- | --- |
| 大小 | 4k | 5 - 10M 根据不同浏览器 | 5 - 10M 根据不同浏览器 | 无限制 |
| 生命周期 | 服务器设置 | 永久 | 标签页关闭 | 永久 |
| 域名限制 | 同源 | 同源 | 当前标签页 | 同源 |
| 同步异步 | 同步 | 同步 | 同步 | 异步 |
| 存储内容 | 字符串 | 字符串 | 字符串 | object（非关系型数据库，和 mongodb 相似） |
1. cookie 最多只有 4k，而 localStorage 根据不同浏览器会有 5 - 10M 的容量；
2. cookie 会发往服务端，而 localStorage 是放在浏览器本地的；

## CSS

### BFC 是什么

BFC：是块格式化上下文。

**触发条件**：

1. 元素的 float 不是 none（浮动元素）
2. position 为 absolute 或 fixed（绝对定位元素）
3. inline-block 行内块元素
4. display 属性为 flex / inline-flex 的元素的子元素（弹性元素）

### ▶️CSS 实现动画，可以有哪些属性可以做

1. @keyframe 结合 animation
2. transform  
3. transition

### ▶️重绘和重排是什么，有什么区别？

推荐看《玩转CSS艺术之美》

### CSS 常用的布局是什么？是用哪些属性？

flex 布局。

常用的属性有 justify-content 。

### CSS 选择器的优先级

1. `!important`
2. 写在 style 属性里
3. id 选择器
4. class 选择器
5. 标签选择器
6. 通配符选择器
7. 浏览器自定义或者继承

优先级相同时，靠后出现的样式会优先选择。

继承得来的属性和浏览器默认的属性优先级最低

CSS 选择器使用强烈建议采用低权重原则，利于充分发挥 CSS 的继承性，复用性，模块化、组件化。

[CSS选择器优先级总结](https://www.cnblogs.com/zxjwlh/p/6213239.html)

### flex grow 是用来干嘛的？

是用来分配 flex 容器中的剩余空间的相对比例的。

当然前提是要有剩余空间，即子元素的宽度之和不能大于容器的宽度，否则就没有剩余空间了。

## 项目相关

### 页面中使用 iframe 嵌入 PDF.js 的 viewer.html 时会有什么问题

1. 部分浏览器全屏功能会出现错误（重写PDF.js的全屏按钮操作）；
2. 移动端显示可能有问题；

### 文件上传，怎么获取文件流

### 文件上传之前做拦截是怎么做的（文件大小不超过多少、文件类型等等）

用 Element UI 的话，upload 组件下面有一个 before-upload 属性可以对上传做各种拦截。只要返回的是 false / Promise 的失败结果 就会拦截。

### 文件流怎么转成文件

### 下载文件怎么获取文件名

### 下载文件，如何给文件名重命名

### 计算首屏加载时间

首屏加载时间，指的是浏览器从相应用户输入网址，到首屏内容渲染完成的时间。首屏加载是用户体验的重要环节。

```jsx
(performance.timing.domComplete - performance.timing.navigationStart) / 1000
```

[Performance - Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

### 加载首屏加载速度慢

1. 减少入口文件体积
2. 路由懒加载
3. 静态资源本地缓存
4. 后端返回采用 HTTP 缓存资源？？？
5. 前端合理使用 localStorage？？？
6. CDN 静态资源（react、react-router、axios 等都可以通过 CDN 的方式放到项目里）
7. UI 框架按需引入 `import { Button } from “antd”`
8. 避免组件重复打包

## 实战题 / 场景题

### 很多数据通过懒加载加载在同一个页面上

[前端处理上万条数据的优化_兰亭古墨-CSDN博客_前端处理几万条数据](https://blog.csdn.net/hefeng6500/article/details/99753271)

[说一下减少dom的办法？一次性给你大量的dom怎么优化？ - 代码先锋网](https://www.codeleading.com/article/30304276039/)

[当一个页面需要渲染的数据太多，处理不过来怎么解决？-有了](https://youle.zhipin.com/questions/e9c40acd2a049441tnV90tq6GVY~.html)

[前端如何优化大量数据处理操作？](https://www.zhihu.com/question/378973828)

[JavaScript如何一次性展示几万条数据](https://www.cnblogs.com/aspwebchh/p/6641796.html)

## JS

### JS 的所有的数据类型

1. number
2. string
3. undefined
4. null
5. Boolean
6. Object
7. symbol
8. bigint

**基本数据类型：**

1. Number
2. String
3. Boolean
4. Undefined
5. null
6. symbol

**引用数据类型：**

1. Object
2. Array
3. Date
4. function
5. RegExp（正则表达式）

**基本类型和引用类型的区别**

- 基本数据类型保存在栈内存中，因为基本数据类型占用空间小、大小固定，通过按值来访问，属于被频繁使用的数据。
- 引用数据类型存储在堆内存中，因为引用数据类型占据空间大、占用内存不固定。 如果存储在栈中，将会影响程序运行的性能； 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### JS 里声明变量和函数都会提升

在 JS 中，变量和函数的声明会被提升到最顶部执行。

函数的提升优先级高于变量的提升。

函数内部如果用 var 声明了和外部变量名称相同的变量，函数将不再向上寻找。

匿名函数不会提升。

### == 和 === 的区别

1. == 是非严格意义上的相等
    
    值相等就相等
    
2. === 是严格意义上的相等
    
    数据类型和值都相等才相等
    

### map 和 forEach 的区别

1. forEach 方式是最基本的数组方法，用来遍历和循环。
    
    默认有 3 个参数，
    
2. map 方法用法和 forEach 基本一致。但是 map 会返回一个新的数组，所以 callback 需要有 return 值，否则会 return undefined。

### addEventListener()

 

### JS 的组成部分

JS 由三个部分组成

1. ES
2. 文档对象模型 DOM
3. 浏览器对象模型 BOM

### 知道哪些 ES6 语法

promise 箭头函数 `let` `const` 展开运算符 解构赋值 

### 原型链是什么

原型链涉及到的概念是比较多的，我先举例说明一下吧。

假设我们现在有一个普通的空对象 `obj={}` ，这个 `obj` 的隐藏属性 `__proto__` （`obj` 的原型）等于 `Object.prototype` 。

假设我们有一个数组对象 `arr=[]` ，这个 `arr` 也会有一个隐藏属性 `__proto__` ，等于 `Array.prototype` 。但不同的是，`Array.prototype` 里也会有一个隐藏属性 `__ptoto__` ，等于 `Object.prototype`。

这样一来，

`arr` 这个数组就有两层原型：

- `arr` 的原型指向 `Array.prototype`
- `Array.prototype` 的原型又指向 `Object.prototype`

<aside>
💡 在 JS 里面，三层以上的原型链比较少见。

</aside>

### 如何自己创建一个原型链

先声明一个普通空对象，`obj={}` ，然后我们将它的隐藏属性 `__proto__` 篡改，改成我自己声明的一个函数 `fn` 。

用 `obj = Object.create(fn)`（[Object.create](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）或者 `obj = new constructor fn()` ，这样就能使 `obj.__proto__ === fn` 。

这样我们就自己创建一个原型链。

### 原型链解决了什么问题

**在没有 `Class 类` 的情况下，实现继承。**

以 `let arr = new Array(1, 2, 3)` 为例，

- `arr` 是 `Array` 的实例，拥有 `Array.prototype` 的所有属性；
- `Array` 类继承了 `Object` 类
- `arr` 是 `Object` 的间接实例，`arr` 也拥有 `Object.prototype` 的所有属性

这样一来，`arr` 就拥有了 `Array.prototype` 和 `Object.prototype` 里所有的属性。

### 原型链的优缺点

优点：简单优雅

缺点：不支持私有属性。（解决方法：用 class 就有私有属性了，声明私有属性要在属性名前加 `#` ，比如 `#scope` 。）

### 实例化 & 继承

一个对象拥有它的构造函数/类的属性，这个叫**实例化**。

比如我们有这样一个代码：`let arr = new Array(1, 2, 3)` 。

那 `arr` 作为 `Array` 的实例，就会有一个 `Array` 的 `length` 属性。

但是 `arr.valueOf` 这个属性就是继承了，因为这个属性不是 `Array` 提供的，而是 `Array` 的父类的 `Object.prototype` 这里拿到的。这里是 `Array` 继承了 `Object` ，跟 `arr` 没有关系。

### `this` 是什么

`this` 是 `call` 的第一个参数。

我们通过以下的**转换代码**来确定 `this`。

- `fn()` 的等价写法是 `fn.call(undefined)`
- `fn(”hi”)` 的等价写法是 `fn(undefined, ”hi”)`
- `obj.child.say("hi")` 的等价写法是 `say.call(obj.child, “hi”)` （对象的调用）

前者是语法糖，后者是完整写法。

如果**浏览器**发现 `this` 是一个 `undefined` ，基本都会将其转成 `window`。

<aside>
💡 如果我们在 `function(){ “use strict” }` 第一行用了 `“use strict”` ，浏览器就不会将 `undefined` 的 `this` 改成 `window` 了。

</aside>

```jsx
// 一下代码打印出什么
var length = 4
function callback(){
	console.log(this.length)
}

const obj = {
	length: 5,
	method(callback){
		callback()
	}	
}

obj.method(callback, 1, 2)

// 答案和解析

// 我们只需要看最后的 callback 在哪被执行即可。
// method(callback){callback()} 在这里被执行
// 然后我们套用转换代码，callback() 即 callback.call(undefined)
// 然后浏览器会把 undefined 的 this 转为 window
// 所以最后打印出来的是 window.length 即 4
```

```jsx
// 以下代码打印出什么
array = [function(){console.log(this)}, 1]
array[0]()

// 答案和解析

// 直接套用转换代码
// array[0]() 就相当于 array.0()
// 再套用转换代码就是 0.call(array)
// 所以 this 就是 array
```

```jsx
// 以下代码打印出什么
array = [function(){console.log(this)}, 1]
new array[0]()

// 有 new 就不能用转换代码了
```

<aside>
💡 对于普通函数来说，内部的 `this` 指向函数运行时所在的对象，内部 `this` 永远不可能是函数本身。

</aside>

箭头函数里面没有自己的 `this` 对象，内部的 `this` 就是定义时上层作用域中的 `this` 。

也就是说，箭头函数内部的 `this` 指向是固定的。

### JS 的 `new` 做了什么（记忆题）

1. 创建临时对象
2. 绑定原型
3. 执行构造函数
4. 返回临时对象

---

1. 自动创建空对象
2. 自动把空对象的原型，关联为 Xxx 的 prototype，将原型地址指定为 Xxx.prototype 。
3. 会把空对象作为 this 关键字运行构造函数
4. 自动 return this

[JS 的new - 搜索结果 - 知乎](https://www.zhihu.com/search?type=content&q=JS%20%E7%9A%84new)

### `Promise.all` 这个 API 是干嘛的

用于用于将多个 Promise 实例，包装成一个新的 Promise 实例。 

all 方法让我们能**并行地**执行多个异步函数，所有异步函数都执行结束后，才会执行相应的回调函数。

all 方法接受一个数组，数组中每个元素都必须是一个 Promise 实例。返回的结果也是一个数组，里面是每个 Promise 实例执行的结果。

只有当多个 Promise 实例执行的结果都是成功的，才会去调用 `.then` 的第一个函数，只要有一个失败了，就立刻 `reject` 。

[前端面试题 什么时候用promise.all 什么时候用async和await_欢迎来到冲哥的前端博客-CSDN博客_什么时候用promise](https://blog.csdn.net/yunchong_zhao/article/details/104009851)

### 现在有三个请求，第一个请求失败了，我还想拿到第二个请求的结果，用 `Promise.all()` 如何来做？

在把这三个 Promise 实例放进 all() 方法之前， 先对这三个 Promise 做一个处理。先用 .then 去拿到他们的结果。

### `Promise.all` 和 `Promise.rase` 的区别

### 手写函数节流（**throttle**）和函数防抖（**debounce**）

**意思**

- 函数节流：规定在一个单位时间内，只能触发一次函数。
- 函数防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

**使用场景**

- 函数节流常用于防止重复点击按钮以至于多次提交
- 函数防抖常用于页面

```jsx
function fn(){...}
let cd = false

button.onclick = function(){
	if(cd){
		//
	}else{
		fn()
		cd = true
		setTimeout(()=>{
			cd = false
		},3000)
	}
}
```

### 柯里化（currying）


## TypeScript

### TypeScript 和 JavaScript 的区别

- TS 是 JS 的超集。我们在 TS 中可以写 JS 的所有语法。
- TS 提供了强类型和更多面向对象的内容。
- TS 不能直接运行，最终需要编译成 JS 之后才能运行，所以我们使用它要做一些环境配置，也因此，只要 JS 能运行的地方都能写 TS。
- TS 由于最终需要编译成弱类型的 JS，所以 TS 和 Java / C# 这样天生的面向对象语言还是有区别和局限的。

### 你为什么要用 TypeScript

### any、unknown、never 的区别是什么

any 和 unknown 对比

- any 和 unknown 都是顶级类型（Top type）。任何类型的值都可以赋值给顶级类型。
- unknown 比 any 的类型检查更加严格。any 是什么检查都不做，unknown 要求先收窄类型。
    
    ```tsx
    const value: unknown = "hello world"
    const something: string = value as string
    ```
    
    any 就基本哪里都不报错，因为根本不做什么类型检查。所以能用 unknown 就用 unknown ，类型更安全一点。
    

never

- never 是底类型。never 可以赋值给任何的类型的值，但所有别的类型不能赋值给 never 。所以尽量别用这个，别在数据会变成 never 类型的位置写代码。
    
    尤雨溪的一个例子
    
    ```tsx
    interface A {
    	type: "a"
    }
    
    interface B {
    	type: "b"
    }
    
    type All = Foo | Bar
    
    function handleValue(val: All){
    	switch(val.type){
    		case: "a":
    			val // 类型为 A
    			break
    		case: "b":
    			val // 类型为 B
    			break
    		default:
    			// 类型为 never
    			const exhaustiveCheck: never = val
    			break
    	}
    }
    ```
    

### TypeScript 函数返回 void 和 undefined

如果我们函数没有返回值，那它会返回 `void` 。

如果我们函数不想返回东西还可以写 `return undefined` ，它会返回 `undefined`。

在 JS 没有办法区分一个函数返回 undefined 和 没有返回值。因为如果你没有返回值，JS 会自动帮你加上 `undefined` 。所以 TS 区分了这个地方。

### type 和 interface 的区别

如果跟对象相关用 interface，如果跟对象不相关用 type 。

```tsx
interface A {
	a: string
}

interface B extends A{
	b: string
}

const b: B {
	a: "hi",
	b: "hi"
}
```

```tsx
type AA {
	aa: string
}

type BB {
	bb: string
} && AA

const bb: BB {
	aa: "hi",
	bb: "hi"
}
```

### TypeScript 的面向对象能力

面向对象是说，我们在编程时，将客观世界的实体用对象的方式表现出来。比如说，我们可以写一个对象来表现一位员工，那这个对象就有名字、年龄、入职时间等属性和打卡、请假等行为。

### 类 类的继承 类的复用

### public private protected

1. 默认是 public，没有访问限制
2. 当成员被标记为 private 时，那就只能在该类中被访问
3. 当成员被标记为 protected 时，那就只能在该类和该类的派生类中被访问

### static 静态方法

在类 class 里面可以用 static 关键字来定义静态方法。

静态方法直接在类上调用，不能用类的实例来调用。

### 数组去重

1. 用 ES6 的 set 
    
    ```tsx
    let arr = [1,2,3,4,5,6,7,8,9,10,1,2,4,5,6,7]
    
    function uniqueArr(array){
    	return Array.from(new set(array))
    }
    
    console.log(uniqueArr(arr))
    ```
    

## Vue

### Vue 和 React 的区别

Vue 和 React 都是前端很流行的框架。

相同点：

- 都是基于组件的开发模式
- 组件的生命周期都比较类似
- 都是基于虚拟 DOM 来，虚拟 DOM 对跨平台很友好
- 都是基于数据驱动的开发模式，我们只需要去关注数据就行了

不同点：

- react 在 16 之后，开始倾向于 hooks 函数式组件。

### Vue2.0 和 Vue3.0 的区别

- Vue2 基于 options API，像配置属性一样来配置一个组件。Vue3 用的是 composition API，支持函数式编程。
    
    比如我们想声明一个数据，然后对数据进行改写。在 2 里面需要用 data 和 methods 这两个选项来做，在 3 里就可以在一个 setup 函数里搞定，我们用 ref 函数式地来创建这个数据，然后直接在 setup 里写该写数据的方法，然后将方法和数据都 return 出来就可以用了。这样就避免了 2 里面数据和数据处理东一块西一块的做法。
    
- Vue2 的虚拟 DOM 是直接根据节点的数量来进行比对。Vue3 的虚拟 DOM 会根据模版里动态的数据来动态比对。
- Vue2 的模版里面只能有一个根节点。Vue3 的模版里面支持多个根节点。

### Vue2 是如何实现双向绑定的

Vue 的双向绑定一般是通过 `v-model` / `.sync` 来实现的，我以 v-model 为例来讲一下。

`v-model` 实际上是两个单向绑定的语法糖。

- `v-bind:value` ，绑定 value ，实现了 data ⇒ UI 的单向绑定。
    
    `v-bind:value` 是通过 `Object.defineProperty` API（属性拦截器）给 data 的每一个属性递归地创建 `getter` 和 `setter` ，用于监听 data 的改变，然后 data 一改变，Vue 就去改动 UI 。
    
- `v-on:input` ，监听 input 事件，实现了 UI ⇒ data 的单向绑定。
    
    `v-on:input` 是通过 `template compiler`（模版编译器）来给 DOM 添加监听事件，DOM input 的值改变了就会去对应修改 data 。
    

[通过Object.defineProperty数据拦截对比，体验一下proxy有多优秀 - 掘金](https://juejin.cn/post/6907028003469918222)

### 组件间通信的方式

1. 父子组件
    - `$emit(”xxx”, data)` 和 `$on(”xxx”, function(){})`
    - 使用 props
2. 爷孙组件
    - 使用两次父子组件通信的方法
    - 使用 provide 和 inject
    - `$parent` 和 `$children`
3. 任意组件
    - 使用 VueX（Pinia）
    - 使用 eventBus，`let eventBus = new vue()`
        主要 API 是 `eventBus.$on` 和 `eventBus.$emit`
        缺点是事件多了、项目庞大编码人员多，会很混乱。
    - `$ref`

### watch 和 computed 的区别

1. watch 是监听数据；computed 是计算值；
2. computed 是有缓存的。值不变化的情况下，页面重新渲染，计算属性会返回之前的计算结果，而不必再次执行函数。
3. watch 是没有缓存的；值不变的情况下， 页面重新渲染，也会再次执行函数。
    


### Vue 有哪些生命周期函数，分别有什么用

1. beforeCreate 和 created
    - beforeCreate：Vue 实例已经初始化了；只初始化一些事件；data 数据没有初始化，无法访问。
    - created：数据侦听、计算属性、方法、事件/侦听器的回调函数都已经可以访问了。data 数据已经初始化，可以访问，但此时的 dom 没有挂载，
        
        在这里一般进行「请求服务器数据」等操作。
        
2. beforeMount 和 mounted
    - beforeMount：dom 挂载，但是 dom 中存在类似 的占位符，并没有替换。
    - mounted：此时组件渲染完毕，占位符也都被替换。
3. beforeUpdate 和 updated
    - 组件触发更新时，会立刻先调用 beforeUpdate
    - 等到重新渲染完之后调用 updated 钩子
4. beforeDestroy 和 destroyed
    
    组件在销毁前会调用 beforeDestroy 钩子，可以在这里进行一些定时器或者销毁操作。destroyed 钩子函数会在 Vue 实例销毁后调用。
    
5. activated 和 deactivated
    
    如果组件被 keep-alive 包裹，第一次渲染会在 mounted 钩子后面调用 activated 钩子，离开的时候不会调用 beforeDestroy 和 destroyed 钩子，而是调用 deactivated 钩子，等到再切换回来的时候，activated 钩子会调用（不会再走 mounted 钩子）。
    
6. errorCaptured
    
    用于捕获子组件中抛出的错误，注意只有 errorCaptured 返回 false 则可以阻止错误继续向上传播（本质上是说“这个错误已经被搞定了且应该被忽略”）。
    

### MVVM 框架是什么

MVVM 即 Model-View-ViewModel。

- Model：数据模型，负责业务逻辑和数据封装；
- View：视图，负责界面的显示；
- ViewModel：监听模型数据和控制视图；

ViewModel 监听模型数据的改变和控制视图行为，处理用户交互，简单来说就是通过双向数据绑定把 View 层和 Model 层连接起来。在 MVVM 架构下，View 和 Model 没有直接联系，而是通过ViewModel 进行交互，我们只关注业务逻辑，不需要手动操作 DOM ，不需要关注 View 和 Model 的同步工作。

### 对 Vue Router 的理解

Vue Router 是 Vue 用来写路由的一个插件。

主要有两个重要的组件：`<router-link>` 和 `<router-view>`

- `<router-link>` 和 `a` 标签类似，有一个属性 `to` 会指向目标地址。
- `<router-view>` 负责渲染路径匹配到的视图组件。

有两种模式：hash 和 history

- 默认是 hash 模式，history 需要设置 `mode: “history”` 。
- hash 模式下的 URL 里永远带着 # 号，比较丑。history 模式下没有 # 号，就是正常的 URL。
- history 模式是基于 HTML5 的 `pushState()` `replaceState()` API 来实现的。没有 `#` 号，美观。
    
    [Vue Router history模式的配置方法及其原理 - 掘金](https://juejin.cn/post/6844903856359342087)
    
    静态服务器（这里是nginx）会默认去目标目录（这里为 `location` 中 `root` 所指定的目录）下寻找 `index.html`（这是nginx在端口后没有额外路径时的默认行为）
    
    但在子路由下手动刷新会出现 404 。这个可以在后端配置，比如 nginx 中可以配置 `try_files: $uri $uri/ index.html` 。
    

在 JS 里，需要先初始化一个 router。

这个初始化的 router 里，需要有

- 路由表
- history 对象

功能上：比如我们在开发app的时候有分享页面，那么这个分享出去的页面就是用vue或是react做的，咱们把这个页面分享到第三方的app里，有的 app 里面 url 是不允许带有 # 号的，所以要将#号去除那么就要使用history模式，但是使用history模式还有一个问题就是，在访问二级页面的时候，做刷新操作，会出现404错误，那么就需要和后端人配合，让他配置一下apache或是nginx的url重定向，重定向到你的首页路由上就ok了

### `$router` 和 `$route` 的区别

1. `$router` 是一个全局的实例对象，里面包含了所有路由的信息。
    
    `this.$router.push(”/xxx”)` 常用于页面中跳转到别的页面。
    
2. `$route` 是一个局部的路由对象，里面包含了当前路由的信息。 
    
    如果从 A 页面用 `this.$router.push({path: “/B”, query: {hello: "world"}})` 跳转到了 B 页面，那我们可以在 B 页面用 `this.$route.query` 拿到从 A 页面传过来的 `query`。
    

**声明式跳转和编程式跳转**：

- `<router-link to=”xxx”></router-link>` 是声明式跳转。
- `this.$router.push(”/xxx”)` 这种是编程式跳转。
- 这两种效果基本是相同的，但后者会向 `window.history` 中添加一条记录。

### Vue Router 懒加载

路由懒加载就是，当路由被访问的时候才加载对应组件。

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。

能把不同路由对应的组件分割成不同的代码块，然后只在我们访问路由的时候，路由对应的组件的 JavaScript 包才加载。

以下是两种懒加载的写法：

```jsx
component: () => import('../pages/home.vue')
```

```jsx
component: resolve => require(['../pages/home.vue'], resolve)
```

路由组件的懒加载是结合 Vue 的 **[异步组件 (opens new window)](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)** 和 Webpack 的 **[代码分割功能 (opens new window)](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)** 来实现的。

### Vuex 是什么

Vuex 是 Vue 的全局状态管理。在遇到多个组件要共享状态时，就需要用 Vuex 。

[State | Vuex](https://vuex.vuejs.org/zh/guide/state.html)

[VueX（Vue状态管理模式)](https://www.jianshu.com/p/2e5973fe1223)

1. **state**
    
    将 store/index.js 文件在 main.js 中导入后，就可以在组件中用  `this.$store.state` 轻松访问了
    
2. **mutation**
    
    提交 mutation 是 vuex 里唯一可以修改状态的方法。
    
    mutation 必须同步执行，不能有异步操作。
    
    在组件中用 `$store.commit` 来调用 mutation 里的方法。
    
3. **actions**
    
    由于 mutation 必须同步执行，所以就有了 actions 来专门进行一步操作。action 最终提交的也是 mutation 。
    
    action 接受两个参数 context（上下文对象，类似于 this）和 payload（挂载参数）
    
    ```jsx
    actions:{
        aEdit(context,payload){
    				// 有 setTimeout 这个异步操作，所以需要使用 action
            setTimeout(()=>{
    						// 最终提交的还是 mutation
                context.commit('edit',payload)
            },2000)
        }
    }
    ```
    
    ```jsx
    this.$store.dispatch('aEdit',{age:15})
    ```
    
4. **getter**
    
    用于将 state 中的状态加工后传递给外界
    
    接受两个参数：state（vueX 中的状态）和 getters（可以将 getter 下的其他 getter 拿来用）
    
    ```jsx
    getters:{
        nameInfo(state){
            return "姓名:"+state.name
        },
        fullInfo(state,getters){
            return getters.nameInfo+'年龄:'+state.age
        }
    }
    ```
    
5. **module**
    
    当 vuex 里状态太多时，vuex 也支持我们分模块。每个模块里都有单独的 state 、mutation 、getter 、action ，甚至是子模块。
    

### mixin（混入）是什么

## HTTP

### GET 和 POST 的区别

`GET` 和 `POST` 是 HTTP 与服务器交互的方式。

`GET` 的意思是获取，`POST` 的意思是更新。

1. 大小方面
    - `GET` 请求通过 `URL` 传参给浏览器，每个浏览器对 `URL` 的长度都各有限制。所以 `GET` 请求传递给服务器的内容存在大小限制。如果 `URL` 超出了长度限制，浏览器会把超出部分截取。
    - `POST` 方法理论上没有限制，具体取决于服务器的配置和内存的大小。
2. 安全性
    - `GET` 相对于 `POST` 更不安全，因为参数直接暴露在 `URL` 里。
3. 是否改变服务器状态
    - `GET` 不改变服务器的装填
    - `POST` 改变服务器的状态
4. 缓存问题
    
    `GET` 方法会出现缓存，`POST` 则不会。
    
    ```jsx
    xhr.open('GET', '/getList?num=12&_='+Math.random())
    ```
    
5. 幂等和不幂等问题
    
    幂等，是指同一个请求方法，被执行多次和仅被执行一次的效果完全相同。
    
    - `GET` 是安全、幂等的。
    - `POST` 则是不安全、不幂等的。
    
    举例来看，在微博中，`GET` 会被用于「查看 TimeLine 上最新 20 条微博」这样的场景；而 `POST` 会被用于「发微博、评论、点赞」这样的场景中。
    
    |  | 改变服务器状态 | 不改变服务器状态 |
    | --- | --- | --- |
    | 幂等 | PUT | GET |
    | 不幂等 | POST | 无 |

> 如此，我们就可以把页面拆分成很多小块，然后精准引入。
> 

## Webpack

### 用过哪些常用的 loader 和 plugin

**loader**

1. HTML：
2. CSS：scss-loader、less-loader
3. JS：babel-loader、eslint-loader
4. 图片：image-loader

**plugin**

1. HTML：html-webpack-plugin、
2. CSS：
3. JS：
4. 图片：

### loader 和 plugin 的区别

- loader 是转换器，plugin 是插件。
- loader 是用来将 A 文件编译成 B 文件的，比如 `A.scss` 编译成 `A.css`；
- plugin 是用来添加功能的，直接作用于 webpack 拓展其功能，而不对文件做操作。

### webpack 如何按需加载代码

## 版本管理

### Git 和 SVN 的区别

### `git rebase` 是什么

## 计算机基础

### 说一下进程与线程

## 数据结构

### 栈和队列的区别

### 二叉树的定义是什么

### 没有根节点的也算是二叉树吗

### 满二叉树和完全二叉树的区别

## 算法

### 你熟悉的算法有哪些？

排序算法

1. 快速排序
2. 冒泡排序
3. 归并排序

### 数据库新用户标识

服务器数据库那边需要存下这个用户曾经点过了的标记。

## 前端相关

### 前端性能优化——必考

参考链接：

- [方方关于前端性能优化的知乎回答](https://www.zhihu.com/question/302416939/answer/531584294)
- [谷歌前端性能优化](https://zhuanlan.zhihu.com/p/67134654)

为什么要问这个问题：

- 前端优化 1kb ，在用户量在千万级别的系统里面就有巨大的作用。
- 对面试者对框架等技术掌握水平的全面考察。

优化的思路：

性能优化是产品的整体问题，一定要从整体出发来思考。

有些时候，客户端发现的问题可能需要服务端来解决。有的时候，服务端的问题也可能通过通信可以解决。

从上图可以看出，我们优化主要从以下两个角度出发：

1. 如何让通信更快速
2. 如何让数据处理更高效

### 前端工程化

工程化就是减少了前端很多重复性的劳动。

只要能解决前端开发中一些痛点，都能称得上是工程化的工具。

目前前端工程化很大程度上要归功于 nodejs 。

- 原生 js 只能在浏览器环境里运行，如果想要拿操作系统或者文件就需要浏览器暴露给它。有了 nodejs 之后，就可以访问文件、网络等

- npm 进行包的管理，但在以前我们要用外部的 js/css 就需要 cdn 引入或者下载到本地。