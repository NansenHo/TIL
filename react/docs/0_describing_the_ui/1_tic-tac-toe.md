# tic-tac-toe

```jsx
export default function Square() {
  return <button className="square">X</button>;
}
```

1. The `export` JavaScript keyword makes this function accessible outside of this file.

2. The `default` keyword tells other files using your code that it's the main function in your file.

---

React provides a special function called `useState` that you can call from your component to let it “remember” things.

---

Lifting state up:

the best approach is to store the game’s state in the parent `Board` component instead of in each `Square`.

The `Board` component can tell each `Square` what to display by passing a prop, like you did when you passed a number to each `Square`.

---

To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead.

The parent component can pass that state back down to the children via props.

This keeps the child components in sync with each other and with their parent.

> Lifting state into a parent component is common when React components are refactored.

---

`Array(9).fill(null)` creates an array with nine elements and sets each of them to `null`. 

---

`const nextSquare = square.slice()` creates a copy of the `squares` array (nextSquares) with the JavaScript `slice()` Array method.

---

When you were passing `onSquareClick={handleClick(0)}`, you were calling it.

That's why it runs too early! You don't want to call `handleClick` until the user clicks!

---

The DOM `<button>` element's `onClick` attribute has a special meaning to React because it is a built-in component.

In React, it's conventional to use `onSomething` names for props which represent events and `handleSomething` for the function definitions which handle those events.

---

### Why immutability is important

There are generally two approaches to changing data.

- The first approach is to mutate the data by directly changing the data's values.

```js
const squares = [null, null, null, null, null, null, null, null, null];
squares[0] = 'X'
```

- The second approach is to replace the data with a new copy which has the desired changes.

```js
const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];
```

The result is the same but by not mutating (changing the underlying data) directly, you gain several benefits:

1. Immutability makes complex features much easier to implement.

    An ability to undo and redo certain actions is a common requirement for apps.

    Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.

2. Immutability makes it very cheap for components to compare whether their data has changed or not.

---

If the current list has a key that didn’t exist before, React creates a component.
If the current list is missing a key that existed in the previous list, React destroys the previous component.
If two keys match, the corresponding component is moved.

Keys tell React about the identity of each component, which allows React to maintain state between re-renders.
If a component’s key changes, the component will be destroyed and re-created with a new state.

Keys tell React about the identity of each component, which allows React to maintain state between re-renders.
If a component’s key changes, the component will be destroyed and re-created with a new state.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.

Moves will never be re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key.
