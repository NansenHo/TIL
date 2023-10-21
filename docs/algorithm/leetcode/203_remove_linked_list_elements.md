# 203. Remove Linked List Elements | Easy

## 用遍历的方式来做

在链表里，经常我们都需要对 `this.head == null` 来做判断。

有一个技巧可以让我们不需要再做这个判断，从而减少条件判断代码。

那就是设置一个 **哨兵(sentry)元素**。

比如有一个链表 `1=>2=>3=>4`，

正常情况下，遍历之前要先判断，`if (head)`，

但是可以在链表前设置一个哨兵，如 `哨兵=>1=>2=>3=>4`，

这样可以确保哨兵一直存在，不需要判断 `if (this.head)`，

最后 `return 哨兵.next` 即可。

```js
var removeElements = (head, val) => {
  let sentry = {
    next: head,
  };
  let p = sentry;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return sentry.next;
};
```
