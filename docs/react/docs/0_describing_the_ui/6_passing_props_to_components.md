# Passing Props to a Component

React components use **props** to communicate with each other.

Every parent component can pass some information (any JavaScript value, including objects, arrays and functions) to its child components by giving them props.

---

React component functions accept a single argument, a `props` object:

```jsx
function Avatar(props) {
  let { person, size } = props;
}
```

--- 

If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting `=` and the default value right after the parameter.

```jsx
function Avatar({ person, size = 100 }) {
  ...
}
```

The default value is only used if the `size` prop is missing or if you pass `size={undefined}`.

But if you pass `size={null}` or `size={0}`, the default value will not be used.

---

You can forward props with the JSX spread syntax.

```jsx
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

---

Sometimes, you'll want to nest your own components

```jsx
<Card>
  <Avatar />
</Card>
```

When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`.

```jsx
import Avatar from './Avatar.js';

function Card({ children }) {
  console.log(children)
  // {type: ƒ Avatar(), key: null, ref: null, props: Object, _owner: FiberNode…}
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

---

A component may receive different props over time.

Props are not always static.

Props are immutable.

When a component needs to change its props (for example, in response to a user interaction or new data), it will have to "ask" its parent component to pass it different props —— a new object.

---

Props are read-only snapshots in time: every render receives a new version of props.
