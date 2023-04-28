# v-for in React

在 React 你可以用 `Array.prototype.map` 函数来遍历数组生成 DOM

```jsx
export default function Recipe({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}
```

如果你想遍历的是对象，那你可以用 `Object.entries` 函数结合 `Array.prototype.map` 函数

```jsx
export default function KeyValueList({ object }) {
  return (
    <ul>
      {Object.entries(object).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>
  );
}
```

```js
let obj = {
    hello: 1,
    world: 2,
}
Object.entries(obj)
// 返回 [['hello', 1], ['world', 2]]
```