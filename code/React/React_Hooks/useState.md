# useState

```javascript
const [state, setState] = useState(initialState);
```

`useStatus()` 会返回一个 state 和一个用来更新 state 的函数。

在初始化渲染期间，传入的第一个参数 initialState 与返回的状态 state 相同。

`setState(newState)` 用于更新 state ，接受一个 state 。

在后续的重新渲染中，useState 返回的第一个值将永远是更新后的最新的 state 值。

