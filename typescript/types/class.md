# class

## Base Usage

Base class:

```ts
class coder {
  // the property menber
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(
    name: string, 
    music: string, 
    age: number, 
    lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
```

We can use modifiers to let it be more dry:

```ts
class Coder {
  constructor(
    // "public readonly" means once the name is assigned, it cannot be changed.
    public readonly name: string,
    public music: string,
    // "private" means age property can only be accessed in the class
    private age: number = 25,
    protected lang: string = 'TypeSript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

const nansen = new Coder("nansen", "JayChou")
```

> Assignments in the body of the constructor are not required here.
> It is not an error if you leave them as I did, but it's not required.

modifiers:

1. public
2. readonly
3. private
4. protected

The differences between "protected" and "private":

- "protected" property can be accessed inside of the class, but it could also be accessed inside of derived classes.

- "private" property can not be accessed inside of derived classes.

```ts
class Coder {
  constructor(
    private age: number = 25,
    protected lang: string
  ) {
    this.age = age;
  }

  public getAge() {
    return this.age
  }
}

const nansen = new Coder('typescript')

console.log(nansen.getAge) // We can get the age 25.
console.log(nansen.age) // property 'age' is private and only accessible within class 'Coder'.
console.log(nansen.lang) // Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
```

> but even typescript compiler doesn't like "console.log(nansen.age)" and "console.log(nansen.lang)", it is still legal javascript.

We can't access private property and protected property directly outside of the class.

## `!`

```ts
class Coder {
  // "!" means that we are not going to initialize this right away.
  // Not initialized, but no error
  secondLang!: string; // optional
  constructor(
    public readonly name: string,
    protected lang: string
  ) {
    this.name = name;
    this.lang = lang;
  }
}

const nansen = new Coder("nansen", "TypeScript") 
```

## Extend Class

```ts
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string, // still "private" and "readonly"
    lang: string, // still "protected"
  ){
    super(name, lang)
    this.computer = computer
  }
}
```

## Apply an interface to a class

```ts
interface musician {
  name: string
  instrument: string
  play(action: string): string
}

class Guitarist implements musician {

  constructor(
    public name: string, // can't be number
    public instrument: string,
  ){
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums')) // Jimmy strums the guitar
```

## `static` keyword

Static properties cannot be directly accessed on instances of the class.

Instead, they're accessed on the class itself.

静态方法可以通过 `this.` 调用同一个类里面的静态方法。
这里的 this 指向类本身，而不是实例。

```ts
class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')


console.log(John.id)     // 1
console.log(Steve.id)    // 2
console.log(Amy.id)      // 3
console.log(Peeps.count) // 3
```

## set and get keyword

```ts
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((i) => typeof i === "string")) {
      this.dataState = value
      return
    } else throw new Error('Param is not an array of string') 
  }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data) // [ 'Neil Young', 'Led Zep' ]
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data) // [ 'Neil Young', 'Led Zep', 'ZZ Top' ]
MyBands.data = 'Van Halen' // Type 'string' is not assignable to type 'string[]'.
MyBands.data = ['Van Halen']
console.log(MyBands.data) // [ 'Van Halen' ]
```
