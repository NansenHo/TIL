# `||` operator and `??` operator

The `||` operator evaluates to the right-hand side if and only if the left-hand side is a falsy value.

The `??` operator (null coalescing) evaluates to the right-hand side if and only if the left-hand side is either `null` or `undefined`.

`false`, `0`, `NaN`, `""` (empty string) are for example considered falsy, but maybe you actually want those values. In that case, the `??` operator is the right operator to use.
