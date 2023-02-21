// 快慢指针 / 双指针
// 让两个指针在一个线性表（链表/数组）里跑。

// 在队列题和虚拟 DOM 等里面都会用到双指针

// 只遍历了一次，时间复杂度为 O(n)
// 只有两个单独变量，空间复杂度为 O(1)

var hasCycle = (head) => {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    // 快指针要比慢指针走得快，fast 一次跳两格，slow 一次跳一格
    fast = fast.next.next
    slow = slow.next
    // 这样一快一慢在同一跑道上往同一方向跑
    // 如果跑道是有环的，那肯定迟早会遇上
    if (fast === slow) return true
  }
  return false
}