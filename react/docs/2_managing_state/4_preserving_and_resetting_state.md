# Preserving and Resetting State

Browsers use many tree structures to model UI.

The [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) represents HTML elements, the [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) does the same for CSS. There’s even an [Accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)!

---

React also uses tree structures to manage and model the UI you make. React makes **UI trees** from your JSX.

Then React DOM updates the browser DOM elements to match that UI tree.

React Native translates these trees into elements specific to mobile platforms.

---

React preserves a component’s state for as long as it’s being rendered at its position **in the UI tree**.

---

As a rule of thumb, **if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another**.

---

This is why you should not nest component function definitions.

---

the `MyTextField` component function is defined inside `MyComponent`.

A different `MyTextField` function is created for every render of `MyComponent`.

```jsx
import { useState } from "react";

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}
```

**To avoid this problem, always declare component functions at the top level, and don’t nest their definitions.**

---

```jsx
{
  isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />;
}
```

Resetting state with a key is a more generic way to reset a component’s state.

Switching between Taylor and Sarah does not preserve the state. This is because you gave them different keys:

```jsx
{
  isPlayerA ? (
    <Counter key="Taylor" person="Taylor" />
  ) : (
    <Counter key="Sarah" person="Sarah" />
  );
}
```

Specifying a key tells React to use the key itself as part of the position, instead of their order within the parent.

This is why, even though you render them in the same place in JSX, React sees them as two different counters, and so they will never share state.

---

> Remember that keys are not globally unique.
>
> They only specify the position within the parent.

---

State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.

---

You can force a subtree to reset its state by giving it a different key.
