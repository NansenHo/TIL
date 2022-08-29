# HTML 和 React 中的 `change` 事件触发机制

实际上，HTML 的 `change` 事件是在 **鼠标移出** 之后，才会触发的。

> HTML 的 `change` 早于 `blur` 。

但在 React 的 `onChange` 不是这样的，React 将其改成了，每次输入都会触发，而不是鼠标移出后才会触发。