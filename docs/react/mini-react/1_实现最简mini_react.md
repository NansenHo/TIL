# 实现最简 mini-react —— 渲染 `<div id="app">app</div>`

## 创建 VDom

封装了 `createElement` 和 `createTextNode` 两个函数来**创建 VDom**。

```ts
function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text, // 文字内容
      children: [],
    },
  };
}
```

```ts
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
```

> 剩余参数语法允许我们将一个不定数量的参数表示为一个数组。
>
> 如果函数的最后一个命名参数以 `...` 为前缀，则它将成为一个由剩余参数组成的**真数组**。

可以将 `createTextNode` 封装到 `createElement` 里，这样就可以直接用参数将字符串或数字传入。

```ts
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        typeof child === "string" || typeof child === "number"
          ? createTextNode(child)
          : child;
      }),
    },
  };
}
```

## 渲染 VDom

`render(component, container)` 函数将 VDom 渲染成真实节点，其封装了三个步骤：

1. 创建元素
2. 挂载属性
3. 渲染子节点（用递归的方式来处理 `children`）

> 两个参数，第一个是 VDom，第二个是元素节点。

## 构建 React 入口函数结构

下面是 React 入口函数的写法：

```ts
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

我们要让 mini-react 的入口函数的写法跟上面是一样的。

```ts
const ReactDOM = {
  createRoot(container) {
    return {
      render(App) {
        // 调用 render 函数
        render(App, container);
      },
    };
  },
};
```

## 拆分代码

`ReactDom` 对象应该是在 `reactDom.ts` 模块里。

```ts
// reactDom.ts
const ReactDom = {
  // ...
};

export default ReactDom;
```

而创建并渲染 VDom 的逻辑应该在 `react.ts` 模块里。

```ts
// react.ts
const React = {
  render,
  createElement,
};

export default React;
```
