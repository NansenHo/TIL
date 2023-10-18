# Passing Data Deeply with Context

Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

---

Context lets a parent—even a distant one! —— provide some data to the entire tree inside of it.

---

```js
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}
```

`useContext` tells React that the `Heading` component wants to read the `LevelContext`.

---

If you don’t provide the context, React will use the **default value** you’ve specified in the previous step.

---

You can pass down any information needed by the entire subtree: the current color theme, the currently logged in user, and so on.

---

Context lets you write components that “adapt to their surroundings” and display themselves differently depending on where (or, in other words, in which context) they are being rendered.

---

How context works might remind you of CSS property inheritance.

In CSS, you can specify `color: blue` for a `<div>`, and any DOM node inside of it, no matter how deep, will inherit that color unless some other DOM node in the middle overrides it with `color: green`.

Similarly, in React, the only way to override some context coming from above is to wrap children into a context provider with a different value.

In CSS, different properties like `color` and `background-color` don’t override each other. You can set all `<div>`’s `color` to red without impacting `background-color`.

Similarly, different React contexts don’t override each other. Each context that you make with `createContext()` is completely separate from other ones, and ties together components using and providing that particular context. One component may use or provide many different contexts without a problem.

---

Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.

---

Use cases for context:

1. Theming

2. Current account

3. Routing

   Most routing solutions use context internally to hold the current route.

   This is how every link “knows” whether it’s active or not.

   If you build your own router, you might want to do it too.

4. Managing state

5. ...
