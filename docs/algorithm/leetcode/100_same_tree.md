# 100. Same Tree | Easy

```js
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    // 都是 null 则相同
    return true;
  }
  if (p == null || q == null) {
    // 只有其中一个是 null 说明不相同
    return false;
  }
  if (p.val !== q.val) {
    // 如果两个值不同，说明不相同
    return false;
  }
  // 需要两边都相等才相同
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
