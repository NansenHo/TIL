# The `keyof` type operator

The `keyof` operator takes an object type and produces a string or numeric literal union of its keys.

```ts
type Point = {
	x: number
	y: number
}

type P = keyof Point

// type P = 'x' | 'y'

let p1: P = 'x'
let p2: P = 'y'

let p3: P = 1 // Type '1' is not assignable to type 'keyof Point'.
```

```ts
type Person = {
  name: string;
};

type PersonKey = keyof Person;
// type PersonKey = 'name'
```

If the type has a `string` or `number` index signature, `keyof` will return those types instead:

```ts
type Person = { [key: string]: string | number }

type P = keyof Person
// type P = string | number
```

> `P` is `string | number` ---- this is because JavaScript Object keys are always coerced to a string, so `obj[0]` is always the same as `obj['0']`.

```ts
type Arrayish = { [key: number]: unknown }

type NumberType = keyof Arrayish
// type NumberType = number
```
