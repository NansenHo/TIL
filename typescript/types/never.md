# never

`never` is a basic type, but you don't see it often.

```ts
let createError = (msg: string) => {
  throw new Error(msg);
};

let create Error = (msg: string): never => {
  throw new Error(msg);
};
```

the intellisense of the two function above: `let createError: (msg: string) => never`.

```ts
// intellisense
// const infinite: () => never
const infinite = () => {
  let i: number = 0;
	while (true) {
		i++
	}
};
```

It will also be a `never` type or a `never` return type from a function, if that function has an **infinite or endless loop** inside.

If you see `never`, make sure you want to throw an error, if not you probably a problem like an endless loop inside your function.

## useful `never`

```ts
const stringOrNumber = (a: string | number): string => {
	if (typeof a === 'number') {
		return 'It is a number.'
	}
	if (typeof a === 'string') {
		return 'It is a string.'
	}
};
```

TypeScript puts red line under `: string =>` and the intellisense display the information that is `Function lacks ending return statement and return type does not include 'undefined'.`.

```ts
const createError = (msg: string) => {
  throw new Error(msg);
};

const stringOrNumber = (a: string | number): string => {
  if (typeof a === "number") {
    return "It is a number.";
  }
  if (typeof a === "string") {
    return "It is a string.";
  }
  return createError("This should never happen!");
};
```

Essentially, TypeScript needs that **explicit return with the possible error** when we do not have an explicit return.
