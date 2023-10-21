# Array Splice

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 

```js
Array.splice(start, deleteCounts, item1, ..., itemN)
```

## Recording A Bug 

Usually, we use `[1, 2, 3, 4].splice(0, 1);` to remove the first element in an array.

但如果 `splice` 的第一个参数是一个传进来的变量，

那我们就要多考虑到一个情况，就是这个变量可能是 **undefined**。

因为 `[1, 2, 3, 4].splice(undefined, 1);` 还是会删掉第一个元素，

但其实如果是 `undefined`，那我们希望什么也不要被删掉。

所以如果有变量，那在传入 `splice` 之前要做判断，是 `undefined` 就不用 `splice` 了。