# Implementation of `isReactive()`

In fact, we have already distinguished between `reactive objects` and `readonly objects` in `createGetter` implementation:

```ts
// higher-order function
function createGetter(isReadonly = false) {
  return function get(target, key) {
    const res = Reflect.get(target, key);
    if (!isReadonly) {
      track(target, key);
    }
    return res;
  };
}
```

So, we just need to trigger `get` operation.

The same applies to `isReadonly()`.
