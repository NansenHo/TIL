# 组件中的样式

> 可以用 `rcc + Tab` 快速创建一个 React 组件。
> 
> `rcc` 即 React Component。

主要有四种方式：

1. 使用 `class`
2. `css-in-js`
3. 不同的条件添加不同的样式
4. 行内样式

## 行内样式

```jsx
import React, {Component} from 'react';

class ClassStyle extends Component {
    render() {
        return (
            // style 里面是 JSX 代码，要写 JS，需要用一个 {} 包起来
            // style 本身又是定义样式的一个对象，所以里面还需要一个 {} 
            <div style={{fontSize: '50px'}}>
                hello
            </div>
        )
    }
}

export default ClassStyle
```

```jsx
import React, {Component} from 'react';

const styles = {
    fontSize: '50px',
    color: 'red'
}

class ClassStyle extends Component {
    render() {
        return (
            <div style={styles}>
                hello
            </div>
        )
    }
}

export default ClassStyle
```

## 使用 `class`

静态样式适合用 `class` 来写。将 style 写在一个 `.css` 文件里，然后在需要用 style 的文件里引入该 style 。

```jsx
import React, {Component} from 'react';

import './style.css' // 该导入并没有给某变量赋值

class ClassStyle extends Component {
    render() {
        return (
            // 用 className 而不用 class 是为了避免和 class 关键字重名
            <div className='font'>
                hello
            </div>
        )
    }
}

export default ClassStyle
```

## css-in-js

这种方法是在写 React 项目时，很推荐的一种写法。但也有人难以适应这种写法。

`css-in-js` 简单来讲，就是在 JS 中写 CSS 。

而要能在 JS 中写 CSS，需要引用针对 React 写的一套 `css-in-js` 框架  `styled-components` 。

[styled-components](https://styled-components.com/)

`styled-components` 官网

> 在 React 眼里，一切皆组件。样式也不例外。

> 在 MVC 思想看来，JS 和 CSS 应该尽可能地解耦。
>
> React 并不十分认可这一思想，而是认为，一个组件是一个整体，里面有自己的 HTML 、CSS 和 JS。
> 
> 如果出问题了，就去找出问题的组件就行。Vue 也是这样做的：单文件组件。

> ES6 里面的模块导入 `import` 是静态的；而 `require` 就是一个变量引用，是动态的。

# Classnames 为不同的条件添加不同的样式

有时候需要根据不同的条件添加不同的样式，比如：完成状态，完成是绿色，未完成是红色。

这种情况下，推荐使用 [Classnames](https://www.npmjs.com/package/classnames) 第三方包。

```jsx
import React, {Component} from 'react';
import classNames from "classnames/bind";

import styles from './style.css'

// 用 bind 方法定义一个上下文对象
// 并和 style.css 绑定起来
let cx = classNames.bind(styles);

class ClassStyle extends Component {
    // 类里面只能写函数和属性
    render() {
        // JS 逻辑写在 render 函数里
        let fontStyle = cx({
            // 是 true 就会显示 style.css 里的样式
            // 是 false 就不会显示
            font: false
        })
        return (
            <div className={fontStyle}>
                hello
            </div>
        )
    }
}

export default ClassStyle
```