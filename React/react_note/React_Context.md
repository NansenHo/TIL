# React Context 上下文对象

> React 本身是没有状态管理工具的，所以其提供了一个第三方的 api context。Vue 有一个 Vuex。

读状态：

```jsx
import React, {Component, PureComponent} from 'react';
import {Provider, Consumer, meContext} from "./meContext";

// 类组件除了 **Provider** 这种写法，其实还可以用 Consumer 写法
class ChildA extends PureComponent {
	// 将 testContext 实例对象赋值给静态属性 contextType
	// 这个静态属性的名字 contextType 不能随意更改
    static contextType = meContext

    render() {
        // 设置了 contextType 之后 ChildA 组件在运行时候就会获得一个 this
        return (
            <div>{this.context.a}</div>
        )
    }
}

class ChildB extends PureComponent {
    static contextType = meContext

    render() {
        return (
            <div>
                {this.context.b}
            </div>
        )
    }
}

// 函数式组件只有 **Consumer** 这一种写法
const ChildC = function () {
    return (
        <div>
            <Consumer>
                {
                    // 这里这个 value 其实是一个对象
                    (value) => {
                        return <div>
                            {value.c}
                        </div>
                    }
                }
            </Consumer>
        </div>
    )
}

const ChildD = function () {
    return (
        <div>
            do you merry me?
            <ChildC></ChildC>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <Provider value={{
                a: "summer",
                b: "i love you",
                c: "YES!"
            }}>
                hello
                <ChildA></ChildA>
                <ChildB></ChildB>
                <ChildD></ChildD>
            </Provider>
        );
    }
}

export default App;
```

```jsx
import {createContext} from 'react'

const meContext = createContext(undefined)
const {Provider, Consumer} = meContext

export {
    meContext,
    Provider,
    Consumer
}
```

如何给解构出来的东西取一个别名

```jsx
// import 来解构的情况下
import {Consumer as CountConsumer} from './testContext'

// const 来解构的情况下
const {
    Provider,
    // 给解构出来的 Consumer 起一个别名
    Consumer: CountConsumer
} = createContext
```

更新状态：

```jsx
// 我们通过 Count_Context 类来对 state/方法 进行管理
// 而 Count_Context 的 state/方法 可以给所有组件用
// 但却都在 Count_Context 组件内进行统一管理
// 如此，Count_Context 组件就可以做到公共状态管理
import {Component, createContext} from "react";

const {
    Provider,
    Consumer
} = createContext(undefined)

class Count_Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(args) {
        this.setState(state => {
                return {
                    count: state.count + args
                }
            }
        )
    }

    decrement(args) {
        this.setState(state => {
            return {
                count: state.count - args
            }
        })
    }

    render() {
        // console.log(this.props);
        return (
            <Provider value={{
                count: this.state.count,
                increment: this.increment,
                decrement: this.decrement
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    Count_Context,
    Provider,
    Consumer
}
```

```jsx
import React, {Component} from 'react';

import {Consumer} from './Count_Context'
import {Consumer as GameNameConsumer} from './GameName_Context'

class ShowForCount extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        ({count, increment, decrement}) => {
                            return (
                                <>
                                    <div>{count}</div>
                                    <div>
                                        <button onClick={() => {
                                            increment(1)
                                        }}>+1
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            decrement(1)
                                        }}>-1
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    }
                </Consumer>
                <GameNameConsumer>
                    {
                        ({gameName}) => {
                            return (
                                <>
                                    <div>{gameName}</div>
                                </>
                            )
                        }
                    }
                </GameNameConsumer>
            </div>
        );
    }
}

export default ShowForCount;
```

```jsx
import {createContext} from "react";

const GameName_Context = createContext({
    gameName: '+1-1小游戏'
})

const {
    Consumer
} = GameName_Context

export {
    Consumer,
    GameName_Context
}
```

```jsx
import React, {Component} from 'react';

import ShowForCount from './ShowForCount'
import {Count_Context} from "./Count_Context";

class App extends Component {
    render() {
        return (
            // 把 Count_Context 挂载到根组件
            // 这样根组件里的所有子组件，也都有 Count_Context 组件里的 Provider 的那些属性了
            // 而这些属性我们都通过 Count_Context 组件直接统一管理
            <Count_Context>
                {/* 要把 ShowForCount 组件插入到 Count_Context 组件中去 */}
                {/* 我们还需要在 Count_Context 中访问 {this.props.children} */}
                <ShowForCount></ShowForCount>
            </Count_Context>
        );
    }
}

export default App;
```