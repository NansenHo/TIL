# Vitest 和 Jest 的差异

## 区别

1. Vitest 开箱即用，Jest 要配置和安装第三方库（@types/jest, ts-jest...）。

   > 开箱即用：
   > 在为一些开源项目做贡献时，可以安装 Vitest 来测试，提交代码时，忽略测试文件即可。

2. Vitest 可以共用 Vite 配置，但 Jest 不同环境是不同配置，维护成本更高。

   这意味着我们可以做到开发环境，构建环境和测试环境共用同一套配置。

   > 如果项目没有使用 Vite 来构建，那 Vitest 会自己去起一个 Vite。

## 社区

技术选型的时候，社区活跃度也是一个重要指标。

- [Vitest - Github](https://github.com/vitest-dev/vitest)

- [Jest - Github](https://github.com/jestjs/jest)

我们可以通过看 commit 的密度来判断社区活跃度。

## 从 Jest 迁移到 Vitest

注意全局 API 和 vi 等 API 层面的变化。

> 开发一个库，可以参考在这之前的同类库的 API 命名。
> 因为这会极大降低目标用户的学习成本。
