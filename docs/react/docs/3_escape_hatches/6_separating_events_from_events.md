# Separating Events from Events

Sometimes, you also want a mix of both behaviors: an Effect that re-runs in response to some values but not others.

---

Props, state, and variables declared inside your component’s body are called reactive values.

---

Use a special Hook called [`useEffectEvent`](https://react.dev/reference/react/experimental_useEffectEvent) to extract this non-reactive logic out of your Effect:

```js
import { useEffect, useEffectEvent } from 'react';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });
  // ...
```

`useEffectEvent` is a part of your Effect logic, but it behaves a lot more like an event handler.

The logic inside it is not reactive, and it always “sees” the latest values of your props and state.

[useEffectEvent](https://codesandbox.io/s/useeffectevent-t9pdzy)

You can think of Effect Events as being very similar to event handlers.

The main difference is that **event handlers run in response to a user interactions, whereas Effect Events are triggered by you from Effects**.

Effect Events let you “break the chain” between the reactivity of Effects and code that should not be reactive.

---

Now let’s say you want to include the number of items in the shopping cart together with every page visit:

```js
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  useEffect(() => {
    logVisit(url, numberOfItems);
  }, [url]); // 🔴 React Hook useEffect has a missing dependency: 'numberOfItems'
  // ...
}
```

You used `numberOfItems` inside the Effect, so the linter asks you to add it as a dependency.

However, you don’t want the `logVisit` call to be reactive with respect to `numberOfItems`.

If the user puts something into the shopping cart, and the `numberOfItems` changes, this does not mean that the user visited the page again.

Split the code in two parts:

```js
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]); // ✅ All dependencies declared
  // ...
}
```

`onVisit` is an Effect Event. The code inside it isn’t reactive.

---

You might be wondering if you could call `onVisit()` with no arguments, and read the `url` inside it:

```js
const onVisit = useEffectEvent(() => {
  logVisit(url, numberOfItems);
});

useEffect(() => {
  onVisit();
}, [url]);
```

This would work, but it’s better to pass this `url` to the Effect Event explicitly.

**By passing url as an argument to your Effect Event, you are saying that visiting a page with a different url constitutes a separate “event” from the user’s perspective.**

The `visitedUrl` is a part of the “event” that happened:

```js
const onVisit = useEffectEvent((visitedUrl) => {
  logVisit(visitedUrl, numberOfItems);
});

useEffect(() => {
  onVisit(url);
}, [url]);
```

Since your Effect Event explicitly “asks” for the `visitedUrl`, now you can’t accidentally remove `url` from the Effect’s dependencies.

This becomes especially important if there is some asynchronous logic inside the Effect:

```js
const onVisit = useEffectEvent((visitedUrl) => {
  logVisit(visitedUrl, numberOfItems);
});

useEffect(() => {
  setTimeout(() => {
    onVisit(url);
  }, 5000); // Delay logging visits
}, [url]);
```

Here, `url` inside `onVisit` corresponds to the latest `url` (which could have already changed), but `visitedUrl` corresponds to the `url` that originally caused this Effect (and this `onVisit` call) to run.
