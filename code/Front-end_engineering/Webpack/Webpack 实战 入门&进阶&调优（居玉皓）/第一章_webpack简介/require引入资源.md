# Require 引入资源

1. 在项目中的 `webpack.config.js` 等项目配置文件中使用的 `require` 属于 nodejs 范畴
   
2. 进入 `index.js` 后，加载的组件中的 `require` 都属于 webpack 的解析范畴


## Require 的主要 API

1. `define()` – 该函数用于创建模块。每个模块拥有一个唯一的模块 `ID` (以 .js 结尾，比如 lib/hello.js、hello.js)，它被用于 requirejs 的运行时函数。
   `define()` 函数是一个全局函数，不需要使用 requirejs 命名空间。
   
2. `require()` – 该函数用于读取依赖。同样它是一个全局函数，不需要使用 requirejs 命名空间。

3. `require.config()` – 该函数用于配置 requirejS。

## 用 require 来引入资源

```js
let url = "@/assets/images/logo.png"
require(url)    //报错

let url = "logo.png"
require("@/assets/images/"+url); //正确
```

分析上面为什么一个报错一个正常，明明最后的 url 都是一样的

### 区分 static 和 assets 目录

1. static 目录下的文件不会经过编译。
   static 中的文件在打包之后也只是被复制了一遍而已。

   > static中建议放一些外部第三方的东西。

2. 在 js 中使用 assets 中的资源的话，路径会经过 file-loader 编译，路径不能直接写，需要 require 进来。

```js
assetsURL: require("../../../assets/images/logo.png")`
```

### 为什么会有上面的问题

如果 require 中传入的是一个变量，他有可能是计算机系统中的任何目录下的任何文件，那么在打包静态资源多时他有可能将你的电脑整个磁盘遍历一遍。

所以正确做法是，尽量给出更具体的路径，拼接更少的路径。

这样就能精确地将哪个路径下的对象文件打包，然后在代码运行时，直接用对应文件名生成正则匹配，因为在打包后的文件可能存在哈希值，也就是文件名后缀的一大串莫名的数字字符组合。


参考链接：

1. [Vue 项目中关于 Require 引入静态资源问题](https://juejin.cn/post/7009099569849958414)