function hasCycle(head: ListNode | null): boolean {
  let cache = new Set()
  while (head) {
      if (cache.has(head)) { return true }
      else { cache.add(head) }
      head = head.next
  }
  return false
};

// 如果链表中有环，那遍历就会一直在环里不停地绕
// 所以需要判断一个链表里是否有环

// 思路：
// 1. 遍历整个链表
// 2. 用 cache 记录下每一个 head
// 3. 如果遍历到的 head 与 cache 中重复说明有环

// 因为这里我们最终返回的不是 head 
// 所以在遍历中，不需要用临时变量 p

// 只遍历了一次，所以时间复杂度为 O(n)
// cache 的长度取决于链表的长度，所以空间复杂度为 O(n)