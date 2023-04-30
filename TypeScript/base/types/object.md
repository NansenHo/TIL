# object {ignore=true}

[toc]

## how to write object type

```ts
type Band = {
  name: string;
  isActive: boolean;
  // ? makes the albums property optional.
  albums?: string[];
};

// We can use `interface` instead of `type`.
// interface has no equal sign like type.
interface Band {
  name?: string;
  isActive: boolean;
  albums: string[];
}

let littleBigTown: Band = {
  isActive: true,
  albums: ["The reason why"],
};

const getBandName = (band: Band) => {
// ?. can eliminate errors.
  return band.name?.toLocaleLowerCase();
};

console.log(getBandName(littleBigTown));
```
