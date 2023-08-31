# useCallback

## the problem

in react, **functions are different on every render by default.**

it's not the contents of functions are different. the function doesn't change, it's running the same code every time.

but in react, functions even if they have the same code, even if they're doing the same thing, they are going to be considered different on every render.

this means that `previous function === current function` will return `false`.

## how to fix it

we're going to use `useCallback` to fix it.

`useCallback` is a hook that is meant to be specifically used for this purpose.

what it does:

1. wrap your function
2. it will return to you a new function that is **memorized** which means that is frozen and will be identical across renders.

```tsx
import { useCallback } from 'react';

const cachedFn = useCallback(fn, dependencies);
// dependencies: [dep1, dep2, dep3...]
```

we can provide the dependency array which arrows you to control when this function should be different.

## dependency 

using `useCallback` is going to memorize the function and freeze the function in time,

but that also means that it's going to freeze everything in the function at a certain point in time.

if we're doing stuff with values, you're going to want to to put them in the `dependency` array to always get the up-to-date values.
