# useState

## 基本

`state` 属于被监控的数据，它是 React 实现数据驱动 UI 的核心。

:exclamation::exclamation::exclamation: **注意，state 与 UI 的变化息息相关。**
**与 UI 变化无关的数据不应该放在 state 中来管理，而应该使用其他办法。**

当 `state` 值发生变化时，组件会尝试重新渲染，因此，函数会重新执行一次。

函数重新执行后，此时 `count` 的数据已经是变化后的结果，因此渲染到 UI 的结果也会发生变化。

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>递增</button>
    </div>
  );
}
```

需要注意的是，`state` 使用**浅比较**对比新旧数据。

也就意味着，当 `state` 为引用数据类型时，如果你的新数据与旧数据**引用相同**，那么 React 将不认为数据发生了变化，组件也就不会重新渲染。

## 单向数据流

任何一个组件的内部数据 `state` 发生变化，就会影响组件树中低于它的组件。

为了避免额外的性能消耗，我们需要精准的把握每一次 `state` 的更新会影响哪些组件，掌握单向数据流的特性对此非常有帮助。

## 合并

当同一个 `state` 数据被修改多次时，他们会合并成一次修改。

如下面例子，我们调用两次 `setCount`，执行一次之后，`count` 变成 2，而不会变成 3。

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handle() {
    setCount(count + 1);
    setCount(count + 2);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>递增</button>
    </div>
  );
}
```

当我们同时修改多个 `state` 时，也会合并起来，被认为是一次修改，组件只会重新渲染一次。

如果同时修改多个 `state` 的行为发生在异步回调里，React 也会把它们合并成为一次 `state` 操作。

## 正确识别闭包

在函数组件中，如果我们在回调函数中使用了 `state` 的值，那么闭包就会产生。

闭包在函数创建时产生，它会缓存创建时的 `state` 的值。

这是一种正常现象，但是如果你在使用时无法正确识别它，那么会给你带来麻烦。

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handle() {
    setCount(count + 1);
    // 当 setTimeout 执行时，
    // 回调函数的 count 值不是 1，而是 0
    setTimeout(() => {
      setCount(count + 2);
    }, 0);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>递增</button>
    </div>
  );
}
```

为了正确的拿到当前 `state` 的值，我们可以使用如下的**异步写法**来达到目的：

<!-- prettier-ignore -->
```tsx
// ...

  function handle() {
    setCount(count + 1)
    setTimeout(() => {
-     setCount(count + 2)
+     setCount(count => count + 2)
    }, 0)
  }

// ...
```

## `state` 的变化是异步的

状态异步，也就意味着，当你想要在 `setCount` 之后立即去使用它时，你无法拿到状态最新的值，而到下一个事件循环周期执行时，状态才是最新值。

```ts
const [count, setCount] = useState(10);
setCount(20);
console.log(count); // 此时 counter 的值，并不是 20，而是 10
```

实践中有许多错误的使用，会因为这个异步问题出现 bug。

> 闭包的底层影响贯穿了整个 hooks 的实现，hooks 进阶使用对闭包掌握程度要求很高。
>
> state 之所有能够在函数重复执行的过程中得以保存，全部得益于闭包的特性。
