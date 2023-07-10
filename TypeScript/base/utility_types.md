# Utility Types

[TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## `Partial<Type>`

```ts
interface assignment {
  studentId: number;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: assignment,
  propsToUpdate: Partial<assignment>
): assignment => {
  return { ...assign, ...propsToUpdate };
};

let assign_1: assignment = {
  studentId: 163,
  title: "final project",
  grade: 9,
};

const updated_assign_1 = updateAssignment(assign_1, {
  grade: 10,
  verified: true,
});

console.log(updated_assign_1);
```

## `Required<Type>`: The opposite of `Partial`


`Required<Type>` construsts a type consisting of all properties of `Type` set to required.

basic usage: 

```ts
interface Props {
	a?: string
	b?: number
}

const something: Required<Props> = {
	a: 'hello',
	b: 10,
	// c: 'world' 
	// Type '{ a: string; b: number; c: string; }' is not assignable to type 'Required<Props>'.
  // Object literal may only specify known properties, and 'c' does not exist in type 'Required<Props>'.
}
```

## `Readonly<Type>`

`Readonly<Type>` constructs a type with all properties of `Type` set to `readonly`, meaning the properties of the constructed type cannot be reassigned.

basic usage: 

```ts
interface Props {
	a?: string
	b?: number
}

const something: Readonly<Props> = {
	a: 'hello',
	b: 10,
}

something.a = 'world' // Error
// Cannot assign to 'a' because it is a read-only property.

something.c = 'world' // Error
// Property 'c' does not exist on type 'Readonly<Props>'.
```

## `Record<Keys, Type>`

`Record<Keys, Type>` constructs an object type whose property keys are `Keys` and whose property values are `Type`.

This utility type can be used to map the properties of a type to another type.

basic usages:

```ts
const hexColorMap: Record<string, string> = {
	red: 'FF0000',
	green: '00FF00',
	blue: '0000FF'
}
```

```ts
type students = 'Sara' | 'John'
type letterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<students, letterGrades> = {
	Sara: 'A',
	John: 'U',
}
```

```ts
type students = 'Sara' | 'John'
interface Grades {
	assign1: number
	assign2: number
}

const gradeData: Record<students, Grades> = {
	Sara: { assign1: 80, assign2: 75 },
	John: { assign1: 75, assign2: 40 }
}
```

## `Pick<Type, Keys>`

`Pick<Type, Keys>` constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.

basic usage:

```ts
interface Todo {
	title: string
	description: string
	completed: boolean
}

type todoPreview = Pick<Todo, 'title' | 'completed'>

const todo: todoPreview = {
	title: 'Clean room',
	completed: false
}
```

## `Omit<Type, Keys>`: The opposite of `Pick`

`Omit<Type, Keys>` constructs a type by picking all properties of `Type` and then removing `Keys` (string literal and union of string literals).

basic usage:

```ts
interface Todo {
	title: string
	description: string
	createdAt: number
	completed: boolean
}

type todoPreview = Omit<Todo, 'description'> 

const todo: todoPreview = {
	title: 'Clean room',
	createdAt: 1615544252770,
	completed: false
}
```

## `Exclude<UnionType, ExcludedMenbers>`

`Exclude<UnionType, ExcludedMembers>` constructs a type by excluding from `UnionType` all union members that are assignable to `ExcludedMembers`.

```ts
type T0 = Exclude<'A' | 'B' | 'C', 'A'>
// type T0 = "B" | "C"
```

```ts
type T0 = Exclude<'A' | 'B' | 'C', 'A' | 'B'>
// type T0 = "C"
```

```ts
type T0 = Exclude<string | number | (()=>void), Function>
// type T0 = string | number
```

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T0 = Exclude<Shape, {kind: 'circle'}>
//  type T0 = 
// 		{ kind: "square"; x: number; }
//    | { kind: "triangle"; x: number; y: number; }
```

## `Extract<Type, Union>`

`Extract<Type, Union>` constructs a type by extracting from `Type` all union members that are assignable to `Union`.

```ts
type T0 = Extract<'A' | 'B' | 'C', 'A' | 'F'>
// type T0 = "A"
```

```ts
type T0 = Extract<number | string | (()=>void), Function>
// type T0 = () => void
```

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T0 = Extract<Shape, {kind: 'circle'}>
// type T0 = { kind: "circle"; radius: number; }
```

## `Awaited<Type>`

