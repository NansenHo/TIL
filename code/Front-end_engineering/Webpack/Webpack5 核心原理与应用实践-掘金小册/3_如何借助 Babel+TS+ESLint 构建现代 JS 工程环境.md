# 如何借助 Babel+TS+ESLint 构建现代 JS 工程环境

- [如何借助 Babel+TS+ESLint 构建现代 JS 工程环境](#如何借助-babeltseslint-构建现代-js-工程环境)
  - [使用 Babel](#使用-babel)
    - [Babel 是什么，有什么功能](#babel-是什么有什么功能)
    - [Webpack 中接入 Babel](#webpack-中接入-babel)
    - [使用 `.babelrc` 文件或 `rule.options` 属性配置 Babel 功能逻辑](#使用-babelrc-文件或-ruleoptions-属性配置-babel-功能逻辑)
  - [使用 TypeScript](#使用-typescript)
  - [使用 ESLint](#使用-eslint)
  - [思考](#思考)


本文介绍了 ESLint、TypeScript、Babel 三类工程化工具的历史背景、功能，
以及在 Webpack 中接入这些工具的具体步骤。

这三种工具各自补齐了 JavaScript 语言某些薄弱环节：

- Babel 提供的语言转译能力，能在确保产物兼容性的同时，让我们大胆使用各种新的 ECMAScript 语言特性；
- TypeScript 提供的类型检查能力，能有效提升应用代码的健壮性；
- ESLint 提供的风格检查能力，能确保多人协作时的代码一致性。


## 使用 Babel

### Babel 是什么，有什么功能

Babel 是一个开源 JavaScript 编译器、转义器。

主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，
以便能够运行在当前和旧版本的浏览器或其他环境中。

现在浏览器、Node 等 JavaScript 引擎都或多或少存在兼容性问题。
为此，现代 Web 开发流程中通常会引入 Babel 等转译工具。

Babel 还提供了一个在线版的 REPL 页面：[Babel-试一试](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.19.3&externalPlugins=&assumptions=%7B%7D)，可以实时体验功能效果。

### Webpack 中接入 Babel

Webpack 场景下，只需使用 `babel-loader` 即可接入 Babel 转译功能：

1. 安装依赖 `@babel/core` `@babel/preset-env` `babel-loader`

```shell
npm i -D @babel/core @babel/preset-env babel-loader
```

2. 添加模块处理规则

```js
module.exports = {
  /* ... */
  module: {
    rules: [
      // 简易
      {
        test: /\.js$/,
        // 用于声明这条规则的 Loader 处理器序列，所有命中该规则的文件都会被传入 Loader 序列做转译处理
        use: ['babel-loader'],
      },
      // 复杂
      {
        test: /\.js$/,
        include: srcPath,
        use: {
            // 如果文件没被改动则使用缓存
            loader: 'babel-loader?cacheDirectory=true'
        }
      }, 
    ],
  },
};
```

3. 执行编译命令

```shell
npx webpack
```

### 使用 `.babelrc` 文件或 `rule.options` 属性配置 Babel 功能逻辑

接入 Babel 后，也可以使用 `.babelrc` 文件或 `rule.options` 属性配置 Babel 功能逻辑。

```js
// 预先安装 @babel/preset-env
// npm i -D @babel/preset-env
module.exports = {
  /* ... */
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};
```

Preset 是一种 Babel 预设规则集。比如 `babel/preset-env`

这种设计能按需将一系列复杂、数量庞大的配置、插件、Polyfill 等打包成一个单一的资源包，从而简化 Babel 的应用、学习成本。

Preset 是 Babel 的主要应用方式之一，社区已经针对不同应用场景打包了各种 Preset 资源。比如：

1. `babel-preset-react`：包含 React 常用插件的规则集，支持 `preset-flow``、syntax-jsx`、`transform-react-jsx` 等。

2. `@babel/preset-typescript`：用于转译 TypeScript 代码的规则集。

3. `@babel/preset-flow`：用于转译 Flow 代码的规则集。

> **loader 特性**
> 
> 1. loader 支持链式调用。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。
> 
> 2. loader 可以是同步的，也可以是异步的。
> 
> 3. loader 运行在 Node.js 中，并且能够执行任何操作。
> 
> 4. loader 可以通过 options 对象配置（仍然支持使用 query 参数来设置选项，但是这种方式已被废弃）。
> 
> 5. 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块。
> 
> 6. 插件(plugin)可以为 loader 带来更多特性。
> 
> 7. loader 能够产生额外的任意文件。

> loader 遵循标准 [模块解析](https://webpack.docschina.org/concepts/module-resolution/) 规则。
> 多数情况下，loader 将从 模块路径 加载（通常是从 npm install, node_modules 进行加载）。

> 预期 loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。
> 通常使用 npm 进行管理 loader，但是也可以将应用程序中的文件作为自定义 loader。
> 按照约定，loader 通常被命名为 xxx-loader（例如 json-loader）。

## 使用 TypeScript

从 1999年 ECMAScript 发布第二个版本到 2015年发布 ES6 之间十余年时间内，JavaScript 语言本身并没有发生太大变化，语言本身许多老旧特性、不合理设计、功能缺失已经很难满足日益复杂的 Web 应用场景。为了解决这一问题，社区陆续推出了一些 JavaScript 超集方言，例如 TypeScript、CoffeeScript、Flow。

TypeScript 借鉴 C# 语言，在 JavaScript 基础上提供了一系列类型约束特性。

Webpack 有很多种接入 TypeScript 的方法，
包括 `ts-loader`、`awesome-ts-loader`、 `babel-loader`。
通常可使用 `ts-loader` 构建 TypeScript 代码。

`@babel/preset-typescript` 规则集也可以完成 JavaScript 与 TypeScript 的转码工作。
但是它只是简单完成代码转换，并未做类似 `ts-loader` 的类型检查工作。

## 使用 ESLint

JavaScript 被设计成一种高度灵活的动态、弱类型脚本语言，这使得语言本身的上手成本极低，开发者只需要经过短暂学习就可以开始构建简单应用。但与其它编译语言相比，JavaScript 很难在编译过程发现语法、类型，或其它可能影响稳定性的错误，特别在多人协作的复杂项目下，语言本身的弱约束可能会开发效率与质量产生不小的影响，ESLint 的出现正是为了解决这一问题。

ESLint 是一种扩展性极佳的 JavaScript 代码风格检查工具，它能够自动识别违反风格规则的代码并予以修复。

Webpack 下，使用 `eslint-webpack-plugin` 接入 ESLint 工具的步骤：

1. 安装依赖
```shell
# 安装 webpack 依赖
yarn add -D webpack webpack-cli

# 安装 eslint 
yarn add -D eslint eslint-webpack-plugin

# 简单起见，这里直接使用 standard 规范
yarn add -D eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

2. 在项目根目录添加 `.eslintrc` 配置文件，内容：

```json
// .eslintrc
{
  "extends": "standard"
}
```

[关于 ESLint 配置项的更多信息](https://eslint.org/docs/latest/user-guide/configuring/)

3. 在 `webpack.config.js` / `webpack.dev.conf.js` 配置文件中补充 `eslint-webpack-plugin` 配置：

> `webpack.pro.conf.js` 文件中不需要 eslint 相关配置

```js
// webpack.config.js
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin') // *

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 添加 eslint-webpack-plugin 插件实例
  plugins: [new ESLintPlugin()] // *
}
```

1. 执行编译命令
```
npx webpack
```

## 思考

ESLint、TypeScript、Babel 三种工具都分别提供了独立 CLI 形态的使用方法，为何还需要被接入到 Webpack 工作流程中？这种做法有什么收益？

1. 通过 webpack 管理控制项目代码的整个构建编译流程，简化多个工具独立操作的工作
2. 通过 webpack 进行编译流程控制，传递 module 工具的编译结果，及时终止编译出错的编译流程
3. 通过 webpack 控制根据配置规则 rule 对指定类型文件进行使用特定工具进行编译操作