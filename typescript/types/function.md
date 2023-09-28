# Function

## define function types

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

```ts
// we could be sending any type of data here that we want to log
funciton logMsg(message: any): void {
  console.log(message);
}
```

`void` type is for functions that do not return anything.

## type alias and interface

```ts
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = function (c, d) {
  return c * d;
};
```

The `mathFunction` type is an alias that we put up here that has two number parameters and returns a number.

```ts
interface mathFunction {
  (a: number, b: number): number;
}
let multiply: mathFunction = function (c, d) {
  return c * d;
};
```

This also works.

But, typically, when I think of interfaces, I'm thinking more about classes and be able to extend those.

when I'm thinking of functions and other basic types, I'm thinking of type aliases.

## optional parameters

```ts
// optional parameters
let addAll = (a: number, b: number, c?: number): number => {
  return a + b + c; // error mark under c
};
```

`c` is possibly "undefined", because it's optional.

```ts
let addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
```

Now, typescript is happy.

If you have an optional parameter, it needs to **be the last** in the list.
Your required parameters do need to come first.

```ts
// default parameter value
let addAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(addAll(2, 2)); // 6
```

```ts
let sumAll = (a: number = 2, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(sumAll(undefined, 2)); // 6
```

`a` and `c` both have a default value.

If you want to skip over `a`, you have to give it a `undefined` there.

```ts
type math = (a: number = 2, b: number, c: number = 2) => number;

interface math {
  (a: number = 2, b: number, c: number = 2): number;
}
```

The type and interface both have error marks under `a: number = 2` and `c: number = 2`.

## Rest parameters

[rest parameters - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```ts
let total = (...nums: number[]): number => {
  // reduce is a good function for totaling up an array of number
  return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(...[2, 2, 2])); // 6
```

```ts
let total = (a: number, ...nums: number[]): number => {
  // reduce is a good function for totaling up an array of number
  return nums.reduce((prev, curr) => prev + curr) + a;
};
console.log(total(2, ...[2, ,2, 2])); // 8
console.log(total(2, 2, 2, 2)); // 8
```

The rest parameter for the rest of parameters **should come at the end**.
All of your other required ones should come at the begining.
