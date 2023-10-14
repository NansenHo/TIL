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
> }); // No dependencies
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

---

> ```jsx
> import { useEffect } from "react";
> import { createConnection } from "./chat.js";
>
> export default function ChatRoom() {
>   useEffect(() => {
>     const connection = createConnection();
>     connection.connect();
>   }, []);
>   return <h1>Welcome to the chat!</h1>;
> }
> // Console (2)
> // ✅ Connecting...
> // ✅ Connecting...
> ```
>
> This Effect only runs on mount, so you might expect `"✅ Connecting..."` to be printed once in the console.
>
> However, if you check the console, `"✅ Connecting..."` gets printed twice. Why does it happen?
>
> **In development React remounts every component once immediately after its initial mount.**
>
> Seeing the `"✅ Connecting..."` log twice helps you notice the real issue:
>
> your code doesn’t close the connection when the component unmounts.
>
> To fix the issue, return a cleanup function from your Effect:
>
> ```jsx
> useEffect(() => {
>   const connection = createConnection();
>   connection.connect();
>   return () => {
>     connection.disconnect();
>   };
> }, []);
> // Console (3)
> // ✅ Connecting...
> // ❌ Disconnected.
> // ✅ Connecting...
> ```
>
> React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed).
>
> This is the correct behavior in development.
>
> There’s an extra connect/disconnect call pair because React is probing your code for bugs in development. This is normal—don’t try to make it go away!
>
> **In production, you would only see `"✅ Connecting..."` printed once.**
>
> Remounting components only happens in development to help you find Effects that need cleanup.
>
> You can turn off Strict Mode to opt out of the development behavior, but we recommend keeping it on.
> This lets you find many bugs like the one above.

---

The cleanup function should stop or undo whatever the Effect was doing.

The rule of thumb is that the user shouldn’t be able to distinguish between the Effect running once (as in production) and a setup → cleanup → setup sequence (as you’d see in development).

---

**Most of the Effects you’ll write will fit into one of the common patterns below.**

1. **Controlling non-React widgets**

   Sometimes you need to add UI widgets that aren’t written to React.

   let’s say you’re adding a map component to your page.
   It has a `setZoomLevel()` method, and you’d like to keep the zoom level in sync with a `zoomLevel` state variable in your React code.

   ```js
   useEffect(() => {
     const map = mapRef.current;
     map.setZoomLevel(zoomLevel);
   }, [zoomLevel]);
   ```

   Note that there is no cleanup needed in this case.
   In development, React will call the Effect twice, but this is not a problem because calling `setZoomLevel` twice with the same value does not do anything.
   It may be slightly slower, but this doesn’t matter because it won’t remount needlessly in production.

   Some APIs may not allow you to call them twice in a row.

   For example, the `showModal` method of the built-in `<dialog>` element throws if you call it twice.

   ```js
   useEffect(() => {
     const dialog = dialogRef.current;
     dialog.showModal();
     return () => dialog.close();
   }, []);
   ```

   In development, your Effect will call `showModal()`, then immediately `close()`, and then `showModal()` again.
   This has the same user-visible behavior as calling `showModal()` once, as you would see in production.

2. **Subscribing to events**

   If your Effect subscribes to something, the cleanup function should unsubscribe:

   ```js
   useEffect(() => {
     function handleScroll(e) {
       console.log(window.scrollX, window.scrollY);
     }
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   ```

3. **Triggering animations**

   If your Effect animates something in, the cleanup function should reset the animation to the initial values:

   ```js
   useEffect(() => {
     const node = ref.current;
     node.style.opacity = 1; // Trigger the animation
     return () => {
       node.style.opacity = 0; // Reset to the initial value
     };
   }, []);
   ```

