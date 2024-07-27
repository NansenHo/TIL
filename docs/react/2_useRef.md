# useRef

使用函数创建组件，那就是当组件重新刷新时，组件函数会重新执行。

于是在这种情况下，如何在函数内部持久化保存一个数据或者状态就变成了一个需要探讨的问题。

React 提供了一对双生兄弟 API 来解决数据持久化的问题：`useState` 与 `useRef`。

:exclamation::exclamation::exclamation: 当需要持久化的数据**不会跟 UI 变化产生关系**时，我们就需要用到 `useRef`。

## 数据持久化

一个很常见的应用场景就是对定时器的操作。

我们需要在恰当的时机开始或者停止或者卸载定时器的引用，那么准确的拿到定义定时器时的 `timer` 引用就非常关键。

```ts
import { useRef, useState } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);
  let timer = useRef<any>(null);

  function startHandle() {
    timer.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);
  }

  function stopHandle() {
    clearInterval(timer.current);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={startHandle}>启动</button>
      <button onClick={stopHandle}>停止</button>
    </div>
  );
}
```

保存请求参数等等也都可以用 `useRef` 来解决。
