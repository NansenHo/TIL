# Optimizing `stop`

We that changing `obj.foo = 3` to `obj.foo++` in the previous `stop` unit test causes the test to fail.

Why does this happen?

Firstly, let's distinguish between `obj.foo++` and `obj.foo = 3`:

The former is equivalent to `obj.foo = obj.foo + 1`.

which involves two `get` operations and one `set` operation.

Whereas the latter involves only one `set` operation.

When a `get` operation is triggered, the dependencies will be re-collected, and that's why the unit test failed.
