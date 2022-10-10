# 如何借助预处理器、PostCSS 等构建现代 CSS 工程环境

CSS 语言一直在追求样式表现力方面的提升，工程化能力薄弱。
例如缺乏成熟的模块化机制、依赖处理能力、逻辑判断能力等。
为此，在开发现代大型 Web 应用时，通常会使用 Webpack 配合其它预处理器编写样式代码。

## Webpack 如何处理 CSS 资源

Webpack 不能识别 CSS 语法，在不做任何配置的情况下，导入 `.css` 文件会导致编译失败。

Webpack 中处理 CSS 文件通常会用到：

1. `css-loader`
   将 CSS 等价翻译为形如 `module.exports = "${css}"` 的 JavaScript 代码，
   使得 Webpack 能够如同处理 JS 代码一样解析 CSS 内容与资源依赖；

2. `style-loader`
   在产物中注入一系列 runtime 代码，这些代码会将 CSS 内容注入到页面的 <style> 标签，使得样式生效；

3. `mini-css-extract-plugin`
   该插件会将 CSS 代码抽离到单独的 `.css` 文件，并将文件通过 <link> 标签方式插入到页面中。