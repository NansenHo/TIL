// 用遍历的方式来做

// 经常我们都需要对 this.head == null 来做判断
// 所以这里有一个技巧：设置一个哨兵(sentry)元素
// 比如有一个链表 1=>2=>3=>4，
// 正常情况下，遍历之前要先判断，if (head) 
// 但是可以在链表前设置一个哨兵，如 哨兵=>1=>2=>3=>4
// 这样可以确保哨兵一直存在，不需要判断 if (this.head)
// 最后 return 哨兵.next 即可。
// 这样可以精简 if else 代码。

var removeElements = (head, val) => {
  let sentry = {
    next: head
  }
  let p = sentry
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return sentry.next
}