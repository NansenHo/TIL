# 141. Linked List Cycle | Easy

## 使用 `cache`

如果链表中有环，那遍历就会一直在环里不停地绕，所以需要判断一个链表里是否有环。

思路：

1. 遍历整个链表

2. 用 `cache` 记录下每一个 `head`

3. 如果遍历到的 `head` 与 `cache` 中重复说明有环

因为这里我们最终返回的不是 `head`，所以在遍历中，不需要用临时变量 `p`。

只遍历了一次，所以时间复杂度为 $O(n)$。

`cache` 的长度取决于链表的长度，所以空间复杂度为 $O(n)$。

```ts
function hasCycle(head: ListNode | null): boolean {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return false;
}
```

## 快慢指针/双指针

让两个指针在一个线性表（链表/数组）里跑。

> 在队列题和虚拟 DOM 等里面都会用到双指针。

只遍历了一次，时间复杂度为 $O(n)$，
只有两个单独变量，空间复杂度为 $O(1)$。

```ts
function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode = head;
  let fast: ListNode = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```
