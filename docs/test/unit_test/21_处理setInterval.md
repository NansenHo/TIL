# 处理 `setInterval`

## 简单案例

```ts
export function sayHi() {
  setInterval(() => {
    console.log("hi");
  }, 100);
}
```

```ts
it("should be called", () => {
  vi.useFakeTimers();
  vi.spyOn(console, "log");
  // vi.advanceTimersByTime(100);
  vi.advanceTimersToNextTimer();

  sayHi();

  expect(console.log).toBeCalledWith("hi");
});
```

用 `vi.advanceTimersByTime(100)` 和 `vi.advanceTimersToNextTimer()` 都没有问题，但不能使用 `vi.runAllTimers()`。

## 稍复杂的案例

```ts
export function sayHi() {
  setTimeout(() => {
    setInterval(() => {
      console.log("hi");
    }, 100);
  }, 1000);
}
```

这时，我们需要执行两次 `vi.advanceTimersToNextTimer()`。

或者使用 `vi.advanceTimersByTime(1100)` 一次性快进 `1100` 毫秒。

```ts
it("should be called", () => {
  vi.useFakeTimers();
  vi.spyOn(console, "log");
  vi.advanceTimersToNextTimer();
  vi.advanceTimersToNextTimer();

  sayHi();

  expect(console.log).toBeCalledWith("hi");
});
```
