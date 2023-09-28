# Tuple

Tuple is a more strict array that has a type in a specific element position and a specific length.

```ts
let myTuple: [string, number, boolean] = ["nansen", 25, true];

myTuple[3] = true; // illegal
// The fourth position is not defined.

let mixedArr = ["erica", 18, true];

mixedArr = myTuple; // legal
myTuple = mixedArr; // illegal
// because mixedArr may not have three elements.
```

```ts
type T1 = [a: number, b: string, c: Function]
const t1: T1 = [1, 'hello', ()=>{console.log('hello')}]

console.log(t1)
t1[2]() // hello
```