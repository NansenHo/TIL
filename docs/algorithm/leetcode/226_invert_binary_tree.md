# 226. Invert Binary Tree | Easy

```js
var invertTree = function (root) {
  // 终止条件
  if (!root) {
    return root;
  }
  // 使用解构赋值来进行左右指针翻转
  // 翻转之前，对其子节点进行翻转（递归）
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
```
