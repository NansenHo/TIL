# Extracting State Logic into a Reducer

Components with many state updates spread across many event handlers can get overwhelming.

For these cases, you can consolidate all the state update logic outside your component in a single function, **called a reducer**.

Reducer is a different way to handle state.

---

You can migrate from `useState` to `useReducer` in three steps:

1. Move from setting state to dispatching actions.

2. Write a reducer function.

3. Use the reducer from your component.

---

### Step 1

Managing state with reducers is slightly different from directly setting state.

Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers. (The state update logic will live elsewhere!)

So instead of “setting tasks” via an event handler, you’re dispatching an “added/changed/deleted a task” action.

This is more descriptive of the user’s intent.

---

```js
function handleAddTask(text) {
  setTasks([
    ...tasks,
    {
      id: nextId++,
      text: text,
      done: false,
    },
  ]);
}
```

=>

```js
function handleAddTask(text) {
  dispatch(
    // "action" object
    {
      type: "added",
      id: nextId++,
      text: text,
    }
  );
}
```

The object you pass to dispatch is called an “action”.

It is a regular JavaScript object. You decide what to put in it, but generally it should contain the minimal information about what happened.

---

> **An action object can have any shape**.
>
> By convention, it is common to give it a string type that describes what happened.

---

### Step 2

A reducer function is where you will put your state logic.

It takes two arguments, the current state and the action object, and it returns the next state:

```js
function yourReducer(state, action) {
  // return next state for React to set
}
```

```js
function tasksReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === "changed") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
```

The code above uses if/else statements, but it’s a convention to use switch statements inside reducers.

```js
switch (action.type) {
  case 'added': {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  }
```

We recommend wrapping each `case` block into the `{` and `}` curly braces so that variables declared inside of different `cases` don’t clash with each other.

a `case` should usually end with a `return`.

If you’re not yet comfortable with switch statements, using if/else is completely fine.

---

## Step 3

Finally, you need to hook up the `tasksReducer` to your component. Import the `useReducer` Hook from React:

```js
import { useReducer } from "react";
```

Then you can replace `useState`:

```js
const [tasks, setTasks] = useState(initialTasks);
```

with `useReducer` like so:

```js
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

The `useReducer` Hook is similar to `useState` —— you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function).

But it’s a little different.

The `useReducer` Hook takes two arguments:

1. A reducer function

2. An initial state

And it returns:

1. A stateful value

2. A dispatch function (to “dispatch” user actions to the reducer)

[useReducer sandbox](https://codesandbox.io/s/react-usereducer-jl7vsc)

> you can even move the reducer to a different file.
>
> Component logic can be easier to read when you separate concerns like this.

---

### Comparing `useState` and `useReducer`

1. **Code size**

   Generally, with `useState` you have to write less code upfront.

   With `useReducer`, you have to write both a reducer function and dispatch actions.

   However, `useReducer` can help cut down on the code if many event handlers modify state in a similar way.

2. **Readability**

   **useState** is very easy to read when the state updates are simple.

   When they get more complex, they can bloat your component’s code and make it difficult to scan.

   In this case, `useReducer` lets you cleanly separate the how of update logic from the what happened of event handlers.

3. **Debugging**

   When you have a bug with `useState`, it can be difficult to tell where the state was set incorrectly, and why.

   With `useReducer`, you can add a console log into your reducer to see every state update, and why it happened (due to which `action`).

   If each `action` is correct, you’ll know that the mistake is in the reducer logic itself.

   However, you have to step through more code than with `useState`.

4. **Testing**

   A reducer is a pure function that doesn’t depend on your component.

   This means that you can export and test it separately in isolation.

   While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.

---

**Keep these two tips in mind when writing reducers**:

1. **Reducers must be pure.**

   Similar to state updater functions, reducers run during rendering! (Actions are queued until the next render.)

   This means that reducers must be pure—same inputs always result in the same output.

   They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component).

   They should update objects and arrays without mutations.

2. **Each action describes a single user interaction, even if that leads to multiple changes in the data.**

   For example, if a user presses “Reset” on a form with five fields managed by a reducer, it makes more sense to dispatch one `reset_form` action rather than five separate `set_field` actions.

   If you log every action in a reducer, that log should be clear enough for you to reconstruct what interactions or responses happened in what order. This helps with debugging!

---

Just like with updating objects and arrays in regular state, you can use the Immer library to make reducers more concise.

Use Immer if you want to write reducers in a mutating style.

---

[Implementation of useReducer](https://codesandbox.io/s/implementation-of-usereducer-26m2lz)
