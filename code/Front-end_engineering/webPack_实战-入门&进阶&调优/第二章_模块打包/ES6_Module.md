# ES6 Module

一直到 2015 年 6 月，由 TC39 标准委员会正式发布了 ES6（ECMAScript 6.0），自此 JavaScript 语言才具备了模块这一特性。

ES6 Module也是将每个文件作为一个模块，每个模块拥有自身的作用域，导入导出关键字是 `import` 和 `export` （都是保留关键字）。

> ES6 Module 会自动采用严格模式。

## 两种导出方式

1. 命名导出
2. 默认导出

### 命名导出

```js
// 1. 导出和命名写在同一行
export const name = 'xxx'

// 2. 命好名之后再导出
const name = 'xxx'
export {name}

// 3. 可以用 as 对变量进行重命名
//    在导入时，就是 get
const add = function () {console.log('1')}
export {add as get}
```

### 默认导出

可以将默认导出理解为，向外导出了一个名为 default 的变量，所以不需要进行变量声明，直接导出值即可。

```js
export default {
  name: 'nansen',
  age: 24
}
```

## 导入

```js
// 与导出相似，导入也可以使用 as 对变量进行重命名
import {name, get as getNum} from './xxx.js' 

// 也可以采用整体导入
import * from './xxx.js'

// import * as xxx 可以将所有导入的变量都作为属性值，添加到 xxx 对象中，从而减少对当前作用域的影响
import * as obj from './xxx.js'

// 默认导出和命名导出混合的例子
// 这里 React 必须在 {} 前面，否则会报错
import React, { Component } from 'react'
```

## 复合写法

有时需要把某一模块导入后立即导出，比如专门用来集合所有页面或组件的入口文件。

```js
export { name, add } from './xxx.js'
```

默认导出没有复合模式，只能将导入导出拆开来写。