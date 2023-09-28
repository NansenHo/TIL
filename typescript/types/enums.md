# Enums

## What's enums

Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants.
Using enums can make it easier to document intent, or create a set of distinct cases.
TypeScript provides both **numeric** and **string-based enums**.

An enum can be defined using the `enum` keyword.

```ts
enum Grade {
  A,
  B,
  C,
  D,
}
console.log(Grade.A, Grade.B); // 0 1

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 1
console.log(Direction.Down); // 2

enum Band {
  A = 2,
  B = "string",
}
console.log(Band.B, Band.A); // string 2
```

```ts
enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}
let person: { name: string; gender: Gender };
person = { name : "nansen", gender: Gender.Male}
// `Gender.Male` is more readable than `0`
console.log(person) // { name: 'nansen', gender: 0 }
```