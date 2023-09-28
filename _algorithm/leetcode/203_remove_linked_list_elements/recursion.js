// 用递归的方式来处理

var removeElements = function(head, val) {
  // 先把边界情况划分出来
  if (head == null) {
    return head
  }
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
};