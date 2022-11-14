# React 事件处理

- [React 事件处理](#react-事件处理)
  - [事件 handler 写法](#事件-handler-写法)
  - [最基本的绑定事件](#最基本的绑定事件)
  - [`.bind(this)`](#bindthis)
  - [传参](#传参)

JavaScript 是事件驱动的，我们可以通过事件来执行一个预先绑定好的回调函数，从而实现一个异步操作。

## 事件 handler 写法

1. （**推荐**）在组件内，使用箭头函数定义一个方法
2. （**推荐**）直接在组件内定义一个非箭头函数的方法，然后在 `constructor` 里 `.bind(this)`
3. （不推荐）直接在 `render` 里写箭头函数。
4. （不推荐）直接在组件内定义一个非箭头函数的方法，然后在 `render` 里直接使用 `onClick={this.handleClick.bind(this)}`

## 最基本的绑定事件

```jsx
import React, {Component} from 'react';

class App extends Component {
    handleClick(){
        console.log('click');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default App;
```

## `.bind(this)`

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // 把 .bind(this) 写在 constructor 里, 就只会 bind 一次,提升了性能
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // ES6 规定类里面的函数是无法访问 this 的
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                {/*如果把 .bind(this) 写在这里,就会在我们每次点击的时候都 bind 一次*/}
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default App;
```

## 传参

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(args) {
        console.log(args); // xxx
    }

    render() {
        return (
            <div>
                {/* 要传参的话，这里要写一个箭头函数 */}
                <button onClick={()=>{this.handleClick('xxx')}}>click</button>
            </div>
        );
    }
}

export default App;
```

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // 事件柯里化
    // 既可以传参数，还能拿到 event
    handleClick = (args) => {
        return (event) => {
            console.log(event.target);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick('xxx')}>click</button>
            </div>
        );
    }
}

export default App;
```