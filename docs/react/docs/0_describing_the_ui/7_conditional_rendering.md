# Conditional Rendering

in React, you can conditionally render JSX using JavaScript syntax like

1. `if` statements

2. `&&` operator

3. `? :` operator

---

In some situations, you won't want to return anything at all.

Then you can return `null`.

```jsx
if (isSomething) {
  return null
}
return <li className="item">{name}</li>;
```

---

In practice, returning `null` from a component isn't common because it might surprise a developer trying to render it.

More often, you would conditionally include or exclude the component in the parent component's JSX.

---

```js
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

While this duplication isn't harmful, it could make your code harder to maintain.

if you want change the `className`, you'd have to do it in two places in your code.

Instead of this:

```jsx
return <li className="item">
  {isPacked ? name + ✔ : name}
</li>;
```

> **Are these two examples fully equivalent?**
> 
> If you're coming from an object-oriented programming background, you might assume that the two examples above are subtly different because one of them may create two different "instances" of `<li>`.
> But JSX elements aren't "instances" because they don't hold any internal state and aren't real DOM nodes.
> They're lightweight descriptions, like bluepoints.
> So these two examples, in fact, are completely equivalent.

---

`&&` often comes up when you want to render some JSX when the condition is true, or render nothing otherwise.

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

> **Don't put numbers on the left of `&&`**
> 
> To test the condition, JavaScript converts the left side to a boolean automatically.
> However, if the left side is `0`, then the whole expression gets that value (`0`), and React will happily render `0` rather than nothing.
> 
> For example, a common mistake is to write code like `messageCount && <p>New message</p>`.
> It's easy to assume that it renders nothing when `messageCount` is `0`, but it really renders the `0` itself.
> 
> To fix it, make the left side a boolean: `messageCount > 0 && <p>New message</p>`.

---

