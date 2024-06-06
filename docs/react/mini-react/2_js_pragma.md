# JavaScript pragma

## 什么是 JavaScript pragma

在 JavaScript 语境中，"pragma" 是一种注释或者指令，通常用于告知编译器或解释器如何处理代码的某些部分。

在 JavaScript 和相关技术中，pragma 最常见的形式是在文件或代码段的顶部使用特殊的注释。

这些注释虽然不会改变代码的执行，但会影响代码的编译或转换过程。

[what exactly is a javascript pragma](https://stackoverflow.com/questions/14593350/what-exactly-is-a-javascript-pragma)

## 两个常见的 pragma

### `"use strict"`

"use strict" 是一个指示浏览器或 JavaScript 引擎进入严格模式（strict mode）的 pragma。

```js
"use strict";
```

### JSX pragma

JSX pragma 是用于指定当使用 JSX 时应该使用哪个函数来转换 JSX 表达式。

在 React 中，默认的 JSX pragma 是 `React.createElement`。

但也可以通过 `/**@jsx HReact.createElement */` 一行注释即可将 `React` 变量名修改为 `HReact` 等其他名字。

```ts
// App.tsx

// highlight-start
/**@jsx HReact.create */
import HReact from "./core/React";
// highlight-end

// highlight-start
function AppOne() {
  return <div id="app">hi, mini-react</div>;
}
console.log(AppOne);
// HReact.create function is called
// highlight-end

... ...
```
