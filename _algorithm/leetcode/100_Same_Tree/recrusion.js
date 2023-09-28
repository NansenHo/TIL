var isSameTree = function(p, q) {
  // 都是 null 则相同
  if (p == null && q == null) { return true }
  // 只有其中一个是 null 说明不相同
  if (p == null || q == null) { return false }
  // 如果两个值不同，说明不相同
  if (p.val !== q.val) { return false }
  // 需要两边都相等才相同
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};