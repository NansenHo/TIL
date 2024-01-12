# 处理 Promise

## 处理一般的 Promise

```ts
export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve("1");
  });
}
```

`fetchUserData` 只是返回一个普通的 Promise，直接使用 `async` 和 `await` 来处理就行。

```ts
describe("Promise", () => {
  it("normal promise", async () => {
    const result = await fetchUserData();

    expect(result).toBe("1");
  });
});
```

## 处理内嵌了 `setTimeout` 的 Promise

```ts
export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, time);
  });
}
```

`delay` 会返回一个内嵌了 `setTimeout` 的 Promise。

```ts
describe("Promise", () => {
  it("delay", async () => {
    const result = await delay(1000);

    expect(result).toBe("2");
  });
});
```

直接用 `async` 和 `await` 来处理也是能通过测试的，只是会等待 `1000ms` 后才通过。

为了让测试不用等 `1000ms`，可以改成下面这样：

```ts
describe("Promise", () => {
  it("delay", async () => {
    vi.useFakeTimers();

    const result = await delay(1000);

    vi.advanceTimersToNextTimer();

    expect(result).resolves.toBe("2");
  });
});
```

先快进 `1000ms` 之后，用 `resolves` 获取 Promise 的结果来进行断言。

## 处理没有等待，直接嵌套调用异步回调函数的情况

这是一种很常见的场景。

```ts
export class View {
  count: number = 1;

  render() {
    Promise.resolve()
      .then(() => {
        this.count = 2;
      })
      .then(() => {
        this.count = 3;
      });
  }
}
```

如果直接使用 `async` 和 `await` 来处理的话，只会处理一层 Promise，`view.count` 会是 `2`。

```ts
it("should change count", async () => {
  const view = new View();

  await view.render();

  expect(view.count).toBe(3);
});
```

那这时候，需要使用一个库，叫做 **flush-promises**。

```ts
import flushPromises from "flush-promises";

it("should change count", async () => {
  const view = new View();

  view.render();
  await flushPromises();

  expect(view.count).toBe(3);
});
```

不想安装这个库的话，也可以去把 `flush-promises` 的[实现](https://github.com/kentor/flush-promises/blob/master/index.js)放到自己项目的工具函数里去。
