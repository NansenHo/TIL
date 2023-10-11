# Synchronizing with Effects

**Some components need to synchronize with external systems**.

For example, you might want to

1. control a non-React component based on the React state,

2. set up a server connection,

3. or send an analytics log when a component appears on the screen.

---

**Effects let you run some code after rendering** so that you can synchronize your component with some system outside of React.

---

Before getting to Effects, you need to be familiar with **two types of logic inside React components**:

1. **Rendering code**

   lives at the top level of your component.

   This is where you take the props and state, transform them, and return the JSX you want to see on the screen.

   Rendering code must be pure.
   Like a math formula, it should only calculate the result, but not do anything else.

2. **Event handlers**

   are nested functions inside your components that do things rather than just calculate them.

   An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen.

   Event handlers contain “side effects” (they change the program’s state) caused by a specific user action (for example, a button click or typing).

Sometimes this isn’t enough.

Consider a `ChatRoom` component that must connect to the chat server whenever it’s visible on the screen.

Connecting to a server is not a pure calculation (it’s a side effect) so it can’t happen during rendering.

However, there is no single particular event like a click that causes `ChatRoom` to be displayed.

**Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.**

---

**Don’t rush to add Effects to your components.**

Keep in mind that Effects are typically used to “step out” of your React code and synchronize with some external system.

This includes

1. browser APIs,

2. third-party widgets,

3. network,

4. and so on.

If your Effect only adjusts some state based on other state, you might not need an Effect.

---

**To write an Effect, follow these three steps:**

1. **Declare an Effect.**

   By default, your Effect will run after every render.

2. **Specify the Effect dependencies.**

   Most Effects should only re-run when needed rather than after every render.

3. **Add cleanup if needed.**

   Some Effects need to specify how to stop, undo, or clean up whatever they were doing.

---

### Step 1: Declare an Effect

```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

Every time your component renders, React will update the screen and then run the code inside `useEffect`.

In other words, `useEffect` “delays” a piece of code from running until that render is reflected on the screen.

[useEffect_useRef_play_pause_video](https://codesandbox.io/s/useeffect-useref-play-pause-video-vv7y6j)

---

> By default, Effects run after every render.
> This is why code like this will **produce an infinite loop**:
>
> ```js
> const [count, setCount] = useState(0);
> useEffect(() => {
>   setCount(count + 1);
> });
> ```
>
> Effects run as a result of rendering.
> Setting state triggers rendering.
>
> Effects should usually synchronize your components with an external system.
> If there’s no external system and you only want to adjust some state based on other state, you might not need an Effect.

---

### Step 2: Specify the Effect dependencies

By default, Effects run after every render. Often, **this is not what you want**:

- Sometimes, it’s slow.

  Synchronizing with an external system is not always instant, so you might want to skip doing it unless it’s necessary.

  For example, you don’t want to reconnect to the chat server on every keystroke.

- Sometimes, it’s wrong.

  For example, you don’t want to trigger a component fade-in animation on every keystroke.

  The animation should only play once when the component appears for the first time.

---

You can tell React to **skip unnecessarily re-running the Effect** by specifying an array of dependencies as the second argument to the `useEffect` call.

```js
useEffect(() => {
  // ...
}, [dependencies]);
```

Specifying `[dependencies]` as the dependency array tells React that it should skip re-running your Effect if `dependencies` is the same as it was during the previous render.

---

The dependency array can contain multiple dependencies.

React will only skip re-running the Effect if **all of the dependencies** you specify have exactly the same values as they had during the previous render.

> React compares the dependency values using the `Object.is` comparison.

---

**Notice that you can’t “choose” your dependencies.**

You will get a lint error if the dependencies you specified **don’t match what React expects based on the code** inside your Effect.

---

> Pitfall:
>
> **The behaviors without the dependency array and with an empty `[]` dependency array are different**:
>
> - This runs after **every render**
>
>   ```js
>   useEffect(() => {});
>   ```
>
> - This runs only **on mount** (when the component appears on the screen for the first time)
>
>   ```js
>   useEffect(() => {}, []);
>   ```
>
> - This runs on mount **and also if either `a` or `b` have changed** since the last render
>
>   ```js
>   useEffect(() => {}, [a, b]);
>   ```

---

> Deep Dive:
>
> **Why was the ref omitted from the dependency array?**
>
> This is because the `ref` object has a stable identity:
>
> **React guarantees you’ll always get the same object from the same `useRef` call on every render.**
>
> Therefore, it does not matter whether you include it or not.
>
> Including it is fine too:
>
> ```js
> function VideoPlayer({ src, isPlaying }) {
>   const ref = useRef(null);
>   useEffect(() => {
>     if (isPlaying) {
>       ref.current.play();
>     } else {
>       ref.current.pause();
>     }
>   }, [isPlaying, ref]);
> ```
>
> The `setState` functions returned by `useState` also have stable identity, so you will often see them omitted from the dependencies too.
>
> If the linter lets you omit a dependency without errors, it is safe to do.
>
> Omitting always-stable dependencies only works when the linter can “see” that the object is stable.
>
> For example, if `ref` was passed from a parent component, you would have to specify it in the dependency array.
>
> However, this is good because you can’t know whether the parent component always passes the same ref, or passes one of several refs conditionally. So your Effect would depend on which ref is passed.

---

### Step 3: Add cleanup if needed

You’re writing a `ChatRoom` component that needs to connect to the chat server when it appears.

You are given a `createConnection()` API that returns an object with `connect()` and `disconnect()` methods.

How do you keep the component connected while it is displayed to the user?


