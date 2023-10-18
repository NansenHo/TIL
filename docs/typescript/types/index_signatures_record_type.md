# The differences between index signatures and record type

```ts
// index signatures cannot work with literal type.

interface Incomes = {
	[key: 'salary' | 'bonus' | 'sidehustle' ]: number
}
// (parameter) key: "salary" | "bonus" | "sidehustle"
//  An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead.

interface Incomes {
	[key: string]: number | string
}

const monthlyIncome: Incomes = {
	salary: '310,000',
	bonus: '810,000',
	sidebustle: 0
}

for (let revenue in monthlyIncome) {
	// index signature allows us to use `monthlyIncome[revenue]` directly.
	console.log(monthlyIncome[revenue])
}
```

```ts
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>
// Record type is smaller, and it allows us to use string literals.

const mouthlyIncome: Incomes = {
	salary: '310,000',
	bonus: '800,000',
	sidehustle: 0
}

for (let revenue in mouthlyIncome) {	
	console.log(mouthlyIncome[revenue as keyof Incomes])
}
// if use the Record utility type instead of providing an index signature like this
// you're still going to have to access `keyof` 
```
