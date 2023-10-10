# Escape Hatches

Some of your components may need to control and synchronize with systems outside of React.

In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems.

Most of your application logic and data flow should not rely on these features.

---

### Referencing values with refs

When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref:

```js
const ref = useRef(0);
```

Like state, refs are retained by React between re-renders.

However, setting state re-renders a component. Changing a ref does not!

You can access the current value of that ref through the `ref.current` property.

---

A ref is like a secret pocket of your component that React doesn’t track.

For example, you can use refs to store

1. timeout IDs

2. DOM elements

3. other objects that don’t impact the component’s rendering output.

---

### Manipulating the DOM with refs

Sometimes you might need access to the DOM elements managed by React. For example:

1. to focus a node

2. to scroll to a node

3. measure the size of a node and position

There is no built-in way to do those things in React, so you will need a ref to the DOM node.

For example, clicking the button will focus the input using a ref:

```jsx
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

---

### Synchronizing with Effects

Some components need to synchronize with external systems. For example:

1. you might want to control a non-React component based on the React state

2. set up a server connection

3. send an analytics log when a component appears on the screen

Unlike event handlers, which let you handle particular events, Effects let you run some code after rendering.

Use them to synchronize your component with a system outside of React.

---

Many Effects also “clean up” after themselves.

For example, an Effect that sets up a connection to a chat server should return a cleanup function that tells React how to disconnect your component from that server:

```js
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect(); // this will be executed twice.
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
```

In development, React will immediately run and clean up your Effect one extra time.

This is why `connection.connect()` will be executed twice.

This ensures that you don’t forget to implement the cleanup function.

---

### You Might Not Need An Effect

If there is **no external system involved** (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect.

Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.

---

There are two common cases in which you don’t need Effects:

1. You don’t need Effects to transform data for rendering.

2. You don’t need Effects to handle user events.

> Instead of redundant state and unnecessary Effect, calculate as much as you can while rendering.

---

### Lifecycle of reactive effects

Effects have a different lifecycle from components.

Components may mount, update, or unmount.

An Effect can only do two things:

1. to start synchronizing something,

2. later to stop synchronizing it.

This cycle can happen multiple times if your Effect **depends on props and state** that change over time.

---

React provides a linter rule to check that you’ve specified your Effect’s dependencies correctly.

---

### Separating events from Effects

Event handlers only re-run when you perform the same interaction again.

Unlike event handlers, Effects re-synchronize if any of the values they read, like props or state, are different than during last render.

you want a mix of both behaviors: an Effect that re-runs in response to some values but not others.

> All code inside Effects is **reactive**.
> 
> It will run again if some reactive value it reads has changed due to a re-render.

