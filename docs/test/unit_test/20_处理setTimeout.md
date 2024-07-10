# 处理 `setTimeout`

## 分析 SUT 的输入输出

根据 SUT 的**输入**和**输出**，可以确定应该采用什么方法来验证。

```ts
export class User {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  fetchData(callback: (data: string) => void, delay: number) {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, delay);
  }
}
```

我们来分析上述代码，

上述代码的输入和输出分别是：

- 输入
  - `callback`
  - `delay`
- 输出
  - 调用 `callback`

输出只是调用了 `callback` 而没有改变任何系统状态，所以我们需要采用行为验证的方式来测试。

## 替换真实时间的 API

接着我们来写测试代码：

```ts
it("should fetch user data", () => {
  const user = new User("1");
  const callback = vi.fn();

  user.fetchData(callback, 100);

  expect(callback).toBeCalledWith("Data for user with id: 1");
});
```

由于上述代码是同步执行的原因，所以不会通过测试。

这时需要使用 `vi.useFakeTimers()` 来替换真实的时间，

然后再使用 `vi.advanceTimersByTime(time)` 来让时间快进 `time` 毫秒。

或者也可以直接使用 `vi.advanceTimersToNextTime()` 自动快进到下一个时间节点，不需要指定具体的毫秒数。

```ts
it("should fetch user data", () => {
  vi.useFakeTimers();
  const user = new User("1");
  const callback = vi.fn();

  user.fetchData(callback, 100);
  // vi.advanceTimersByTime(100);
  vi.advanceTimerToNextTimer();

  expect(callback).toBeCalledWith("Data for user with id: 1");
});
```

> `vi.advanceTimerByTime(time)` 暴露了实现细节，下次我们修改了 `fetchData()` 的 `delay` 参数后，还需要再来维护 `time`。

为了不暴露实现细节，尽量使用 `vi.advanceTimerToNextTimer()` 更好。

但如果一个测试用例里，有两个 `setTimeout` 的话，难道要用两遍 `vi.advanceTimerToNextTimer()` 吗？

这时可以使用 `vi.runAllTimers()`

```ts
it("should fetch user data", () => {
  vi.useFakeTimers();
  const user = new User("0");
  const callback = vi.fn();

  user.fetchData(callback, 100);

  const user1 = new User("1");
  const callback1 = vi.fn();

  user1.fetchData(callback1, 100);

  vi.runAllTimers();

  expect(callback).toBeCalledWith("Data for user with id: 0");
  expect(callback1).toBeCalledWith("Data for user with id: 1");
});
```
