# Choosing The State Structure

Don’t mirror props in state

A common example of redundant state is code like this:

```jsx
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
```

Here, a color state variable is initialized to the messageColor prop.

The problem is that if the parent component passes a different value of messageColor later (for example, 'red' instead of 'blue'), the color state variable would not be updated!

The state is only initialized during the first render.

---

“Mirroring” props into state only makes sense when you want to ignore all updates for a specific prop.

By convention, start the prop name with `initial` or `default` to clarify that its new values are ignored:

```jsx
function Message({ initialColor }) {
  // The `color` state variable holds the *first* value of `initialColor`.
  // Further changes to the `initialColor` prop are ignored.
  const [color, setColor] = useState(initialColor);
```

---

We should not code like this:

```jsx
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}
```

Currently, it stores the selected item as an object in the `selectedItem` state variable.

However, this is not great:

**the contents of the `selectedItem` is the same object as one of the items inside the `items` list.**

This means that the information about the item itself is duplicated in two places.

> If two state variables always update together, consider merging them into one.

---

Instead of a tree-like structure where each place has an array of its child places, you can have each place hold an array of its child place IDs.

Then store a mapping from each place ID to the corresponding place.

You can nest state as much as you like, but making it “flat” can solve numerous problems.

It makes state easier to update, and it helps ensure you don’t have duplication in different parts of a nested object.

---

[nested_visit_plan_useImmer](https://codesandbox.io/s/nested-visit-plan-useimmer-csn42v)

[nested_visit_plan](https://codesandbox.io/s/nested-visit-plan-pg2kwy)

--- 

Sometimes, you can also reduce state nesting by moving some of the nested state into the child components. 

This works well for ephemeral UI state that doesn’t need to be stored, like whether an item is hovered.

--- 

For UI patterns like selection, keep ID or index in state instead of the object itself.

---

[hover_starred_highlight](https://codesandbox.io/s/hover-starred-highlight-lxlfvl)


