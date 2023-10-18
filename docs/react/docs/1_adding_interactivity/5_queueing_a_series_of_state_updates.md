# Queueing a Series of State Updates

Updating the same state multiple times before the next render

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
```

Instead of passing the next state value like `setNumber(n + 1)`, you can pass a function that calculates the next state based on the previous one in the queue, like `setNumber(n => n + 1)`.

It's a way to tell React to **"do something with the state value"** instead of just replacing it.

---

`n => n + 1` is called an **updater function**.

---

```jsx
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```

Here's how React works through these lines of code while executing the event handler:

1. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.
2. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.
3. `setNumber(n => n + 1)`: `n => n + 1` is a function. React adds it to a queue.

| queued update |	n	| returns |
| --- | --- | --- |
| n => n + 1 |	0 |	0 + 1 = 1 |
| n => n + 1 |	1 |	1 + 1 = 2 |
| n => n + 1 |	2 |	2 + 1 = 3 |

When you call `useState` during the next render, React goes through the queue.

React stores `3` as the final result and returns it from `useState`.

---

```jsx
setNumber(number + 5);
setNumber(n => n + 1);
```

Here's what this event handler tells React to do:

1. `setNumber(number + 5)`: `number` is `0`, so `setNumber(0 + 5)`. React adds “replace with 5” to its queue.

2. `setNumber(n => n + 1)`: `n => n + 1` is an updater function. React adds that function to its queue.

| queued update	| n	| returns |
| --- | --- | --- |
| “replace with 5” |	0 (unused) |	5 |
| n => n + 1 |	5 |	5 + 1 = 6 |

React stores `6` as the final result and returns it from `useState`.

---

You may have noticed that `setState(5)` actually works like `setState(n => 5)`, but `n` is unused!

---

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

| queued update |	n	| returns |
| --- | --- | --- |
| “replace with 5” |	0 (unused) |	5 |
| n => n + 1 |	5 |	5 + 1 = 6 |
| “replace with 42” |	6 (unused) |	42 |

---

After the event handler completes, React will trigger a re-render.

During the re-render, React will process the queue.

Updater functions run during rendering, so **updater functions must be pure and only return the result**.

---

It's common to name the updater function argument by the first letters of the corresponding state variables: 

```js
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
```

another common convention is to repeat the full state variable name, like 

```js
setEnabled(enabled => !enabled);
setEnabled(prevEnabled => !prevEnabled);
```

---

To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.

---

```js
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
```
