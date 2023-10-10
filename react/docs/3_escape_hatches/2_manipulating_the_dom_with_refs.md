# Manipulating the DOM with Refs

React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it.

However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to it, or measure its size and position.

There is no built-in way to do those things in React, so you will need a ref to the DOM node.

---

```js
import { useRef } from 'react';

const myRef = useRef(null);

// This tells React to put this <div>’s DOM node into myRef.current.
<div ref={myRef}>
```

Initially, `myRef.current` will be `null`.

When React creates a DOM node for this `<div>`, React will put a reference to this node into `myRef.current`.

```js
// You can use any browser APIs, for example:
myRef.current.scrollIntoView();
myRef.current.focus();
```

---

> **How to manage a list of refs using a ref callback**
>
> Sometimes you might need a ref to each item in the list, and you don’t know how many you will have. Something like this wouldn’t work:
>
> ```jsx
> <ul>
>   {items.map((item) => {
>     // Doesn't work!
>     const ref = useRef(null);
>     return <li ref={ref} />;
>   })}
> </ul>
> ```
>
> This is because **Hooks must only be called at the top-level of your component**.
>
> You can’t call useRef in a loop, in a condition, or inside a `map()` call.
>
> One possible way around this is to get a single ref to their parent element, and then use DOM manipulation methods like querySelectorAll to “find” the individual child nodes from it. However, this is brittle and can break if your DOM structure changes.
>
> Another solution is to **pass a function to the `ref` attribute**. This is called a `ref` callback.
>
> This lets you maintain your own array or a Map, and access any ref by its index or some kind of ID.
>
> example: [useRef_callback_function_map](https://codesandbox.io/s/useref-callback-function-map-fqm455)
>
> In this example, `itemsRef` doesn’t hold a single DOM node.
>
> Instead, it holds a Map from item ID to a DOM node.
>
> The ref callback on every list item takes care to update the Map:
>
> ```jsx
> <li
>   key={cat.id}
>   ref={node => {
>     const map = getMap();
>     if (node) {
>       // Add to the Map
>       map.set(cat.id, node);
>     } else {
>       // Remove from the Map
>       map.delete(cat.id);
>     }
>   }}
> >
> ```

---

If you try to put a ref on your own component, like `<MyInput />`, by default you will get `null`.

This happens because by default React does not let a component access the DOM nodes of other components.

Refs are an escape hatch that should be used sparingly.

Manually manipulating another component’s DOM nodes makes your code even more fragile.

---

A component can specify that it “forwards” its ref to one of its children.

Here’s how MyInput can use the forwardRef API:

```jsx
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

---

This is how it works:

1. `<MyInput ref={inputRef} />` tells React to put the corresponding DOM node into `inputRef.current`.

2. The `MyInput` component is declared using `forwardRef`. This opts it into receiving the `inputRef` from above as the second `ref` argument which is declared after props.

3. `MyInput` itself passes the `ref` it received to the `<input>` inside of it.

---

In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes.

On the other hand, high-level components like forms, lists, or page sections usually won’t expose their DOM nodes to avoid accidental dependencies on the DOM structure.

---

In uncommon cases, you may want to restrict the exposed functionality.

You can do that with `useImperativeHandle`:

```jsx
import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

In this case, the ref “handle” is not the DOM node, but the custom object you create inside `useImperativeHandle` call.

---

In React, every update is split in two phases:

1. **During render**

   React calls your components to figure out what should be on the screen.

2. **During commit**

   React applies changes to the DOM.

In general, you don’t want to access refs during rendering.

During the first render, the DOM nodes have not yet been created, so `ref.current` will be `null`.

React sets `ref.current` during the commit.

After updating the DOM, React immediately sets them to the corresponding DOM nodes.

Usually, you will access refs from event handlers.

If you want to do something with a ref, but there is no particular event to do it in, you might need an Effect.

---

You can force React to update (“flush”) the DOM synchronously.

To do this, import `flushSync` from `react-dom` and **wrap the state update** into a `flushSync` call:

```js
flushSync(() => {
  setTodos([...todos, newTodo]);
});
```

---

If you try to modify the DOM manually, you can risk conflicting with the changes React is making.

**Avoid changing DOM nodes managed by React.**

Modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results or crashes.

**You can safely modify parts of the DOM that React has no reason to update.**

If some `<div>` is always empty in the JSX, React won’t have a reason to touch its children list. Therefore, it is safe to manually add or remove elements there.
