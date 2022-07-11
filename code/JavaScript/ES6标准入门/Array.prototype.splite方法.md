# Array.prototype.splite 方法

## 一个用 splite 方法来删除数组中某一项产生的bug

一般我们用 `[1, 2, 3, 4].splite(0, 1);` 来删除数组中的第一个元素。

但如果 splite 的第一个参数是一个传进来的变量，

那我们就要多考虑到一个情况，就是这个变量可能是 **undefined**。
因为 `[1, 2, 3, 4].splite(undefined, 1);` 还是会删掉第一个元素，
但很明显，如果是 undefined，那我们希望什么也不要被删掉。

所以如果有变量，那在传入 splite 之前要做判断，是 undefined 就不用 splite 了。