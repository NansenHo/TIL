# literal types

```ts
let name: "nansen"; // literal type
name = "John" // error mark
```

The variable can only be `"nansen"`.

```ts
let gender: "male" | "female" | "other"; // literal type and union type
gender = "male"; // okay
gender = "female"; // okay
gender = "man"; // don't work
```

gender can only be `"male"`, `"female"` or `"other"`.

literal type can be very useful when you use the union type, because now more than one value can be assigned.

you might have a variable where only certain values are expected.

a benefit of both of literal types and type alias could be **keeping your code just a little drier**.

dry means that **don't repeat yourself**.
