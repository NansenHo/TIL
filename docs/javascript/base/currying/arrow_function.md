# Currying - Arrow Function

```js
const users = [
  { name: "John", age: 25 },
  { name: "John", age: 25 },
  { name: "John", age: 25 },
  { name: "John", age: 25 },
];
const cats = [
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
];

const catsColor = cats.map((cat) => {
  return cat.color;
});

const names = users.map((user) => {
  return user.name;
});

console.log(catsColor);
console.log(names);
```

We can use `currying` to optimize the code above:

```js
const users = [
  { name: "John", age: 25 },
  { name: "John", age: 25 },
  { name: "John", age: 25 },
  { name: "John", age: 25 },
];
const cats = [
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
  { color: "yellow", age: 1 },
];

const currying = (key) => (obj) => obj[key];

// const currying = function (key) {
//   return function (obj) {
//     return obj[key]
//   }
// }

console.log(users.map(currying("name")));
console.log(cats.map(currying("color")));
```
