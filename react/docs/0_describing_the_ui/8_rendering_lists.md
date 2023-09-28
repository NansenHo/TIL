# Rendering Lists

`key`s tell React which array item each component corresponds to, so that it can match them up later.

This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.

A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.

---

### Displaying several DOM nodes for each list item

The short `<>...</>` [fragment](https://react.dev/reference/react/Fragment) syntax won't let you pass a key, so you need to 

1. either group them into a single `<div>`, 

2. or use the slightly longer and more explicit `<Fragment>` syntax.

```jsx
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

---

If your data is generated and persisted locally, use 

1. an incrementing counter

2. [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)

3. or a package like `uuid` 

when creating items.

---

### Rules of keys

1. **Keys must be unique among siblings.**

    However, it's okay to use the same keys for JSX nodes in different arrays.

2. **Keys must not change** or that defeats their purpose!

    Don't generate them while rendering.

---

React will use an item's index in the array as its key if you don't specify a `key` at all.

But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered.

Index as a key often leads to subtle and confusing bugs.

---

Don't generate keys on the fly.

e.g. with `key={Math.random()}`.

This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time.

---

Your components won't receive `key` as a prop.

It's only used as a hint by React itself.

> If your component needs an ID, you have to pass it as a separate prop: `<Profile key={id} userId={id} />`.

---

Nested lists in one component

```js
// data.js
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];
```

```js
// App.js
import { recipes } from './data.js';

export default function RecipeList() {
  const recipeItems = recipes.map(recipe =>
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>Recipes</h1>
      {recipeItems}
    </div>
  );
}
```
