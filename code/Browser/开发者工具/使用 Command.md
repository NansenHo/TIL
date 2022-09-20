# Chrome 调试技巧

- [Chrome 调试技巧](#chrome-调试技巧)
  - [Dev tools 里好用的快捷键](#dev-tools-里好用的快捷键)
  - [使用 Command](#使用-command)
    - [Command 是什么](#command-是什么)
    - [Command 常用快捷操作](#command-常用快捷操作)
  - [Console 中的 `$`](#console-中的-)
    - [`$0` `$1` `$2` `$3` `$4` - 对选中 html 节点的引用](#0-1-2-3-4---对选中-html-节点的引用)
    - [`$()` 和 `$$()` - document.querySelector 的别名](#-和----documentqueryselector-的别名)
    - [`$_` - 对上次执行的结果的引用](#_---对上次执行的结果的引用)
    - [`$i` - 在 Dev Tools 里面来使用 npm 插件！](#i---在-dev-tools-里面来使用-npm-插件)
  - [`Console.log()` 的 bug](#consolelog-的-bug)

## Dev tools 里好用的快捷键

1. `[Command]` + `[Shift]` + `D`: 切换 Dev tools 的位置。

## 使用 Command

### Command 是什么

在开发者工具中，macOS 通过 `[command]` + `[shift]` + `P` 打开 Command。

### Command 常用快捷操作

1. 快速切换面板
   
   调出 Command 之后，输入 layout、network、application 等关键词就可以进行切换面板。

## Console 中的 `$`

### `$0` `$1` `$2` `$3` `$4` - 对选中 html 节点的引用

`$0`: 对当前选中的 html 节点的引用。

`$1`: 对上一个选中的 html 节点的引用。

`$2` `$3` `$4` 依次往后。

### `$()` 和 `$$()` - document.querySelector 的别名

`$()` 等同于 `document.querySelector()`，是其的别名。

`$$()` 等同于 `document.querySelectorAll()`。

### `$_` - 对上次执行的结果的引用

`$_` 是对上次执行的结果的引用。

调试的过程中，你经常会通过打印查看一些变量的值，但如果你想看一下上次执行的结果呢？再输一遍表达式吗？

### `$i` - 在 Dev Tools 里面来使用 npm 插件！

我们先在浏览器中要安装下面的插件

[Console importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie/related)

之后就可以在 Console 中用 `$i('lodash')` 来安装并使用 lodash 了。

有时我们只是想玩玩一些新的 npm 包时，这样就很方便了。

## `Console.log()` 的 bug

在 Console 面板中运行以下代码，会发现打印出来的都是修改后的对象。

```js
let cat = {
  name: 'miaomiao',
  age: '1',
}
console.log(cat)

cat.name = 'mimi'
cat.age = '3'
console.log(cat)
```

![](assets/console.log的%20bug.jpg)

这是因为 `console.log()` 参数，即对象在被打印前，是以引用的方式被储存的。

我们传入 `console.log(obj)` 的参数实际上是 `obj` 对象的引用地址值。

所以最后打印出来的都是最终被修改了的值。

那我们要怎么处理这种情况呢？

1. 使用 Source/资源 面板中的断点来调试
2. 打印一个从这个对象复制出来的对象。
3. 使用 `JSON.stringify()` 方法处理打印的结果

