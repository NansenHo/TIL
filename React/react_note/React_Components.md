- [React 的组件](#react-的组件)
  - [Function Components](#function-components)
  - [Class Components](#class-components)
  - [When to use Class Component and Function Component?](#when-to-use-class-component-and-function-component)
  - [Fragment](#fragment)

# React 的组件

  - [Function Components](#function-components)
  - [Class Components](#class-components)
  - [**When to use Class Component and Function Component?**](#when-to-use-class-component-and-function-component)
  - [Fragment](#fragment)

## Function Components

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  console.log(props) // !!!
	return (
		<div>hello world {props}</div>
	)
}
// props 取得传入的参数。
// 用 return 把 JSX 代码返回。
// 在 JSX 中，我们用 {} 来显示变量，不同于 Vue 的 {{}}。

ReactDOM.render(
	App('!!!')
	document.querySelector('#root')
)
```

在 React 里面，不管是 HTML 元素，还是 React 组件 都可以写在 JSX 代码里。

二者可以从命名进行区分，

1. HTML 元素：首字母小写的驼峰命名法（Camel-Case）
2. React 组件：首字母大写的驼峰命名法（Pascal-Case）

<aside>
💡 React 就是原生 JS ，原生 JS 不允许的 React 也不允许。

React 比 Vue 更加灵活、有更多的操作空间，但 Vue 更加简单方便。大厂可能有更多需要精细调整的地方，所以 React 被更多的大厂所采用。

</aside>

下面这种写法更符合 React 的 JSX 风格：

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const Appp = (props) => {
  console.log(props); // {title: "!!!"}
	// 函数式组件自动将 title 当成是一个 props 传下来了
	let { title } = props
  return <div>hello world {title}</div>
}

ReactDOM.render(
  <Appp title='!!!'></Appp>,
  document.querySelector('#root')
)
```

也可以用 `const app = function (props) { return (...) }` 来创建函数式组件。

## Class Components

```jsx
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Appp extends React.Component {
    render(){ // 这里没有 props
        return (
            <div>hello world {this.props.title}</div>
        )
    }
} 

ReactDOM.render(
    <Appp title="!!!"></Appp>, // Appp 类的实例化
    document.querySelector('#root')
)
```

```jsx
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Appp extends React.Component {
    render(props) {
        return (
            <div>hello world {props}</div>
        )
    }
}

const appp = new Appp() // Appp 类的实例化

ReactDOM.render(
    appp.render("!!!"), // 把 !!! 作为 props 给传进去
    document.querySelector('#root')
)
```

函数式组件也被称为无状态组件。

不会像类组件一样，要有 render 和继承，也就不会占用那么多内存空间，性能更好。

## When to use Class Component and Function Component?

Always use function components.

[When to use Class Component and Function Component??](https://dev.to/phanimurari/where-to-use-class-component-and-functional-component-1ed5)

[Is There Any Reason to Still Use React Class Components?](https://medium.com/geekculture/is-there-any-reason-to-still-use-react-class-components-9b6a1e6aa9ef)

## Fragment

`Fragment` 是代码片段，相当于 Vue 里面的 `template` 。

但 React 把 `<Fragment></Fragment>` 简化成了 `<></>` ，也不需要 `import Fragment` 。

```jsx
import React, { Fragment } from "react";

class Header extends React.Component {
    render() {
        return (
            <div>header</div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>content</div>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <Content></Content>
            </Fragment> // 要有一个可以挂载的根节点
        )
    }
}
```

```jsx
import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>header</div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>content</div>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <Content></Content>
            </> // 要有一个可以挂载的根节点
        )
    }
}
```