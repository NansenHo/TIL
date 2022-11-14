- [React 组件中的数据挂载方式](#react-组件中的数据挂载方式)
  - [属性 `props`](#属性-props)
    - [设置组件的默认 `props`](#设置组件的默认-props)
    - [用 `props.children` 在子组件中插入元素](#用-propschildren-在子组件中插入元素)
    - [用 `prop-types` 检查 `props`](#用-prop-types-检查-props)
  - [状态（`state`）](#状态state)
    - [定义状态的两种方式](#定义状态的两种方式)
    - [用构造函数来定义状态](#用构造函数来定义状态)
    - [用 `state` 属性来定义状态](#用-state-属性来定义状态)
    - [用 `setState` 更改状态](#用-setstate-更改状态)
      - [`setState` 的异步问题](#setstate-的异步问题)
  - [属性 `props` & 状态 `state`](#属性-props--状态-state)
  - [状态提升](#状态提升)

# React 组件中的数据挂载方式

> 一般情况下，
> 我们把工具函数/模块定义为 `.js` 文件；
> 把 React 的组件定义为 `.jsx` 文件。

## 属性 `props`

`props` 是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置。

属性不能被组件自己更改，你可以通过父组件主动重新渲染的方式来传入新的 `props` 。

```jsx
import React, {Component} from 'react';
import Child from './Child'

class DataMount extends Component {
    render() {
        return (
            <>
                <h1>Data</h1>
                <Child title="parent"></Child>
            </>
        );
    }
}

export default DataMount;
```


> 函数式组件也被称为 **无状态组件**。
> 不会像类组件一样，要有 `render` 、要继承， 也就不会占用那么多内存空间，性能更好。
> 
> 如果你的组件里要包含非常复杂的逻辑，可以使用类组件，但尽量都避免使用类组件。


```jsx
// 用类组件时，才需要引入 Component
import React, { Component } from 'react'; 

// 用类组件：
// class Child extends Component {
//     render() {
//         return (
//             <div>
//                 child {this.props.title}
//             </div>
//         );
//     }
// } 

// 直接用的函数式组件
const Child = (props) => {
    return (
        <div>child {props.title}</div>
    )
} 

export default Child;
```

### 设置组件的默认 `props`

默认组件的意义在于，如果父组件不传东西过来，也有个默认的可以用。

以下是类组件设置 `defaultProps` 的方法：

```jsx
import React, { Component } from 'react';

class Child extends Component {
    // 静态属性
    // 静态属性可以在类里面写，用 static 关键字来标识即可
    // defaultProps 的后面是一个对象，对象里可以随便写东西
    static defaultProps = {
        title: "default value"
    }
    render() {
        return (
            <div>
                child {this.props.title}
            </div>
        );
    }
}

export default Child;
```

```jsx
import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                child {this.props.title}
            </div>
        );
    }
}

// 由于静态属性可以通过类直接调用/赋值，所以也可以直接像下面这样写
Child.defaultProps = {
    title: "default value"
}

export default Child;
```

以下是无状态组件设置 `defaultProps` 的方法：

```jsx
import React from 'react';

// 函数式组件不可以在组件里定义属性，自然也不可以用 static 关键字写静态属性。
const Child = (props) => {
    return (
        <div>child {props.title}</div>
    )
}

// 但是在组件上可以挂载属性，所以我们可以直接将默认属性挂载上去。
// 这个静态属性之后都会被翻译成 ES5 的语法。
Child.defaultProps = {
    title: "default value"
}

export default Child;
```

### 用 `props.children` 在子组件中插入元素

如下面的代码：

```jsx
import React, {Component} from 'react';
import Child from './Child'

class DataMount extends Component {
    render() {
        return (
            <>
                <h1>Data</h1>
                <Child>
                    <div>slot</div> 
										// 该元素无法直接这样插入到 Child 组件中
										// 但会被装载到 props.children 对象上去
                </Child>
            </>
        );
    }
}

export default DataMount;
```

```jsx
import React from 'react';

const Child = (props) => {
    return (
        <>
            <div>child {props.title}</div>
            {props.children}
        </>
        // 我们如此访问 props.children 即可将 <div>slot</div> 插入进来
    )
}

Child.defaultProps = {
    title: "default value"
}

export default Child;
```

如下面的代码：

```jsx
import React, {Component} from 'react';

import ShowForCount from './ShowForCount'
import PageDisplay from "./PageDisplay";
import {Provider, Consumer, Count_Context} from "./Count_Context";

class App extends Component {
    render() {
        return (
            // 把 Count_Context 挂载到跟组件上来
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

如果不在 Count_Context 组件中访问 `{this.props.children}` ，`<ShowForCount></ShowForCount>` 组件就无法放到 Count_Context 组件中。

```jsx
import {Component, createContext} from "react";

const {
    Provider,
    Consumer
} = createContext(undefined)

class Count_Context extends Component {
    constructor(props) {
        ....

    render() {
        console.log(this.props);
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

### 用 `prop-types` 检查 `props`

React 是为了构建大型应用程序而生, 在一个大型应用中，根本不知道别人使用你写的组件时会传入什么样的参数。

而这有可能会造成应用程序运行不了，却不报错。

为了解决这个问题，React 提供了一种机制，让写组件的人可以给组件的 `props` 设定参数检查。

这需要使用一个官方推荐的第三方模块 [prop-types](https://www.npmjs.com/package/prop-types) 来实现。

```bash
yarn add prop-types
```

```jsx
import React from 'react';
import PropTypes from 'prop-types'; // PropTypes 是从 prop-types 里导出的对象的名字
 
class MyComponent extends React.Component {
  render() {
  }
}

// 这个 propTypes 是静态属性的名字，这个静态属性最好就取这个名字
// 这个静态属性也能在类里面用 static 关键字来写 
MyComponent.propTypes = { 
  // 也可以将 array bool ... 先解构出来再直接使用
  // key: types
  // 其中，key 是从父组件里面传过来的属性的名字；
  optionalArray: PropTypes.array, 
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  // node 表明该属性只要是能被渲染的节点就可以。数组、对象里key的value、组件、类的实例、元素 ... 都可以。
  optionalNode: PropTypes.node,
  
  // element 表明该属性必须是元素。比如 <div>AAA</div>。
  optionalElement: PropTypes.element,
  
  optionalElementType: PropTypes.elementType,
  
  // instanceOf(类名) 表明该属性必须是某个类的实例。但注意类的实例并不能渲染到页面上。
  optionalMessage: PropTypes.instanceOf(Message),
  
  // oneOf([a,b,,c]) 表明该属性的值可以是数组里面的任意一个元素。即可以枚举出所有能传的值。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  
  // oneOfType([x,y,z]) 表明该属性可以是 x / y / z 里任意一种类型。
  optionalUnion: PropTypes.oneOfType([ 
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
 
  // arrayOf() 表明该属性必须是数组，而且规定了里面元素的类型。
  // 如 arrayOf(string) 就表明属性必须是一个 string 数组。
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
 
  // objectOf() 表明该属性必须是对象，并且规定了里面键值的类型。
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
 
  // shape({}) 表明该参数必须是一个对象，且符合 shape 给出的形式。这相当于定义了一个接口(TS)。
  // 如果没有 .isRequired 要求，可以不传，也不会报错。
  // shape 是一个对象。
  optionalObjectWithShape: PropTypes.shape({
    // 没有 .isRequired 要求，可不传
    optionalProperty: PropTypes.string,
    // .isRequired 表明该条是必传的
    requiredProperty: PropTypes.number.isRequired
  }),
 
  // exact({}) 和 shape({}) 差不多。
  // 只是如果你通过 PropTypes.exact({}) 声明对象时包含未提及的额外属性，那么 exact 会报错；
  // 但通过 PropTypes.shape({}) 声明的对象包含未提及的额外属性时，一般不会报错。
  optionalObjectWithStrictShape: PropTypes.exact({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),
 
  // func.isRequired 表明该参数必须是一个函数且不可不传。
  requiredFunc: PropTypes.func.isRequired,
 
  // any.isRequired 表明该参数可以是任何类型，但必须要传。
  requiredAny: PropTypes.any.isRequired,
 
  // 自验证：如果之前约定的 propTypes 还不能满足需求，想自己定义一个验证，就可以用自验证（可以参考 [Vue 的 validator 自验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)）。
  // 是一个函数，可以传入三个参数，分别是属性+属性名+组件名
  customProp: functionName(props, propName, componentName) {
    // 只要满足某个条件，就报错。可以自己验证一些东西
    if (propName !== "xxx") {
      // 返回一个 Error 的实例，实例里面的内容可以自由发挥，总之是返回一个错误。
      return new Error(
        "参数搞错啦"
      );
    }
  },
 
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

```jsx
let {
    instanceOf,
		string,
		oneOf,
		...
} = PropTypes // 将 PropTypes.string 等等解构出来
```

```jsx
import React, {Component} from 'react';
import PropTypes from 'prop-types'

// 解构
let {
    instanceOf,
} = PropTypes

class AAA extends Component {
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

class Child extends Component {
    static propTypes = {
        title: instanceOf(AAA)
    }

    render() {
        // console.log(this.props.title);
        return (
            <div>Child {this.props.title}</div>
        )
    }
}

export default class extends Component {
    render() {
        return (
            <div>
                <Child title={<AAA></AAA>}></Child>
            </div>
        );
    }
}
```

## 状态（`state`）

状态就是在组件里用于描述某种显示情况的数据。

状态由组件自己设置、更改和维护，使用状态的目的是为了在不同的情况下让组件也有不同的显示效果（自己管理）。

在 Vue 里面也有这个内部状态，但叫 `data` 。

### 定义状态的两种方式

在组件内部定义状态有两种方案。

- 用 `state` 属性（更简洁优雅）
- 用构造函数

### 用构造函数来定义状态

### 用 `state` 属性来定义状态

```jsx
import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        // 手动调用父类的构造函数
        super(props)
        // 给 this 绑定 state 属性
        this.state = {
            isShow: true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isShow ? <div>state {JSON.stringify(this.state.isShow)}</div> : null
                     // OR this.state.isShow && <div>state {JSON.stringify(this.state.isShow)}</div>
                }
            </div>
        );
    }
}

export default State;
```

```jsx
import React, {Component} from 'react';

class State extends Component {
    // 这个写法在 ES6 里需要 Babel 解析
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                {
                    this.state.isShow ? <div>state {JSON.stringify(this.state.isShow)}</div> : null
                     // OR this.state.isShow && <div>state</div>
                }
            </div>
        );
    }
}

export default State;
```

`this.props` 和 `this.state` 是纯 JS 对象。

在 Vue 中，`data` 属性是利用 `Object.defineProperty` 处理过的，更改 `data` 数据的时候会触发数据的 `getter` 和 `setter` ，即可以帮助我们自动收集依赖和更新模板。

但是 React 中没有做这样的处理，如果直接更改的话，React 是无法得知的，所以，需要使用特殊的更改状态的方法 `setState` 来手动触发模板更新。

### 用 `setState` 更改状态

> 只有在类组件里面，才能定义生命周期函数。函数式组件里是不能的，因为它没有继承 `Component` 。


```jsx
import React, {Component} from 'react';

class State extends Component {
    // 这个写法在 ES6 里需要 Babel 解析
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                {
                    this.state.isShow ? <div>state {JSON.stringify(this.state.isShow)}</div> : null
                    // OR this.state.isShow && <div>state</div>
                }
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            // 不正式的写法
            // this.state.isShow = false // 改 state 的值
            // this.setState({}) // 告诉 React 要更新 DOM

            // 正式的写法
            // 该写法不仅告诉了 react 要更新 DOM ，还改了 state 的值。
            this.setState({
                isShow: false
            })

            // 还有这种写法：用原值
            // prevState 是指之前的状态
            // this.setState(prevState => {
            //     return {
            //         isShow: !prevState.isShow
            //     }
            // })

            // 最后这种写法还有另一个版本
            // this.setState(state => ({
            //    count: state.count + args	
            // }))
        }, 3000)
    }
}

export default State;
```

#### `setState` 的异步问题

```jsx
import React, {Component} from 'react';

class State extends Component {
    state = {
        isShow: true,
        count: 0
    }

    render() {
        return (
            <div>
                {
                    <div>state {this.state.count}</div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
        // 打印出来的是 <div><div>state 0</div></div>
        // 为什么不是 1 呢
        console.log(document.querySelector('#root').innerHTML)
    }
}

export default State;
```

```jsx
import React, {Component} from 'react';

class State extends Component {
    state = {
        isShow: true,
        count: 0
    }

    render() {
        return (
            <div>
                {
                    <div>state {this.state.count}</div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        }, () => {
						// 打印出来的是 <div><div>state 1</div></div>
            console.log(document.querySelector('#root').innerHTML)
        })
    }
}

export default State;
```

```jsx
import React, {Component} from 'react';

class State extends Component {
    state = {
        isShow: true,
        list: ['a', 'b', 'c'] // 集合
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(value => {
                            return (
                                <li>{value}</li> // JSX
														)
                        })
                    }			
                </ul>
            </div>
        );
    }
}

export default State;
```

`map()` 返回的仍然是一个数组，所以 JSX 是可以直接渲染一个数组的。但对象不能渲染。

>️ React 和 Vue 最本质的区别是，Vue 是响应式的，React 是需要我们手动去做一些更新的。

## 属性 `props` & 状态 `state`

二者的相似点：

1. 都是纯 JS 对象，都会触发 `render` 更新，都具有确定性（状态/属性相同，结果相同）。
2. `props` 和 `state` 都能在内部设置默认值。

二者的不同点：

1. `props` 能从父组件获取，`state` 不能
2. `props` 能被父组件修改，`state` 不能
3. `props` 不在组件内部修改，`state` 可以修改
4. `props` 能设置子组件初始值，`state` 不可以
5. `props` 可以修改子组件的值，`state` 不可以

`state` 的主要作用是用于组件保存、控制、修改自己的可变状态。`state` 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。

可以认为 `state` 是一个局部的、只能被组件自身控制的数据源。`state` 中状态可以通过 `this.setState` 方法进行更新，`setState` 会导致组件的重新渲染。

`props` 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。

它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 `props`，否则组件的 `props` 永远保持不变。

> 尽量少使用 `state`，多用 `props` 。

> 没有 `state` 的组件叫无状态组件（stateless component），设置了 `state` 的叫做有状态组件（stateful component）。
> 因为状态会带来管理的复杂性，所以尽量多写无状态组件、少写有状态的组件。
> 这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

## 状态提升

![](assets/%E7%8A%B6%E6%80%81%E6%8F%90%E5%8D%87.png)

`A` 组件下面，有两个子组件 `A'` 和 `A''` 。如果 `A'` 和 `A''` 要通信，那就需要 `A'` 把状态给 `A` ，`A` 再把状态给 `A''` 。`A'` 和 `A''` 之间是不能直接通信的。

我们把 `A'` 把状态给 `A` 的这个过程叫做 **状态提升** 。

[Javascript中的bind详解](https://cloud.tencent.com/developer/article/1504732)

Child1 把内容传给 Parents ，Parents 再把内容传给 Child2，在 Child2 中显示所传递内容。

首先，Parents 如何收 Child1 传过来的内容。

- 在 Parents 里定义一个事件，即 `onReceiveData`
- 在 Child1 里去触发这个事件并传参
- 在 Parents 里就能收到这个信息了

```jsx
import React, {Component} from 'react';

import Child1 from "./Child1";

class Parents extends Component {
    constructor(props) {
        super(props);
        this.handleReceiveData = this.handleReceiveData.bind(this)
    }

    handleReceiveData(data1){
        // 当我们在页面上点击 Child1，从 Child1 组件传过来的 data1 就会被打印出来了
        console.log(data1);
    }

    render() {
        return (
            <>
                {/* 在组件上自定义了一个属性，这个属性的值等于一个函数的引用 */}
                {/* onReceiveData 是自定义的属性，该属性的值等于 handleReceiveData 函数的引用 */}
                {/* 这里 handleReceiveData 后没有加 () */}
                <Child1 onReceiveData={this.handleReceiveData}></Child1>
            </>
        );
    }
}

export default Parents;
```

```jsx
import React from 'react';

const Child1 = (props) => {
    return (
        // 我们在组件 Child1 上定义的 onReceiveData 属性，所以该属性也一定会挂载到 props 上
        // props.onReceiveData 后面不要直接加 ()，加了就会立即执行这个函数，但我们想要的效果是点击了再执行
        // 既不能立即调用，又要传参，就可以使用 .bind(this, "参数") 来绑定事件
        <div onClick={props.onReceiveData.bind(this, 'hello')}>Child1</div>
    )
}

export default Child1;
```

接下来，Parents 如何把收到的信息传给 Child2 

- 在 Parents 组件中，用 `this.state` 来临时储存 Child1 组件传过来的 `data1`
- 然后在 Parents 组件里的 Child2 标签中，自定义一个属性 `data3`，来接收 `this.state`
- 最后在 Child2 组件里，用 `{props.data3}` 来将 `data1` 渲染到页面上。

```jsx
import React, {Component} from 'react';

import Child1 from "./Child1";
import Child2 from './Child2'

class Parents extends Component {
    constructor(props) {
        super(props);
        // 为了临时储存从 Child1 传过来的信息，组件内部需要一个 state
        this.state = {
            data2: ''
        }
        this.handleReceiveData = this.handleReceiveData.bind(this)
    }

    // data1 是从 Child1 传过来的信息
    // data2 临时储存了 data1
    handleReceiveData(data1){
        this.setState({
            data2: data1
        })
    }

    render() {
        return (
            <>
                <Child1 onReceiveData={this.handleReceiveData}></Child1>
                {/* 自定义一个属性，来接收 Parents 传过来的值 */}
                <Child2 data3={this.state.data2}></Child2>
            </>
        );
    }
}

export default Parents;
```

```jsx
import React from 'react';

const Child2 = (props) => {
    return <div>{props.data2}</div>
}

export default Child2;
```