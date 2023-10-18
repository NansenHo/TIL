# Fixing Race Conditions in React with useEffect - Notes

If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect.

Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.

---

**There are two common cases in which you don’t need Effects:**

1. **You don’t need Effects to transform data for rendering.**

   let’s say you want to filter a list before displaying it.
   You might feel tempted to write an Effect that updates a state variable when the list changes.
   However, this is inefficient.
   When you update the state, React will first call your component functions to calculate what should be on the screen.
   Then React will “commit” these changes to the DOM, updating the screen.
   Then React will run your Effects.
   If your Effect also immediately updates the state, this restarts the whole process from scratch!

2. **You don’t need Effects to handle user events.**

   let’s say you want to send an `/api/buy` POST request and show a notification when the user buys a product.

---

### Updating state based on props or state

```jsx
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...
}
```

```jsx
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  // ✅ Good: calculated during rendering
  const fullName = firstName + " " + lastName;
  // ...
}
```

When something can be calculated from the existing props or state, don’t put it in state. Instead, calculate it during rendering.

This makes your code faster (you avoid the extra “cascading” updates), simpler (you remove some code), and less error-prone (you avoid bugs caused by different state variables getting out of sync with each other).

---

### Caching expensive calculations

```jsx
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
```

```jsx
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  // ✅ This is fine if getFilteredTodos() is not slow.
  const visibleTodos = getFilteredTodos(todos, filter);
  // ...
}
```

Maybe `getFilteredTodos()` is slow or you have a lot of `todos`.

In that case you don’t want to recalculate `getFilteredTodos()` if some unrelated state variable like `newTodo` has changed.

```jsx
import { useMemo, useState } from "react";

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  // ✅ Does not re-run getFilteredTodos() unless todos or filter change
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter]
  );
  // ...
}
```

---

> **How to tell if a calculation is expensive?**
>
> In general, unless you’re creating or looping over thousands of objects, it’s probably not expensive.
>
> If you want to get more confidence, you can add a console log to measure the time spent in a piece of code:
>
> ```js
> console.time("filter array");
> const visibleTodos = getFilteredTodos(todos, filter);
> console.timeEnd("filter array");
> ```
>
> If the overall logged time adds up to a significant amount (say, 1ms or more), it might make sense to memoize that calculation.
>
> As an experiment, you can then wrap the calculation in `useMemo` to verify whether the total logged time has decreased for that interaction or not:
>
> ```js
> console.time("filter array");
> const visibleTodos = useMemo(() => {
>   return getFilteredTodos(todos, filter); // Skipped if todos and filter haven't changed
> }, [todos, filter]);
> console.timeEnd("filter array");
> ```
>
> `useMemo` won’t make the first render faster.
> It only helps you skip unnecessary work on updates.
>
> Keep in mind that your machine is probably faster than your users’ so it’s a good idea to test the performance with an artificial slowdown.
>
> Also note that measuring performance in development will not give you the most accurate results. (For example, when Strict Mode is on, you will see each component render twice rather than once.)
>
> To get the most accurate timings, **build your app for production and test it on a device like your users have.**

---

### Resetting all state when a prop changes

```js
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState("");

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment("");
  }, [userId]);
  // ...
}
```

```js
export default function ProfilePage({ userId }) {
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState("");
  // ...
}
```

By passing userId as a key to the Profile component, you’re asking React to treat two Profile components with different userId as two different components that should not share any state.

---

**Adjusting some state when a prop changes**

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}
```

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

A condition like `items !== prevItems` is necessary to avoid loops.

> Any other side effects (like changing the DOM or setting timeouts) should stay in event handlers or Effects to keep components pure.

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // ✅ Best: Calculate everything during rendering
  const selection = items.find((item) => item.id === selectedId) ?? null;
  // ...
}
```

---

### Sharing logic between event handlers

```js
function ProductPage({ product, addToCart }) {
  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigateTo("/checkout");
  }
  // ...
}
```

Let’s say that your app “remembers” the shopping cart between the page reloads.

If you add a product to the cart once and refresh the page, the notification will appear again.

