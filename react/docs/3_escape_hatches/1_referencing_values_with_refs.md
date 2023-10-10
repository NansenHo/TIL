# Referencing Values with Refs

When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a **ref**.

---

Call the `useRef` Hook and pass the initial value that you want to reference as the only argument.

```js
import { useRef } from "react";

const ref = useRef(0);
```

`useRef` returns an object like this:

```js
{
  current: 0; // The value you passed to useRef
}
```

You can access the current value of that ref through the `ref.current` property.

> This value is intentionally mutable, meaning you can both read and write to it.

---

It’s like a secret pocket of your component that React doesn’t track.

---

The ref points to a number, but, like state, you could point to anything: a string, an object, or even a function.

Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.

Like state, refs are retained by React between re-renders.

However, setting state re-renders a component. Changing a ref does not!

---

When a piece of information is used for rendering, keep it in state.

When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.

---

In most cases, you’ll want to use state. Refs are an “escape hatch” you won’t need often.

| refs                                                                                  | state                                                                                                                     |
| :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| `useRef(initialValue)` returns `{ current: initialValue }`                            | `useState(initialValue)` returns the current value of a state variable and a state setter function ( `[value, setValue]`) |
| Doesn’t trigger re-render when you change it.                                         | Triggers re-render when you change it.                                                                                    |
| Mutable—you can modify and update `current`’s value outside of the rendering process. | “Immutable”—you must use the state setting function to modify state variables to queue a re-render.                       |
| You shouldn’t read (or write) the `current` value during rendering.                   | You can read state at any time. However, each render has its own snapshot of state which does not change.                 |

---

Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component.

If your component **needs to store some value**, but it **doesn’t impact the rendering logic**, choose refs.

---

Following these principles will make your components more predictable:

1. **Treat refs as an escape hatch.**

   Refs are useful when you work with external systems or browser APIs.

   If much of your application logic and data flow relies on refs, you might want to rethink your approach.

2. **Don’t read or write `ref.current` during rendering.**

   If some information is needed during rendering, use state instead.

   Since React doesn’t know when `ref.current` changes, even reading it while rendering makes your component’s behavior difficult to predict.

   The only exception to this is code like `if (!ref.current) ref.current = new Thing()` which only sets the ref once during the first render.

---

Limitations of React state don’t apply to refs.

State acts like a snapshot for every render and doesn’t update synchronously.

But when you mutate the current value of a ref, it changes immediately:

```js
ref.current = 5;
console.log(ref.current); // 5
```

This is because **the ref itself is a regular JavaScript object**, and so it behaves like one.

You also don’t need to worry about avoiding mutation when you work with a ref.

---

You can point a ref to any value.

However, the most common use case for a ref is to access a DOM element.

Ref is handy if you want to focus an input programmatically.

> Once the element is removed from the DOM, React will update `myRef.current` to be `null`.
