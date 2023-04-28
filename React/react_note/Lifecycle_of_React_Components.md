# React 组件的生命周期

![](assets/生命周期.png)

总结起来，生命周期有三个过程「挂载」「更新」「卸载」。「挂载」和「卸载」只会执行一次，「更新」会执行多次。

[React Lifecycle Methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 1、初始化

在组件初始化阶段会执行

1. `constructor`
2. `static getDerivedStateFromProps()`
3. `UNSAFE_componentWillMount()` 废弃
4. `render()`
5. `componentDidMount()` 🔺

## 2、更新阶段

`props` 或 `state` 的改变可能会引起组件的更新，组件重新渲染的过程中会调用以下方法：

1. `UNSAFE_componentWillReceiveProps()` 废弃
2. `static getDerivedStateFromProps()`
3. `shouldComponentUpdate()` 🔺
4. `UNSAFE_componentWillUpdate()` 废弃
5. `render()`
6. `getSnapshotBeforeUpdate()`
7. `componentDidUpdate()`

## 3、卸载阶段

1. `componentWillUnmount()`

## 4、错误处理

1. `componentDidCatch()`

## 具体函数讲解

### `constructor() {}` 函数

只要使用了`constructor` 就必须写 `super()` ，否则会导致 `this` 指向错误。

[React.Component - React 中文文档 v16.6.3](https://react.html.cn/docs/react-component.html#constructor)

`constructor` 函数也是一个生命周期函数，并且其有一下几个特点：

1. 只要组件被实例化，那它一定会被执行
2. 而且是最先执行
3. 但它只会执行一次

在 `constructor` 函数里，一般我们会

1. 初始化一些状态
    
    ```jsx
    this.state = {
    	x: ''
    }
    ```
    
2. 定义一些事件
    
    ```jsx
    this.handleChange = this.handleChange.bind(this)
    ```
    
3. 给 `this` 绑定其他静态属性

```jsx
import React, {Component} from 'react'

class App extends Component {
	// 这里的 props 也完全可以结构成 {a, b}
	// 这个 a b 属性一定是在父组件里定义的两个属性
	constructor({a, b}){
		this.state = {
			x: ''
		}
		
	}
	
	render(){
		return (
			<div></div>
		)
	}	
}

export default App
```

### `UNSAFE_componentWillMount() {}` 钩子

由于很少用，也即将被废弃。

该钩子可以帮助我们在组件渲染之前，做一些事情。

比如，可以更新 state 或修改其他静态属性。

### `componentDidMount() {}` 钩子🔺

很有用，该钩子可以在组件渲染完毕之后，做一些事情。比如，

- 更新 `state`
- 做 AJAX 请求
- 初始化第三方的 dom 库，也在这里进行初始化。只有到这里才能获取到真实的dom。

如果父组件和子组件里面都有 `componentDidMount(){}` 钩子，那会先执行子组件里的 `componentDidMount(){}` ，再执行父组件里的 `componentDidMount(){}` 。因为子组件挂载到了父组件之后，也是父组件的一部分，那自然只有子组件渲染好了，父组件才能渲染好。

### `UNSAFE_componentWillReceiveProps(nextProps, nextContext) {}` 钩子

当子组件挂载到父组件后，子组件接收到新的 props 后，该钩子会被调用。如果父组件会让这个组件重新渲染，即使 props 没有改变，该方法也会被调用。

如果需要更新 state 来响应 props 的更改，则可以进行 `this.props` 和 `nextProps` 的比较，并在此方法中使用 `this.setState()` 。

React 不会在组件初始化 props 时调用这个方法。调用 `this.setState` 也不会触发。

尽管很好用，但由于有性能问题和安全隐患，所以即将被废弃。

官方建议使用 `**getDerivedStateFromProps**` 函数代替 `componentWillReceiveProps` 。

使用该钩子的好处是，在父组件传过来的某个属性发生变化时，可以拿到新的值。相当于 watch，用于监听 props 的变化，然后做出相应的处理。

> 父组件的 render 被调用，子组件的 render 也一定会被调用。

验证见以下代码：

```jsx
import React, {Component} from 'react';
import Child from "./Child";

class App extends Component {
    // initialization
    constructor(props) {
        super(props);
        this.state = {
            x: "1"
        }
    }

    render() {
        console.log("render"); // 会被打印两次
        return (
            <div>
                <Child title="hello"></Child>
            </div>
        );
    }

    componentDidMount() {
        // 这里会再调用一次 render
        this.setState({
            x: "4"
        })
    }
}

export default App;
```

```jsx
import React, {Component} from 'react';

class Child extends Component {

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log("UNSAFE_componentWillReceiveProps");
        console.log(nextProps);
    }

    render() {
        console.log("child render");// 打印两次
        return (
            <div>
                child
            </div>
        );
    }
}

export default Child;
```

### `shouldComponentUpdate(nextProps, nextState, nextContext){}` 钩子

由右图我们可以知道，`render` 函数在 `shouldComponentUpdate` 函数之后执行，并且 `shouldComponentUpdate` 函数返回 `true`/`false` 可以控制 `render` 是否执行。

在「父组件的 props 发生变化」和「组件自身的 state 发生变化」这两种情况下，都可以调用 `shouldComponentUpdate` 钩子。

我们可以在里面写一些业务逻辑来控制在什么情况下，往下执行；什么情况下，不往下执行。

```jsx
shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 当 this.props.title === nextProps.title 的结果为 false 时，才继续往下执行
        return !(this.props.title === nextProps.title)
    }
```

![](assets/shouldComponentUpdate.png)

React 也提供了 `PureComponent` 来简化上面的代码。

`PureComponent` 提供了一个最简单的过滤，即如果现在的 `props` 和原本的 `props` 有变化，才往下执行，否则就不往下执行。

```jsx
import React, {Component, PureComponent} from 'react';

class Child extends PureComponent {

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log("UNSAFE_componentWillReceiveProps");
        console.log(nextProps);
    }

    render() {
        return (
            <div>
                child
            </div>
        );
    }
}

export default Child;
```

[Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil?hl=zh-CN)

react developer tools

> `shouldComponentUpdate` 就是来做性能优化的，是否再次渲染可以由我们自己控制。

### `UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {}` 钩子

这个钩子很少用。现在该钩子已经被废弃。

### `componentDidUpdate(prevProps, prevState, snapshot) {}` 钩子

组件更新完成时触发的函数。每次重新渲染后都会进入这个生命周期。

在这里可以拿到更新前的 props 和 state，即 prevProps 和 prevState 。

### `componentWillUnmount() {}` 钩子

组件将要销毁时触发的函数。

```jsx
setTimeout(() => {
    // unmountComponentAtNode 方法可以卸载页面上某个 node 节点。
    // 用该方法是真的就删除了，无残留。
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
}, 5000)
```

### `static getDerivedStateFromProps(nextProps, prevState) {}` 钩子

- [老师关于该钩子的笔记](https://www.notion.so/1-205024c617c14658a9dadc3258687f04)
- [React.Component - React 中文文档 v16.6.3](https://react.html.cn/docs/react-component.html#static-getderivedstatefromprops)

认真读这个钩子的官方文档

`getDerivedStateFromProps` 在调用 render 方法之前被调用，包括初始装载（mount）和后续更新时。 它应该返回一个更新 state(状态) 的对象，或者返回 null 以不更新任何 state(状态)。


> 注意，React 16.3 的版本中 `getDerivedStateFromProps` 的触发范围是和 16.4^ 是不同的，主要区别是在 `setState` 和 `forceUpdate` 时会不会触发，具体可以看这个[生命全周期图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) 。

可能的使用场景有两个：

- 无条件的根据 prop 来更新内部 state。    
    也就是只要有传入 prop 值， 就更新 state。
    
- 只有 prop 值和 state 值不同时，才更新 state 值。

代替 `componentWillReceiveProps` 监听父组件。详细见一下代码：

```jsx
import React, {Component} from 'react';
import Child from "./Child";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: "1",
            color1: ""
        }
    }

    render() {
        return (
            <div>
                <Child title={this.state.x} color2={this.state.color1}></Child>
            </div>
        );
    }

    componentDidMount() {
        // 这里会再调用一次 render
        this.setState({
            x: "4",
            color1: "yellow"
        })
    }
}

export default App;
```

```jsx
import React, {PureComponent} from 'react';

class Child extends PureComponent {
    state = {
        color3: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color2 === prevState.color3) {
            // 没有更新的必要的时候，返回 null
            return null
        } else {
            // 这个 return 的对象会自动和 state 做浅复制
            console.log("getDerivedStateFromProps")
            return {
                color3: nextProps.color2
            }
        }
    }

    render() {
        return (
            <div>
                颜色是 {this.state.color3} {/*yellow*/}
            </div>
        );
    }
}

export default Child;
```

而且 `getDerivedStateFromProps` 比 `componentWillReceiveProps` 更敏感。

1. 在父组件改变了 props 传值时会被触发
2. 在组件初始化装载完成后也会被触发
3. 在自己组件改了自己的状态后也会触发
4. `contructor` 也会触发一次

解决 `getDerivedStateFromProps` bug 的方法之一（见以下代码）：

```jsx
import React, {Component} from 'react';
import Child from "./Child";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            color1: "green"
        }
    }

    render() {
        return (
            <div>
                <Child title={this.state.x} color2={this.state.color1}></Child>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                x: new Date().getTime(),
                color1: "yellow"
            })
        }, 2000)
    }
}

export default App;
```

> 尽量不要用这个钩子。除非你是知道你在用这钩子干嘛，否则不要用。

> React 框架是不会给你干一些细活的，它只专注于让其更高效。Vue 则会给你干很多细活，尽量都给你解决，但这也导致了 Vue 不够灵活。
> 
> React 没有计算属性、没有 mixin 混入，也没有 slot 插槽。它都认为没有必要，可能会有问题，只给你一个钩子，具体实现要你自己去干。


```jsx
import React, {PureComponent} from 'react';

class Child extends PureComponent {
    state = {
        color3: "",
        // prevColor3 是我们定义的一个多余的 state
        // 专门用来保存从父组件传过来的 color2
        prevColor3: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.color2, prevState.prevColor3);
        if (nextProps.color2 === prevState.prevColor3) {
            // 没有更新的必要的时候，返回 null
            return null
        } else {
            // 这个 return 的对象会自动和 state 做浅复制
            return {
                color3: nextProps.color2,
                prevColor3: nextProps.color2
            }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color3: "blue"
            })
        }, 3000)
    }

    render() {
        return (
            <div>
                颜色是 {this.state.color3}
            </div>
        );
    }
}

export default Child;
```

### `getSnapshotBeforeUpdate() {}` 钩子

该方法名直译过来就是，在更新前拿到一个快照。

[React.Component - React 中文文档 v16.6.3](https://react.html.cn/docs/react-component.html#getsnapshotbeforeupdate)

`getSnapshotBeforeUpdate` 钩子出现的话，那 `componentDidUpdate` 钩子也必须出现，否则会挂掉。