**When you’re not sure whether some code should be in an Effect or in an event handler, ask yourself why this code needs to run.**

**Use Effects only for code that should run because the component was displayed to the user.**

```js
function ProductPage({ product, addToCart }) {
  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo("/checkout");
  }
  // ...
}
```

---

### Sending a POST request

```js
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  // 🔴 Avoid: Event-specific logic inside an Effect
  const [jsonToSubmit, setJsonToSubmit] = useState(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  }
  // ...
}
```

The `/api/register` POST request is not caused by the form being displayed.

You only want to send the request at one specific moment in time: when the user presses the button.

```js
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: This logic runs because the component was displayed
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // ✅ Good: Event-specific logic is in the event handler
    post("/api/register", { firstName, lastName });
  }
  // ...
}
```

When you choose whether to put some logic into an event handler or an Effect, the main question you need to answer is what kind of logic it is from the user’s perspective.

If this logic is caused by a particular interaction, keep it in the event handler. If it’s caused by the user seeing the component on the screen, keep it in the Effect.

---

### Chains of computations

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard(nextCard);
    }
  }

  // ...
```

There are two problems with this code:

1. It is very inefficient

   the component (and its children) have to re-render between each `set` call in the chain.

2. You will run into cases where the “chain” you wrote doesn’t fit the new requirements.

   Imagine you are adding a way to step through the history of the game moves.
   You’d do it by updating each state variable to a value from the past.
   However, setting the card state to a value from the past would trigger the Effect chain again and change the data you’re showing.
   Such code is often rigid and fragile.

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    }

    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert("Good game!");
        }
      }
    }
  }

  // ...
}
```

In some cases, you can’t calculate the next state directly in the event handler.

Imagine a form with multiple dropdowns where the options of the next dropdown depend on the selected value of the previous dropdown.

Then, a chain of Effects is appropriate because you are synchronizing with network.

---

### Initializing the application

Some logic should only run once when the app loads.

You might be tempted to place it in an Effect in the top-level component:

```js
function App() {
  // 🔴 Avoid: Effects with logic that should only ever run once
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);
  // ...
}
```

However, you’ll quickly discover that it runs twice in development.

This can cause issues—for example, maybe it invalidates the authentication token because the function wasn’t designed to be called twice.

In general, your components should be resilient to being remounted. This includes your top-level App component.

Although it may not ever get remounted in practice in production, following the same constraints in all components makes it easier to move and reuse code.

If some logic must run once per app load rather than once per component mount, add a top-level variable to track whether it has already executed:

```js
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}
```

You can also run it during module initialization and before the app renders:

```js
if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

To avoid slowdown or surprising behavior when importing arbitrary components, don’t overuse this pattern.

Keep app-wide initialization logic to root component modules like `App.js` or in your application’s entry point.

---

### Notifying parent components about state changes

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);

  function handleClick() {
    setIsOn(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }

  // ...
}
```

The `Toggle` updates its state first, and React updates the screen.

Then React runs the Effect, which calls the `onChange` function passed from a parent component.

Now the parent component will update its own state, starting another render pass.

**It would be better to do everything in a single pass.**

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  function updateToggle(nextIsOn) {
    // ✅ Good: Perform all updates during the event that caused them
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }

  function handleClick() {
    updateToggle(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      updateToggle(true);
    } else {
      updateToggle(false);
    }
  }

  // ...
}
```

React batches updates from different components together, so there will only be one render pass.

```js
// ✅ Also good: the component is fully controlled by its parent
function Toggle({ isOn, onChange }) {
  function handleClick() {
    onChange(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      onChange(true);
    } else {
      onChange(false);
    }
  }

  // ...
}
```

Whenever you try to keep two different state variables synchronized, try lifting state up instead!

---

### Passing data to the parent

```js
function Parent() {
  const [data, setData] = useState(null);
  // ...
  return <Child onFetched={setData} />;
}

