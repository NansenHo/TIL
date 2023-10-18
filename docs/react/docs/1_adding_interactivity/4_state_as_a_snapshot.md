# State as a Snapshot

State variables might look like regular JavaScript variables that you can read and write to.

However, state behaves more like a snapshot.

Setting it does not change the state variable you already have, but instead triggers a re-render.

---

"Rendering" means that React is calling your component, which is a function.

The JSX you return from that function is like a snapshot of the UI in time.

Its props, event handlers, and local variables were all calculated **using its state at the time of the render**.

---

As a component's memory, state is not like a regular variable that disappears after your function returns.

State actually "lives" in React itself —— as if on a shelf! —— outside of your function.

---

Setting state only changes it for the next render.

---

A state variable's value never changes within a render, even if its event handler's code is asynchronous.

---

React keeps the state values "fixed" within one render's event handlers.

---

Variables and event handlers don't "survive" re-renders.

Every render has its own event handlers.

---

