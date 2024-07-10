# Vitest 模拟浏览器环境和自定义环境

Vitest 是在 Node.js 环境下执行的，所以会缺失一些浏览器和其他环境中的 API。

> 这个时候，可以手动在 Node.js 中实现这个缺失的 API。

## 模拟浏览器环境

用于模拟浏览器环境的常见的第三方库有

- [happy-dom](https://www.npmjs.com/package/happy-dom)
- [js-dom](https://www.npmjs.com/package/js-dom)

happy-dom 专注于测试环境，相较于 js-dom，在测试场景下的性能更好。

所以在测试环境中，尽量选择 happy-dom。
