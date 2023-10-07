# Scaling Up with Reducer and Context

Reducers let you consolidate a component’s state update logic.

Context lets you pass information deep down to other components.

You can combine reducers and context together to manage state of a complex screen.

---

This way, any component below TaskApp in the tree can read the tasks and dispatch actions without the repetitive “prop drilling”.

---

To provide state and the dispatch function to components below:

1. Create two contexts (for state and for dispatch functions).

2. Provide both contexts from the component that uses the reducer.

3. Use either context from components that need to read them.

---

You can also export functions that use the context from `TasksContext.js`:

```js
export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
```

When a component needs to read context, it can do it through these functions:

```js
const tasks = useTasks();
const dispatch = useTasksDispatch();
```

---

[combine_useReducer_useContext_custom_hooks](https://codesandbox.io/s/combine-usereducer-usecontext-custom-hooks-t9nx8n)

---

You can think of `TasksProvider` as a part of the screen that knows how to deal with tasks, `useTasks `as a way to read them, and `useTasksDispatch` as a way to update them from any component below in the tree.

---

You can have many context-reducer pairs like this in your app.

---

You can further declutter the components by moving all wiring into one file.

- You can export a component like TasksProvider that provides context.

- You can also export custom Hooks like useTasks and useTasksDispatch to read it.
