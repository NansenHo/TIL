# React HOC（高阶组件）

HOC 是 High Order Component 的缩写。

[高阶组件 - React](https://zh-hans.reactjs.org/docs/higher-order-components.html)

高阶组件就是个函数，是用来增强组件的。

这个函数接受一个组件作为参数，并返回一个新的组件。

这个新的组件会把原来的组件包裹起来，然后可以在里面写属性、各种逻辑实现等，以增强原来的组件。

我们把这个增强组件能力的函数叫做高阶组件。

比如下面的代码，

```jsx
import React, {Component} from 'react';

import hoc from "./hoc";

class App extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        );
    }

    componentDidMount() {
        console.log(this) // 能打印出 title 属性
    }
}

// App 这个组件被我们用 hoc 函数增强了
export default hoc(App);
```

```jsx
import React, {Component} from 'react'

// HOC 函数接受一个组件，并返回一个组件
const hoc = (Comp) => {
    return class extends Component {
        render() {
            return (
                <Comp title="给 App 组件的 props 上添加了一个 title 属性" {...this.props}></Comp>
								{/* 把 App 组件上 props 原有的所有属性都直接拿过来 */}
            )
        }
    }
}

export default hoc
```

这里面写非常复杂的逻辑来增强 App 组件。

当然，高阶组件还有另外一种写法，就是**装饰器写法**。

## 装饰器写法

```bash
yarn add @babel/core @babel/plugin-proposal-decorators @babel/preset-env
```

在项目根目录里，创建 `.babelrc` 文件，将下面代码复制进去。

```bash
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```

再运行以下命令行

```bash
yarn add customize-cra react-app-rewired
```

> cra 是指 create react app

再在项目根目录里，创建一个 `config-overrides.js` 文件，将下面代码复制进去。

```jsx
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    if (env === 'production') {
        config.externals = {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }

    return config
};

module.exports = override(addDecoratorsLegacy(), customize())
```

接着再去把 webpack 修改为以下代码

```jsx
...
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
...
```

以上都配置好了，就可以开始尝试使用装饰器写法了。

```jsx
import React, {Component} from 'react';

import hoc from "./hoc";

@hoc
// @hoc() 还可以传参的
class App extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        );
    }

    componentDidMount() {
        console.log(this)
    }
}

export default App
```

```jsx
import React, {Component} from 'react'

// HOC 函数接受一个组件，并返回一个组件
const hoc = (Comp) => {
    return class extends Component {
        render() {
            return (
                <Comp title="给 App 组件的 props 上添加了一个 title 属性" {... this.props}></Comp>
            )
        }
    }
}

export default hoc
```

装饰器的写法更加优雅，装饰器也可以传参。

但配置稍微麻烦一些。

然后 `yarn start` 运行即可。