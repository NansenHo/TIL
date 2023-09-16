# Quick Start

React component names must always start with a capital letter, while HTML tags must be lowercase.

JSX is stricter than HTML. You have to close tags like `<br />`.

---

`style={{}}` is not a special syntax, but a regular `{}` object inside the `style={}` JSX curly braces. 

---

```jsx
// conditional ? operator:
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

// logical && syntax
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

---

use the `map()` function to transform an array of products into an array of `<li>` items

```jsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

Notice how `<li>` has a key attribute.

For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
Usually, a key should be coming from your data, such as a database ID.
React uses your keys to know what happened if you later insert, delete, or reorder the items.

---

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

**Do not call the event handler function**: you only need to pass it down.

---

```jsx
function MyButton() {
  const [something, setSomething] = setState(defaultValue);

  function handleClick() {
    setSomething(newValue);
  }

  return (
    <button onClick={handleClick}>
      click me!
    </button>
  )
}
```

If you render the same component multiple times, each will get its own state.

---

Functions starting with `use` are called Hooks.

Hooks are more restrictive than other functions.
You can only call Hooks at the top of your components (or other Hooks).

If you want to use `useState` in a condition or a loop, extract a new component and put it there.

--- 

```jsx
// MyApp
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```

```jsx
// MyButton
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```
