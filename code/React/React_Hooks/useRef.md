# useRef

```js
const refContainer = useRef(initialValue);
```

useRef 返回一个**可变的 ref 对象**
返回的 ref 对象的 `.current` 属性被初始化为传入的参数 `initialValue` 。
返回的 ref 对象在组件的整个生命周期内持续存在。

> **ref** 
> 一种访问 DOM 的主要方式
> 如果你将 ref 对象以 `<div ref={myRef} />` 形式传入组件，
> 则无论该节点如何改变，React 都会将 ref 对象的 `.current` 属性设置为相应的 DOM 节点。

### 与 TypeScript 结合使用

当我们使用 useRef 时，需要给其指定类型

如果 useRef 的初始值是 `null`，那有两种创建的形式：

1. 

```jsx
const refInput = React.useRef<HTMLInputElement>(null)
```

这种形式下的 refInput.current 是 read-only 的，我们不能对 current 进行重新赋值。

2. 

```jsx
const refInput = React.useRef<HTMLInputElement | null>(null)
```

这种形式下的 refInput.current 是可读写的。

不过这两种在使用的时候，都要做类型检查

```jsx
// ?.
refInput.current?.value = ''
```

