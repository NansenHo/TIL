# array {ignore=true}

[toc]

## how to write array type

```ts
// infer
// typescript infers that here is a string type.
let stringArr = ["one", "two"];

// typescript infers that here is a (number | string) union type.
let numStrArr = [123, "one"];

// typescript infers that here is a any type.
let arr = [];
```

```ts
let bands: string[] = ["little big town"];

let mixedArr: (string | boolean | number)[] = ["nansen", 23, true];
```

If you want to be more strict and define something that is locked in to a type in a specific element position and a specific length of an array. You can create a [Tuple](./tuple.md).
