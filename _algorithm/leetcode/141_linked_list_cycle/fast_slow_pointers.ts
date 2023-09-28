// 快慢指针 / 双指针
// 让两个指针在一个线性表（链表/数组）里跑。

// 在队列题和虚拟 DOM 等里面都会用到双指针

// 只遍历了一次，时间复杂度为 O(n)
// 只有两个单独变量，空间复杂度为 O(1)

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode = head
  let fast: ListNode = head
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) { return true }
  }
  return false
};