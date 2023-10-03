# Sharing State Between Components

Lifting state up often changes the nature of what you’re storing as state.

---

> **Controlled and uncontrolled components**
>
> It is common to call a component with some local state “uncontrolled”.
> For example, the original Panel component with an isActive state variable is uncontrolled because its parent cannot influence whether the panel is active or not.
> In contrast, you might say a component is “controlled” when the important information in it is driven by props rather than its own local state.
>
> Uncontrolled components are easier to use within their parents because they require less configuration.
> But they’re less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.
>
> In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each component usually has some mix of both local state and props.
> However, this is a useful way to talk about how components are designed and what capabilities they offer.

---

It doesn’t mean that all state lives in one place—but that for each piece of state, there is a specific component that holds that piece of information.

Instead of duplicating shared state between components, lift it up to their common shared parent, and pass it down to the children that need it.

[Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)

---

When you want to coordinate two components:

1. move their state to their common parent.

2. Then pass the information down through props from their common parent.

3. Finally, pass the event handlers down so that the children can change the parent’s state.

---

Make two inputs stay in sync.

```jsx
import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}
```

---

```js
function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

console.log(filterItems(foods, "su"));
// [
//   ({
//     id: 0,
//     name: "Sushi",
//     description:
//       "Sushi is a traditional Japanese dish of prepared vinegared rice",
//   },
//   {
//     id: 4,
//     name: "Dim sum",
//     description:
//       "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
//   })
// ];
```
