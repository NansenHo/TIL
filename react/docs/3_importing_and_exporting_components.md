# Describing the UI

## Your First Component 

A React component is a JavaScript function that you can sprinkle with markup.

## Importing and Exporting Component

Either `'./Gallery.js'` or `'./Gallery'` will work with React, though the former is closer to how native ES Modules work.

---

Depending on your setup, your root component could be in another file (not App.js), though.

If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.

---

### Default & named exports

There are two primary ways to export values with JavaScript: 

1. default exports

2. named exports

**A file can have no more than one default export, but it can have as many named export as you like.**

```js
// one default export
export default function Button() {
  ...
}
```

```js
// multiple named exports
export function Slider() {
  ...
}

export function Checkbox() {
  ...
}
```

```js
// named export(s) and one default export
export function Avatar() {
  ...
}

export default function FriendsList() {
  ...
}
```

| Syntax | Export statement | Import statement |
| --- | --- | --- |
| Default | `export default function Button() {...}` | `import Button from './Button.js';`<br/>`import Banana from './Button.js';` |
| Named | `export function Button() {...}` | `import { Button } from './Button.js';` |

> When you write a default import, you can put any name you want after `import`.
> 
> In contrast, with named imports, the name has to match on both sides.

Components without names, like `export default () => {...}`, are discouraged because they make debugging harder.

> To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoiding mixing them in a single file.

---


