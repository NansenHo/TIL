# Updating Objects in State

State can hold any kind of JavaScript value, including objects.

---

You shouldn't change objects that you hold in the React state directly.

Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

> Although objects in React state are technically mutable, you should treat them as if they were immutable ---- like numbers, booleans, and strings.
> 
> Instead of mutating them, you should always replace them.
> 
> You should treat state as read-only.

---

Mutation is only a problem when you change existing objects that are already in state.

---

You can use the `...` object spread syntax so that you don't need to copy every property separately.

```js
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```

---

Note that the `...` spread syntax is "shadow" —— it only copies things one level deep.

This makes it fast, but it also means that if you want to update a nested property, you'll have to use it more than once.

---

```js
function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value
  });
}
```

You can also use the `[` and `]` braces inside your object definition to specify a property with dynamic name.

---

```js
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

If you wanted to update `person.artwork.city` in React, you would first need to produce the new `artwork` object (pre-populated with data from the previous one), and then produce the new `person` object which points at the new `artwork`.

```js
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

Or, written as a single function call: 

```js
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```

---

Objects are not really nested.

They are separate objects "pointing" at each other with properties.

---

If your state is deeply nested, you might want to consider flattening it.

---

If you don't want to change your state structure, you might prefer a shortcut to nested spreads.

Then you can use [use-immer](https://github.com/immerjs/use-immer).

> How does use-immer work?
> The `draft` provided by Immer is a special type of object, called a Proxy, that "records" what you do with it.
> 
> This is why you can mutate it freely as much as you like.

Immer is a great way to keep the update handlers concise, especially if there's nesting in your state, and copying objects leads to repetitive code.

---

Why is mutating state not recommended in React?

1. **Debugging**

    If you use `console.log` and don't mutate state, you can clearly see how state has changed between renders.

2. **Optimizations**

    Common React optimizations strategies rely on skipping work if previous props or state are the same as the next ones.

    If you never mutate state, it is very fast to check whether there were any changes.

3. **New Features**

    The new React features we're building rely on state being treated like a snapshot.

    If you're mutating past version of state, that may prevent you from using the new features.

4. **Requirement Changes**

    Some application features, like implementing Undo/Redo, showing a history of changes, or letting the user reset a form to earlier values, are easier to do when nothing is mutated.

    This is because you can keep past copies of state in memory, and reuse them when appropriate.

5. **Simpler Implementation**

    Because React doesn't rely on mutation, it does not need to do anything special with your objects.

    It does not need to hijack their properties, always wrap them into Proxies, or do other work at initialization as many "reactive" solutions do.

    This is also why React lets you put any objects into state —— no matter how large —— without additional performance or correctness pitfalls.

---

Recap: 

- Treat all state in React as immutable.

- When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.

- To reduce repetitive copying code, use Immer.
