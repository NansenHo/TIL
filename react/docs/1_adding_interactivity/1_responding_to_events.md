# Responding to Events

You can define an event handler inline in the JSX:

```jsx
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>
```

```jsx
<button onClick={() => {
  alert('You clicked me!');
}}>
```

---

Make sure that you use the appropriate HTML tags for your event handlers.

For example, to handle clicks, use `<button onClick={handleClick}></button>` instead of `<div onClick={handleClick}></div>`.

---

Using a real browser `<button>` enables built-in browser behaviors like keyboard navigation.

---

Event handlers will also catch events from any children your component might have.

We say that an event "bubbles" or "propagates" up the tree: it starts with where the event happened, and then goes up the tree.

---

```jsx
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```

If you click on either button, its `onClick` will run first, followed by the parent `<div>`'s `onClick`.

---

All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to.

---

If you want to prevent an event from reaching parent components, you need to call `e.stopPropagation()`.

---

[React Event Bubbling Capturing](https://www.robinwieruch.de/react-event-bubbling-capturing/)

> **Do not stop event propagation by default.**
> 
> If you would use `stopPropagation()` on every button in your project, but later you want to track user clicks on a document level, you will not receive these events anymore.
> 
> Using `stopPropagation()` by default will often lead to bugs, so use it only when necessary.

---

A `<form>` submit event, which happens when a button inside of it is clicked, will reload the whole page by default.

We can use `e.preventDefault()` on the event object to stop this from happening.

---

> `e.stopPropagation()` and `e.preventDefault()` are unrelated.
> 
> - `e.stopPropagation()` stops the event handlers attached to the tags above from firing.
> 
> - `e.preventDefault()` prevents the default browser behavior for the few events that have it.

---

Event handlers are the best place for side effects.

Unlike rendering functions, event handlers don't need to be pure, so it's great place to change something —— for example, change an input's value in response to typing, or change a list in response to a button press.
