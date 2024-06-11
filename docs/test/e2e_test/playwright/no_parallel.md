# 不要并行地执行 Playwright E2E 测试

## 为什么不要并行执行

并行执行 E2E 测试可能会让本来彼此独立的 E2E 测试文件相互影响，从而导致测试无法通过。

常见的情况是，当我们有 ABCD 四个 E2E 测试文件，单独执行 C 可以通过，但一次执行所有文件 C 就通过不了了。

## 如何实现

我们希望确保 Playwright 可以从前往后的顺序，一个测试执行完毕后再执行下一个测试。

注意 Playwright 配置文件里有 [`fullyParallel`](https://playwright.dev/docs/api/class-testconfig#test-config-fully-parallel) 配置项，其被推荐设置为 `true`。

`fullyParallel` 为 `true` 时，Playwright 会**通过开启多个 `worker` 的方式**来并行地执行测试。

明白了 `fullyParallel` 的实现方式后，我们也就知道，只需要将 `worker` 设置为 `1` 即可解决并行的问题。

```ts
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  workers: 1,
  // ...
});
```