4. **Fetching data**

   If your Effect fetches something, the cleanup function should either **abort the fetch** or **ignore its result**:

   > In addition to ignoring the result of an outdated API call, you can also use [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to cancel the requests that are no longer needed.
   >
   > However, by itself this is not enough to protect against race conditions.

   More asynchronous steps could be chained after the fetch, so using an explicit flag like ignore is the most reliable way to fix this type of problems.

   ```js
   useEffect(() => {
     let ignore = false;

     async function startFetching() {
       const json = await fetchTodos(userId);
       if (!ignore) {
         setTodos(json);
       }
     }

     startFetching();

     return () => {
       ignore = true;
     };
   }, [userId]);
   ```

   [useEffect_fetch_api](https://codesandbox.io/s/useeffect-fetch-api-9k3tc3)

   You can’t “undo” a network request that already happened, but your cleanup function should ensure that the fetch that’s not relevant anymore does not keep affecting your application.

   **In development, you will see two fetches in the Network tab.**

   **In production, there will only be one request.**

   If the second request in development is bothering you, the best approach is to use a solution that deduplicates requests and caches their responses between components:

   ```js
   function TodoList() {
     const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);
     // ...
   }
   ```

   This will not only improve the development experience, but also make your application feel faster.

   For example, the user pressing the Back button won’t have to wait for some data to load again because it will be cached.

   You can either build such a cache yourself or use one of the many alternatives to manual fetching in Effects.

5. **Sending analytics**

   Consider this code that sends an analytics event on the page visit:

   ```js
   useEffect(() => {
     logVisit(url); // Sends a POST request
   }, [url]);
   ```

   To debug the analytics events you’re sending, you can deploy your app to a staging environment (which runs in production mode) or temporarily opt out of Strict Mode and its development-only remounting checks.

   You may also send analytics from the route change event handlers instead of Effects.

   > For more precise analytics, [intersection observers](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) can help track which components are in the viewport and how long they remain visible.

6. **Not an Effect: Initializing the application**

   Some logic should only run once when the application starts.

   You can put it outside your components:

   ```jsx
   if (typeof window !== "undefined") {
     // Check if we're running in the browser.
     checkAuthToken();
     loadDataFromLocalStorage();
   }

   function App() {
     // ...
   }
   ```

   This guarantees that such logic only runs once after the browser loads the page.

7. **Not an Effect: Buying a product**

   Sometimes, even if you write a cleanup function, there’s no way to prevent user-visible consequences of running the Effect twice.

   For example, maybe your Effect sends a POST request like buying a product:

   ```jsx
   useEffect(() => {
     // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
     fetch("/api/buy", { method: "POST" });
   }, []);
   ```

   You wouldn’t want to buy the product twice.
   You don’t want to buy the product when the user visits a page.

   Buying is not caused by rendering; it’s caused by a specific interaction.

   > From a user’s perspective, visiting a page shouldn’t be different from visiting it, clicking a link, then pressing Back to view the page again.
   >
   > React verifies that your components abide by this principle by remounting them once in development.

---

> **What are good alternatives to data fetching in Effects?**
>
> Writing `fetch` calls inside Effects is a popular way to fetch data, especially in fully client-side apps.
>
> However, this is a very manual approach and it has significant downsides:
>
> 1. Effects don’t run on the server.
>
>    This means that the initial server-rendered HTML will only include a loading state with no data.
>    The client computer will have to download all JavaScript and render your app only to discover that now it needs to load the data.
>    This is not very efficient.
>
> 2. Fetching directly in Effects makes it easy to create “network waterfalls”.
>
>    You render the parent component, it fetches some data, renders the child components, and then they start fetching their data.
>    If the network is not very fast, this is significantly slower than fetching all data in parallel.
>
> 3. Fetching directly in Effects usually means you don’t preload or cache data.
>
>    If the component unmounts and then mounts again, it would have to fetch the data again.
>
> 4. It’s not very ergonomic.
>
> This list of downsides is not specific to React.
> It applies to fetching data on mount with any library.
>
> Like with routing, data fetching is not trivial to do well, so we recommend the following approaches:
>
> 1. **If you use a framework, use its built-in data fetching mechanism.**
>
> 2. **Otherwise, consider using or building a client-side cache.**

---

React always cleans up the previous render’s Effect before the next render’s Effect.

---

**Each render has its own Effects**

---

React will remount the Effects whenever you save a file in development. Both of these behaviors are development-only.
