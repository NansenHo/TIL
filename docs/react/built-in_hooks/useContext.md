# useContext

`useContext` is a React Hook that lets you read and subscribe to context from your component.

```js
const value = useContext(SomeContext);
```

---

Call `useContext` at the top level of your component to read and subscribe to context.

```js
import { useContext } from 'react';

function MyComponent() {
  const some = useContext(SomeContext);
  // ...
```

`useContext` returns the **context value** (`some`) for **the context** (SomeContext) you passed.

To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.

To pass context to a `Button`, wrap it or one of its parent components into the corresponding context provider

```js
function MyPage() {
  return (
    <SomeContext.Provider value={something}>
      <Form />
    </SomeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
```

It doesn’t matter how many layers of components there are between the provider and the `Button`.

When a `Button` anywhere inside of Form calls `useContext(ThemeContext)`, it will receive `"dark"` as the value.

> `useContext()` always looks for the closest provider above the component that calls it.
> 
> It searches upwards and does not consider providers in the component from which you’re calling `useContext()`.

---

Often, you’ll want the context to change over time.

To update context, combine it with state.

Declare a state variable in the parent component, and pass the current state down as the context value to the provider.

```jsx
function MyPage() {
  const [something, setSomething] = useState('');
  return (
    <ThemeContext.Provider value={something}>
      <Form />
      <Button onClick={() => {
        setSomething('light');
      }}>
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}
```

```jsx
// ...
const [something, setSomething] = useState('');
// ...
<ThemeContext.Provider value={{something, setSomething}}>
</ThemeContext.Provider>
```

---

```jsx
<TasksContext.Provider value={tasks}>
  <TasksDispatchContext.Provider value={dispatch}>
    // ...
  </TasksDispatchContext.Provider>
</TasksContext.Provider>
```

---

Often, instead of `null`, there is some more meaningful value you can use as a default: 

```js
const ThemeContext = createContext('light');
```

This also helps your components work well in a test environment without setting up a lot of providers in the tests.

---

You can override the context for a part of the tree by wrapping that part in a provider with a different value.

```js
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

You can nest and override providers as many times as you need.

---

You can pass any values via context, including objects and functions.

```jsx
function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      <Page />
    </AuthContext.Provider>
  );
}
```

Whenever MyApp re-renders (for example, on a route update), this will be a different object pointing at a different function, 

so React will also have to re-render all components deep in the tree that call `useContext(AuthContext)`.

you may wrap the login function with `useCallback` and wrap the object creation into `useMemo`.

This is a performance optimization:

```jsx
import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
```

As a result of this change, even if `MyApp` needs to re-render, the components calling `useContext(AuthContext)` won’t need to re-render unless `currentUser` has changed.

---

If you forget to specify value, it’s like passing `value={undefined}`.

---

Note that the default value from your createContext(defaultValue) call is only used if there is no matching provider above at all. 

If there is a `<SomeContext.Provider value={undefined}>` component somewhere in the parent tree, the component calling `useContext(SomeContext)` will receive `undefined` as the context value.
