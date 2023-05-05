# type and interface

```ts
type stringOrNumber = string | number; // union type
```

We can use a type alias instead of a union type.

```ts
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  isActive: boolean;
  albums: stringOrNumberArray;
};

// this also work
type UserId = stringOrNumber;
```

We can use a type alias inside of another type alias.
We are representing our typescript types with a different name.

```ts
interface PostId = stringOrNumber // error
```

We can not do this with an interface.

**The differences**:

1. interfaces think about those more as objects or classes if you will.

2. types you can think of as an alias for any type of typescript type that we might assign.