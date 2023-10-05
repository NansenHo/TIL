# Extracting State Logic into a Reducer

Components with many state updates spread across many event handlers can get overwhelming.

For these cases, you can consolidate all the state update logic outside your component in a single function, **called a reducer**.

Reducer is a different way to handle state.

---

You can migrate from `useState` to `useReducer` in three steps:

1. Move from 