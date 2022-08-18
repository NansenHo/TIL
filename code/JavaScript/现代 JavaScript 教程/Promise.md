# Promise

## 初步认识 Promise

先来认识两个概念：

1. **生产者代码（producing code）**: 回去处理一些事情，并需要一定的时间。比如请求接口数据。
   
2. **消费者代码（consuming code）**: 想要在“生产者代码”完成工作的第一时间就能获得其工作成果。许多函数可能都需要这个结果。

**Promise 则是将 “生产者代码” 和 “消费者代码” 连接在一起的一个特殊的 JavaScript 对象。**

有点像是订阅，“生产者代码” 花费它所需的任意长度时间来产出所承诺的结果，而 “promise” 将在 "生产者代码” / executor 准备好时，将结果向所有订阅了的代码开放。

但是 promise 实际上要比 订阅 更加复杂，拥有其他功能和局限性。

## 语法

### promise 的构造器 constructor

```js
let promise_case = new Promise(function (resolve, reject) {
  // executor 生产者代码
})
```

1. 传递给 `new Promise()` 的函数被称为 executor 。

2. 当 `new Promise()` 被创建后，executor 会自动执行，executor 里面包含了最终会产生结果的生产者代码。

3. 参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调。我们自己写的执行代码只在 executor 内部。
   当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：
   - resolve(value) —— 如果任务成功完成并带有结果 value。
   - reject(error) —— 如果出现了 error，error 即为 error 对象。

> 总结：
> executor 会自动运行并尝试执行一项工作。
> 尝试结束后，如果成功则调用 resolve，如果出现 error 则调用 reject。

`new Promise()` 返回的 `promise` 对象，具有以下内部属性：

1. state —— 最初是 "pending"，然后在 resolve 被调用时变为 "fulfilled"，或者在 reject 被调用时变为 "rejected"。
   - 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
   - 已兑现（fulfilled）：意味着操作成功完成。
   - 已拒绝（rejected）：意味着操作失败。
   
2. result —— 最初是 undefined，然后在 resolve(value) 被调用时变为 value，或者在 reject(error) 被调用时变为 error。

> 备注：
> 如果一个 promise 已经被兑现或被拒绝，那么我们也可以说它处于 已敲定（settled） 状态。
> 你还会听到一个经常跟 promise 一起使用的术语：已决议（resolved），它表示 promise 已经处于已敲定状态，或者为了匹配另一个 promise 的状态被“锁定”了。

