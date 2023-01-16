# JS 引擎

## 为什么需要 JS 引擎

我们所书写的 JavaScript 代码无论是交给浏览器还是 Node 来执行，最终其实都是需要被 CPU 执行。

而 CPU 只认识自己的指令集，指令集是机器语言。

这个时候，就需要 JS 引擎将 JavaScript 代码翻译成机器指令再交给 CPU 执行。

## 著名的 JS 引擎

1. **[SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey)**

    第一款 JavaScript 引擎，由 JavaScript 的作者 Brendan Eich 开发。（网景公司开发）

    现在的 Firefox 仍然用的是这个引擎。
    <br>

2. **[JavaScriptCore](https://en.wikipedia.org/wiki/WebKit#JavaScriptCore)**

    WebKit 中内置的 JavaScript 引擎。

    由 Apple 公司开发。

    被用于 Safari 和早期的 Chrome 浏览器中。小程序中所用的 JS 引擎也是 JSCore。

    > 链接文章
    > [深入理解JSCore（美团技术团队）](https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html)

    <br>

3. **[V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine))**

    由 Google 开发，用于 Chrome / Node / Edge 等环境中。

    V8 是用 C++ 编写的。
    <br>

4. Chakra

    微软开发，用于 IE 浏览器。

    其实并不是给 JS 用的，而是给微软自家的山寨 JS 的 JScript9 用的。