function Child({ onFetched }) {
  const data = useSomeAPI();
  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);
  // ...
}
```

In React, data flows from the parent components to their children.

When you see something wrong on the screen, you can trace where the information comes from by going up the component chain until you find which component passes the wrong prop or has the wrong state.

When child components update the state of their parent components in Effects, the data flow becomes very difficult to trace.

Since both the child and the parent need the same data, let the parent component fetch that data, and pass it down to the child instead:

```js
function Parent() {
  const data = useSomeAPI();
  // ...
  // ✅ Good: Passing data down to the child
  return <Child data={data} />;
}

function Child({ data }) {
  // ...
}
```

This is simpler and **keeps the data flow predictable: the data flows down from the parent to the child.**

---

### Subscribing to an external store

Sometimes, your components may need to subscribe to some data outside of the React state. (a third-party library, or a built-in browser API ...)

Since this data can change without React’s knowledge, you need to manually subscribe your components to it.

This is often done with an Effect, for example:

```js
function useOnlineStatus() {
  // Not ideal: Manual store subscription in an Effect
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine);
    }

    updateState();

    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);
    return () => {
      window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
    };
  }, []);
  return isOnline;
}

function ChatIndicator() {
  const isOnline = useOnlineStatus();
  // ...
}
```

Although it’s common to use Effects for this, React has a purpose-built Hook for subscribing to an external store that is preferred instead.

Delete the Effect and replace it with a call to `useSyncExternalStore`:

```js
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function useOnlineStatus() {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
}

function ChatIndicator() {
  const isOnline = useOnlineStatus();
  // ...
}
```

This approach is less error-prone than manually syncing mutable data to React state with an Effect.

Typically, you’ll write a custom Hook like `useOnlineStatus()` above so that you don’t need to repeat this code in the individual components.

---

### Fetching data

Many apps use Effects to kick off data fetching.

It is quite common to write a data fetching Effect like this:

```js
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 🔴 Avoid: Fetching without cleanup logic
    fetchResults(query, page).then((json) => {
      setResults(json);
    });
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

Imagine you type `"hello"` fast. Then the `query` will change from `"h"`, to `"he"`, `"hel"`, `"hell"`, and `"hello"`.

This will kick off separate fetches, but there is no guarantee about which order the responses will arrive in.

For example, the `"hell"` response may arrive after the `"hello"` response. Since it will call `setResults()` last, you will be displaying the wrong search results.

This is called a **“race condition”**: **two different requests “raced” against each other and came in a different order than you expected**.

To fix the race condition, you need to add a cleanup function to ignore stale responses:

```js
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

This ensures that when your Effect fetches data, all responses except the last requested one will be ignored.

Handling race conditions is not the only difficulty with implementing data fetching.

You might also want to think about caching responses (so that the user can click Back and see the previous screen instantly), how to fetch data on the server (so that the initial server-rendered HTML contains the fetched content instead of a spinner), and how to avoid network waterfalls (so that a child can fetch data without waiting for every parent).

These issues apply to any UI library, not just React.

Solving them is not trivial, which is why modern frameworks provide more efficient built-in data fetching mechanisms than fetching data in Effects.

```js
function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(`/api/search?${params}`);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
```

Although this alone won’t be as efficient as using a framework’s built-in data fetching mechanism, moving the data fetching logic into a custom Hook will make it easier to adopt an efficient data fetching strategy later.

In general, whenever you have to resort to writing Effects, keep an eye out for when you can extract a piece of functionality into a custom Hook with a more declarative and purpose-built API like `useData` above.

raw `useEffect` calls you have in your components, the easier you will find to maintain your application.

---

If you can calculate something during render, you don’t need an Effect.

To cache expensive calculations, add `useMemo` instead of `useEffect`.

To reset the state of an entire component tree, pass a different `key` to it.

To reset a particular bit of state in response to a prop change, set it during rendering.

Code that runs because a component was displayed should be in Effects, the rest should be in events.

If you need to update the state of several components, it’s better to do it during a single event.

Whenever you try to synchronize state variables in different components, consider lifting state up.

You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.

---

[todo_page](https://codesandbox.io/s/todo-page-87kh79)

[todo_page_useMemo](https://codesandbox.io/s/todo-page-usememo-w9ymlz)
