# JavaScript 引擎

## 为什么需要 JS 引擎

我们所书写的 JavaScript 代码无论是交给浏览器还是 Node 来执行，最终其实都是需要被 CPU 执行。

而 CPU 只认识自己的指令集，指令集是机器语言。

这个时候，就需要 JS 引擎将 JavaScript 代码翻译成机器指令再交给 CPU 执行。

### JS 引擎的四大功能：

1. **编译**：将 JS 代码翻译成为机器能执行的字节码或机器码。
2. **优化**：它会改写你的代码，使之变得更高效。
3. **执行**：执行上面的字节码或者机器码。
4. **内存回收**：把 JS 用完的内存回收，方便以后再次使用。
   比如某个变量不用了，那就可以回收其占用的内存。下次当用新的变量时，就可以把之前回收的内存给这个新变量用。

## 著名的 JS 引擎

1. **[SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey)**

   第一款 JavaScript 引擎，由 JavaScript 的作者 Brendan Eich 开发。（网景公司开发）

   现在的 Firefox 仍然用的是这个引擎。

2. **[JavaScriptCore](https://en.wikipedia.org/wiki/WebKit#JavaScriptCore)**

   WebKit 中内置的 JavaScript 引擎。

   由 Apple 公司开发。

   被用于 Safari 和早期的 Chrome 浏览器中。小程序中所用的 JS 引擎也是 JSCore。

   [深入理解 JSCore（美团技术团队）](https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html)

3. **[V8](<https://en.wikipedia.org/wiki/V8_(JavaScript_engine)>)**

   由 Google 开发，用于 Chrome / Node / Edge 等环境中。

   V8 是用 C++ 编写的。

4. Chakra

   微软开发，用于 IE 浏览器。

   其实并不是给 JS 用的，而是给微软自家的山寨 JS 的 JScript9 用的。
