// 这是一种树结构最常见，最简单的处理方式

var maxDepth = function(root) {
  // 需要终止条件，否则会无限循环
  // 终止条件为节点不存在时（深度为 0 时）
  if (root == null) {
    return 0
  }
  // 二叉树的最大深度
  // 通过递归拿到左右两边的最大深度
  // 可以通过比较，左右两边子树最大深度，然后取较大一方 + 1 得到
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}