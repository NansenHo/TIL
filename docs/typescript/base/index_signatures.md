# Index Signatures

## Why index signatures

```ts
function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000
```

`{ [key: string]: number }` is the index signature, which tells TypeScript that salaryObject has to be an object with **string type as key** and **number type as value**.

## Index signatures syntax

`String` type is the key and value:

other type is not allowed.

```ts
interface StringByString {
	[key: string]: string
}

const heroesInBooks: StringByString = {
  'Gunslinger': 'The Dark Tower',
  'Jack Torrance': 'The Shining'
};
```

The `string` type is the key, the value can be a `string`, `number`, or `boolean`:

other type is not allowed.

```ts
interface Options {
	[key: string]: string | number | boolean
	timeout: number
}

const options: Options {
	timeout: 1000,
	timeoutMessage: 'The request timed out!',
	isFileUpload: false
}
```

```ts
interface Student {
	[key: string]: string | string[] | number | number[] | undefined
	name: string
	GPA: number
	classes?: number[]
}

const John: Student = {
	name: 'John',
	GPA: 3.2,
	classes: [80, 75, 90],
  // ==================
	hobby: ['tennis', 'swim'],
  bestFriendName: 'Steve',
}

for (const key in John) {
  console.log(`${key}: ${John[key]}`)
}
```

The index signature maps a key type to a value type — that's all.
