# Type Assertions / TypeScript Casting

## Type assertions

Sometimes you will have information about the type of a value that TypeScript don't know about.

Type assertion allows you to set the type of a value and tell the compiler not to infer it.

This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

```ts
type One = string;
type Two = string | number;
type Three = "hello";

// convert to less or more specific
let value: string = "hello";
let value_1 = value as Two; // less specific
let value_2 = value as Three; // more specific
```

TypeScript allows you to sign a type that is either less specific or more specific with `as` keyword.

Besides the `as` keyword, we can also use angle brackets `<>`.

```ts
let value_3 = <One>"world";
let value_4 = <string | number>3;
```

But angle brackets cannot be used in TSX files.

```ts
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let val: string = addOrConcat(2, 2, "concat") as string;
let val_1: string = <string>addOrConcat(2, 2, "concat");
```

When we do this, we are saying hey, ignore the warming, we know we're returning a string.

```ts
let val_2: number = addOrConcat(2, 2, "concat") as number; // No warming
```

Be careful! A string is returned.

You tell TypeScript that you know better than it, but you make a mistake.

Mistake can be made with assertions when you don't set them up correctly, because typescript completely believe us.

```ts
10 as string; // error
```

The error we got is `Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.`

But remember TypeScript can't always check.

```ts
// No warming
let a = 10 as unknown as string;
console.log(typeof a); // number
```

There are two assertions in a row. That is called **double casting** or **force casting**.

## with Document Object Model

Type assertions are very useful with document object model.

```ts
const img_0 = document.querySelector("#img");
// intellisense: const img_0: Element | null

const img_1 = document.getElementById("#img");
// intellisense: const img_1: HTMLElement | null

const img = document.querySelector("img");
// intellisense: const img: HTMLImageElement | null

img.src; // red line under `img`
// error: 'img' is possibly 'null'.
```

We've had `Element`, `HTMLElement` and specific `HTMLImageElement`.

```ts
const img = document.querySelector("img") as HTMLImageElement;

img.src; // No warming
```

So, we need to tell typescript we know better than it, we created the web page, we know there is an image element in the web page.

```ts
const img_1 = document.getElementById("#img")! as HTMLImageElement;
img_1.src; // No warming
```

We used a non-null assertion `!` and type assertion.

```ts
const img = document.querySelector("img")!;
const next_img = <HTMLImageElement>document.querySelector("img");

img.src; // No warming
next_img.src; // No warming
```

```html
<p>Copyright &copy; <span id="year"></span></p>
```

```ts
const year = docuement.querySelector("#year")!;
const thisYear: string = new Data().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```
