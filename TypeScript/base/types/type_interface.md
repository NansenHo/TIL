# type and interface {ignore=true}

[toc]

## type

```ts
type stringOrNumber = string | number; // union type

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  isActive: boolean;
  // We can use a type alias inside of another type alias.
  albums: stringOrNumberArray;
};

// this also work
// we are representing our typescript types with a different name.
type UserId = stringOrNumber;
```