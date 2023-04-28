# React Portal

如果我们要做一个 dialog 对话弹出窗口，那一般要为除了 dialog 之外的部分铺上一层 mask 蒙版。

我们所有的东西都是写在 `<div id="root"></div>` 这个根节点下面的。

如果这个 dialog 既是单独一个组件，又得能渲染到跟 `<div id="root"></div>` 根节点平级的一个节点上的话，处理起来就简单了。

但要实现这个前提条件却很不简单。

> 一般来说， 有了 Vue 和 React 就不用 jQuery 了。但在 React 和 Vue 里面使用 jQuery 也是可以的。最好 React / Vue 渲染的节点和 jQuery 渲染的节点不要混淆在一起。

而 Portal 提供了一种将子节点渲染到 `<div id="root"></div>` 这个根节点之外的 DOM 节点的优秀的方案。

```jsx
ReactDOM.createPortal(child, container); // 前一个参数是要渲染的子项，后一个参数是前者要渲染到哪个 DOM 节点上去
```

[传送门：React Portal](https://zhuanlan.zhihu.com/p/29880992)

[Portals - React](https://zh-hans.reactjs.org/docs/portals.html)

用法举例：

```jsx
render() {
  // React 挂载一个div节点，并将子元素渲染在节点中
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

```jsx
render(){
    // 此时React不再创建div节点，而是将子元素渲染到Dom节点上。domNode，是一个有效的任意位置的dom节点。
    return ReactDOM.createPortal(
        this.props.children,
        domNode // 伪代码
    )
}

```

> `withPortal.js` 这样以 `with` 开头来命名文件，表明是对组件的增强，`with` 后面写上增强了什么功能。

下面是一个使用了 Portal 的蒙版例子

```jsx
import React, {Component} from 'react';

import Modal from "./Modal";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(0)
    }

    render() {
        return (
            // 我们点击 hello / Modal ，在冒泡阶段，触发 onClick 事件
            <div onClick={this.handleClick}>
                {/* hello 是被蒙版盖在下面的 */}
                <div>被蒙版盖住的部分</div>
								{/* 在蒙版上面的东西 */}
                <Modal></Modal>
            </div>
        );
    }
}

export default App;
```

```jsx
import React, {Component} from 'react';

import withPortal from './withPortal'
import './style.css'

// 装饰器不仅可以装饰类，还可以装饰函数、函数的参数和属性等
// 不能直接在装饰器的下面将类导出
@withPortal
class Modal extends Component {
    render() {
        return (
            <div className='portal'>
                <h1>Portal header</h1>
                <button>add</button>
            </div>
        );
    }
}

export default Modal;
```

```jsx
import React, {Component} from "react";
import { createPortal } from 'react-dom'

// function getDiv() {
//     let div = document.createElement('div')
//     document.body.appendChild(div)
//     return div
// }

function withPortal(WrappedComp) {
    return class extends Component {
        render() {
            return createPortal(
                 // {... this.props} 让 Comp 之前就已经有的 props 也会保留下来
                <WrappedComp {... this.props}></WrappedComp>,
                document.querySelector('body')
            )
        }
    }
}

export default withPortal
```

```jsx
div.portal {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 0, 0, 0.5);
    z-index: 2;
    }
```