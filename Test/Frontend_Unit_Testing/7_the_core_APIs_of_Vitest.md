# The core API of Vitest {ignore=true}

[toc]
<br/>

The APIs of Jest, MochaJS is similar to Vitest.

## links

[Vitest official page](https://vitest.dev/)

## `test` and `it`

type of `test`: `(name: string, fn: TestFunction, timeout?: number | TestOptions) => void`

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating.
The default is 5 seconds,
and can be configured globally with [testTimeout](https://vitest.dev/config/#testtimeout).

`test` alias `it`.

`it` is used in Moche and Jasmine framework.
`test` emerged from Jest framework.

> Jest framework think that `test` is more readable than `it`.
> But Jest framework also support `it`.

```js
import { test, it } from "vitest";

test("should do something", () => {});

it("should do something", () => {});
```

> in software engineering, **BDD, behavior-driven development**, is an agile software development process that encourages collaboration among developers, quality assurance experts, and customer representatives in a software project.
> It emerged from TDD.

You can use `test` or `it` freely, but don't use both of these APIs in a project.

> Consistently bad is better than inconsistently good.

## `describe` test suite

Using `describe` you can define a new suite in the current context, as a set of related tests or benchmarks and other nested suites.

A suite lets you organize your tests and benchmarks so reports are more clear.

```js
import { describe, expect, it } from "vitest";

descripe("remove", () => {
  const user = {
    name: "nansen",
  };

  it("should remove an item", () => {
    expect(user.name).toBe("nansen");
  });

  it("should remove two items", () => {
    expect(user.name).toBe("nansen");
  });
});
```

You can also nest describe blocks if you have a hierarchy of tests or benchmarks:

```js
import { describe, test, it } from "vitest";

bescripe("", () => {
  bescripe("", () => {
    it("", () => {});
    it("", () => {});
  });

  bescripe("", () => {
    it("", () => {});
    it("", () => {});
  });
});
```

## `expect`

`expect` is used to create assertions.

### `toBe` and `toEqual`

`toBe` can be used to assert if **primitives are equal** or **that objects share the same reference**.

> In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
> There are 7 primitive data types: `null`, `undefined`, `boolean`, `number`, `string`, `symbol`, and `BigInt`.

> If the objects **are not the same**, but you want to check if **their structures are identical**, you can use `toEqual`.

`toEqual` asserts if **actual value is equal to received one** or **has the same structure, if it is an object (compares them recursively)**.

> A deep equality will not be performed for `Error` objects. To test if something was thrown, use `toThrowError` assertion.

- `toBe` is used for primitives and objects that share the same reference.
- `toEqual` is used for value / objects (except Error object) that don't share the same reference.

```js
import { it, expect } from "vitest";

it("toBe", () => {
  // `toBe` equals to ===
  expect(1).toBe(1);
});
```

```js
import { it, expect } from "vitest";

const user = {
  name: "nansen",
};

it("toEqual", () => {
  expect(user).toEqual({
    name: "nansen",
  });
});
```

### `toBeTruthy` and `toBeFalsy`

`toBeTruthy` asserts that the value is true when converted to Boolean.

`toBeFalsy` asserts that the value is false when converted to Boolean.

> In JavaScript, a truthy value is a value that is considered `true` when encountered in a Boolean context.
> All values are truthy, except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN`.

```js
import { expect, test } from "vitest";

test("toBeTruthy", () => {
  expect(1).toBeTruthy();
});
```

### `toContain`

`toContain` asserts if **the actual value is in a array**. and it can also **check whether a string is a substring of another string**.

```js
import { expect, it } from "vitest";

const item1 = { name: "nansen" };
const item2 = { name: "erica" };
const list = [item1, item2];

it("toContain", () => {
  expect(list).toContain(item1);
});
```

### `toThrow` and `toThrowError`

Type: `(received: any) => Awaitable<void>`

`toThrowError` alias `toThrow`.

`toThrowError` asserts if a function throws an error when it is called.

You can provide an optional argument to test that specific error is thrown:

1. regular expression: error message matches the pattern.
2. string: error message includes the substring.

```js
import { expect, it } from "vitest";

it("toThrow", () => {
  function sayHi(name) {
    if (typeof name !== "string") {
      throw new Error("wrong name");
    }
    return `Hi, ${name}!`;
  }

  expect(sayHi(111)).toThrow("wrong");
});
```

## APIs of setup and teardown

### `beforeEach` and `beforeAll`

Type: `beforeEach/beforeAll(fn: () => Awaitable<void>, timeout?: number)`

`beforeEach` register a callback to be called once **before each of the tests in the current context runs**.

> How many times `test()` is called, how many times `beforeEach()` is called.

`beforeAll` register a callback to be called **once** before starting to run all tests in the current context.

If the function returns a promise, Vitest waits until the promise resolve before running the test.

Optionally, you can pass a timeout (in milliseconds) defining how long to wait before terminating.
The default is 5 seconds.

```js
import { beforeEach } from "vitest";

beforeEach(async () => {
  // Clear mock.
  await stopMocking();
  // Add some testing data before each test runs.
  await addUser({ name: "John" });
});
```

The `beforeEach` ensures that user is added for each test.

```js
import { beforeAll } from "vitest";

beforeAll(async () => {
  // called once before all tests run.
  await startMocking();
});
```

:thumbsup: Since vitest v0.10.0, **`beforeEach` and `beforeAll` also accept an optional cleanup function (equivalent to `afterEach` / `afterAll`)**.

```js
import { beforeEach, beforeAll } from "vitest";

beforeEach(async () => {
  // called once before each test runs.
  await prepareSomething();

  // clean up function,
  // called by once after each test runs.
  return async () => {
    await resetSomething();
  };
});

beforeAll(async () => {
  // called once before all tests run.
  await startMocking();

  // clean up function,
  // called by once after all tests run.
  return async () => {
    await stopMocking();
  };
});
```

### `afterEach` and `afterAll`

Type: `afterEach/afterAll(fn: () => Awaitable<void>, timeout?: number)`

`afterEach` register a callback to be called **after one of the tests in the current context completes**.

`afterAll` register a callback to be called once \*\*after all tests in the current context have run.

if the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can pass a timeout (in milliseconds) defining how long to wait before terminating.
The default is 5 seconds.

```js
import { afterEach } from "vitest";

afterEach(async () => {
  // clear testing data after each test completes.
  await clearTestingData();
});
```

```js
import { afterAll } from "vitest";

afterAll(async () => {
  // This method is called after all tests run.
  await clearTestingData();
});
```

If the function returns a promise, Vitest waits until the promise resolve before continuing.

### the order of APIs of setup and teardown calling

```js
import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  it,
} from "vitest";

// 1
beforeAll(() => {
  console.log("beforeAll");
});

// 2 5
beforeEach(() => {
  console.log("beforeEach");
});

// 3
it("", () => {
  console.log("it");
});

describe("nested", () => {
  // 6
  beforeEach(() => {
    console.log("nested beforeEach");
  });
  // 7
  it("nested it", () => {
    console.log("nested it");
  });
  // 8
  afterEach(() => {
    console.log("nested afterEach");
  });
});

// 4 9
afterEach(() => {
  console.log("afterEach");
});

// 10
afterAll(() => {
  console.log("afterAll");
});
```

### when to use them

- `beforeAll` (be called only once)

  1.  connect a database.
  2.  create a temporary file.
      <br/>

- `afterAll` (be called only once)

  1.  disconnect from a database.
  2.  delete a temporary file.
      <br/>

- `beforeEach` (how many times `test()` is called, how many times `beforeEach` is called. )

  1.  create a new data in the store.
  2.  set some state in the store.
      <br/>

- `afterEach` (how many times `test()` is called, how many times `afterEach` is called. )
  1.  remove some temporary data in the store.
  2.  reset some state in the store.

## filter

### `only`

1. `test.only()` Type: `(name: string, fn: TestFunction, timeout?: number) => void`
2. `bench.only()`
3. `describe.only()`

### `skip`

1. `test.skip()`
2. `bench.skip()`
3. `describe.skip()`

### Vitest CLI

You can pass an additional argument as the filter of the rest files to run. for Example

```bash
# api.spec.te
vitest api
```

`vitest watch/dev` run all test suites but watch for changes and rerun when they are changed.

`vitest run` perform a single run without watch mode.
