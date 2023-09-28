# Keeping Components Pure

By strictly only writing your components as pure functions, you can **avoid an entire class of baffling bugs** and **unpredictable behavior** as your codebase grows.

To get these benefits, though, there are a few rules you must follow.

---

### What's a pure function

In computer science (and especially the world of functional programming), [a pure function](https://en.wikipedia.org/wiki/Pure_function) is a function with the following characteristics:

1. **It minds its own business.**

    It does not change any objects or variables that existed before it was called.

2. **Same inputs, same output.**

    Given the same inputs, a pure function should always return the same result.

```js
function double(number) {
  return 2 * number;
}
```

In the above example, `double` is a pure function.

---

React is designed around this concept.

**React assumes that every component you write is a pure component.**

React components you write must always return the same JSX given the same input.

---

React's rendering process must always be pure.

Components should only return their JSX, and not change any objects or variables that existed before rendering —— that would make them impure!

---

Here is a component that breaks this rules:

```jsx
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup /> {/* #2 */}
      <Cup /> {/* #4 */}
      <Cup /> {/* #6 */}
    </>
  );
}
```

This component is reading and writing a `guest` variable declared outside of it.

This means that calling this component multiple times will produce different JSX!

We can fix this component by passing `guest` as a prop instead:

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

Now your component is pure, as the JSX it returns only depends on the `guest` prop.

Each component should only "think for itself", and not attempt to coordinate with or depend upon others during rendering.

Rendering is like a school exam: each component should calculate JSX on their own.

---

> **Detecting impure calculations with StrictMode**
> 
> In React, there are three kinds of inputs that you can read while rendering: 
> 
> 1. prop
> 
> 2. state
> 
> 3. context
> 
> You should always treat these inputs as read-only.
> 
> You should never change preexisting variables or objects while your component is rendering.
> 
> **Strict Mode has no effect in production**, so it won't slow down the app for your users.
> 
> To opt into Strict Mode, you can wrap your root component into `<React.StrictMode>`. 
> 
> Some frameworks do this by default.

---

In the above example, the problem was that the component changed a preexisting variable while rendering.

This is often called a "*mutation*" to make it sound a bit scarier.

---

However, **it's completely fine to change variables and objects that you've just created while rendering.**

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```

It's fine because you've created the `cups` variable or the `[]` array during the same rendering, inside `TeaGathering`.

No code outside of `TeaGathering` will ever know that this happened.

This is called "**local mutation**" —— it's like your component's little secret.

---

While functional programming relies heavily on purity, at some point, somewhere, something has to change.

These changes —— 

- updating the screen

- starting an animation

- changing the data

are called **side effects**.

They're things that happen on "on the side", not during rendering.

---

In React, side effects usually belong inside event handlers.

---

Even though event handlers are defined inside your component, they don't run during rendering!

**So event handlers don't need to be pure!**

---

If you've exhausted all other options and can't find the right event handler for your side effect, you can still attach it to your returned JSX with a `useEffect` call in your component.

This tells React to execute it later, after rendering, when side effects are allowed.

However, this approach should be your last resort.

---

> **Why does React care about purity?
> 
> It unlocks marvelous opportunities:
> 
> 1. Your components could run in a different environment —— for example, on the server!
> 
>     Since they return the same result for the same inputs, one component can serve many user requests.
> 
> 2. You can improve performance by [skipping rendering](https://react.dev/reference/react/memo) components whose inputs have not changed.
> 
>     This is safe because pure functions always return the same result, so they are safe to cache.
> 
> 3. If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render.
> 
>     purity makes it safe to stop calculating at any time.

---

Rendering can happen at any time, so components should not depend on each others' rendering sequence.

---

If you tried to change any of the array's existing items, you'd have to clone those items too.

---

It's useful to remember which operations on arrays mutate them, and which don't.

For example,

- `push`
- `pop`
- `reverse`
- `sort`

will mutate the original array, but

- `slice`
- `filter`
- `map`

will create a new array.
