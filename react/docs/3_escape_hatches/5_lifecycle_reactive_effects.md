# Lifecycle of Reactive Effects

Effects have a different lifecycle from components. Components may mount, update, or unmount.

---

An Effect can only do two things:

1. to **start synchronizing something**, and

2. later to **stop synchronizing it**.

---

Intuitively, you might think that React would start synchronizing when your component mounts and stop synchronizing when your component unmounts. However, this is not the end of the story!

> This cycle can happen multiple times if your Effect depends on props and state that change over time.

Sometimes, it may also be necessary to start and stop synchronizing multiple times while the component remains mounted.

---

> If your Effect don’t return a cleanup function at all, React will behave as if you returned an empty cleanup function.

---

**Each Effect represents a separate synchronization process**

Each Effect in your code should represent a separate and independent synchronization process.

```js
function ChatRoom({ roomId }) {
  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    // ...
  }, [roomId]);
  // ...
}
```

---

```js
function ChatRoom({ roomId }) {
  // Props change over time
  const [serverUrl, setServerUrl] = useState("https://localhost:1234"); // State may change over time

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // Your Effect reads props and state
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // So you tell React that this Effect "depends on" on props and state
  // ...
}
```

---

The empty `[]` dependency array means this Effect connects to the chat room only when the component mounts, and disconnects only when the component unmounts.

---

**All variables declared in the component body are reactive**

Props and state aren’t the only reactive values.

Values that you calculate from them are also reactive.
If the props or state change, your component will re-render, and the values calculated from them will also change.

This is why **all variables from the component body used by the Effect should be in the Effect dependency list**.

```js
function ChatRoom({ roomId, selectedServerUrl }) {
  // roomId is reactive
  const settings = useContext(SettingsContext); // settings is reactive
  const serverUrl = selectedServerUrl ?? settings.defaultServerUrl; // serverUrl is reactive
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // Your Effect reads roomId and serverUrl
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // So it needs to re-synchronize when either of them changes!
  // ...
}
```

`serverUrl` is a regular variable that you calculate during rendering. But it’s calculated during rendering, so it can change due to a re-render. This is why it’s reactive.

All values inside the component (including props, state, and variables in your component’s body) are reactive.
Any reactive value can change on a re-render, so you need to include reactive values as Effect’s dependencies.

---

> **Mutable values (including global variables) aren’t reactive.**
>
> **A mutable value like `location.pathname` can’t be a dependency.**
>
> It’s mutable, so it can change at any time completely outside of the React rendering data flow.
> Changing it wouldn’t trigger a re-render of your component.
>
> This also breaks the rules of React because reading mutable data during rendering (which is when you calculate the dependencies) breaks purity of rendering.
>
> Instead, you should read and subscribe to an external mutable value with `useSyncExternalStore`.
>
> **A mutable value like `ref.current` or things you read from it also can’t be a dependency.**

---

> In some cases, React knows that a value never changes even though it’s declared inside the component.
>
> The set function returned from `useState` and the ref object returned by `useRef` are stable.
> They are guaranteed to not change on a re-render.
>
> Stable values aren’t reactive, so you may omit them from the list.
> Including them is allowed: they won’t change, so it doesn’t matter.

---

What to do when you don’t want to re-synchronize?

**You could instead “prove” to the linter that these values aren’t reactive values.**

```js
const serverUrl = "https://localhost:1234"; // serverUrl is not reactive
const roomId = "general"; // roomId is not reactive

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []); // ✅ All dependencies declared
  // ...
}
```

```js
// serverUrl and roomId aren’t calculated during rendering, so they’re not reactive:
function ChatRoom() {
  useEffect(() => {
    const serverUrl = "https://localhost:1234"; // serverUrl is not reactive
    const roomId = "general"; // roomId is not reactive
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []); // ✅ All dependencies declared
  // ...
}
```

---

You can’t “choose” your dependencies. Your dependencies must include every reactive value you read in the Effect.

---

**Avoid relying on objects and functions as dependencies.**

If you create objects and functions during rendering and then read them from an Effect, they will be different on every render.
This will cause your Effect to re-synchronize every time.

---

[useEffect_cursor_spot](https://codesandbox.io/s/useeffect-cursor-spot-48gqd3)
[useEffect_fetch](https://codesandbox.io/s/useeffect-fetch-wh7knw)
