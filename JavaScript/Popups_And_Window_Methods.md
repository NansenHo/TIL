# Popups and window methods

## Popups

弹窗自古以来就存在。最初的想法是，在不关闭主窗口的情况下显示其他内容。

目前为止，还有其他方式可以实现这一点：

- 我们可以使用 fetch 动态加载内容，并将其显示在动态生成的 <div> 中。


弹窗在移动设备上非常棘手，因为移动设备无法同时显示多个窗口。

弹窗并不是我们每天都会使用的东西。现在如进行 OAuth 授权（使用 Google/Facebook/… 登陆）仍在使用弹窗。
使用的理由如下：

1. 弹窗是一个独立的窗口，具有自己的独立 JavaScript 环境。因此，使用弹窗打开一个不信任的第三方网站是安全的。

2. 打开弹窗非常容易。

3. 弹窗可以导航（修改 URL），并将消息发送到 opener 窗口（译注：即打开弹窗的窗口）。


### 浏览器阻止弹窗

在过去，很多恶意网站经常滥用弹窗。一个不好的页面可能会打开大量带有广告的弹窗。因此，现在大多数浏览器都会通过阻止弹窗来保护用户。

**如果弹窗是在用户触发的事件处理程序（如 onclick）之外调用的，大多数浏览器都会阻止此类弹窗。**

比如是在接口请求成功后，或者是在 `setTimeout` 的回调函数里打开弹窗，都很有可能被浏览器阻止。

### 在当前窗口访问弹窗

`open` 调用会**返回对新窗口的引用**。它可以用来操纵弹窗的属性，更改位置，甚至更多操作。

```jsx
let newWin = window.open("about:blank", "hello", "width=200,height=200");

newWin.focus();

// (*) about:blank，加载尚未开始
alert(newWin.location.href); 

// 在其加载完成后，修改其中的内容
newWin.onload = function() {
  let html = `<div style="font-size:30px">Welcome!</div>`;
  newWin.document.body.insertAdjacentHTML('afterbegin', html);
};

// 关闭窗口
newWin.close()
// 从技术上讲，close() 方法可用于任何 window
// 但是如果 window 不是通过 window.open() 创建的，
// 那么大多数浏览器都会忽略 window.close()。
// 因此，close() 只对弹窗起作用。

// 查看窗口关闭状态
// 那么 closed 属性则为 true。
console.log(newWin.closed)
// 这对于检查弹窗（或主窗口）是否仍处于打开状态很有用。
// 用户可以随时关闭它，我们的代码应该考虑到这种可能性。
```

### 从弹窗访问 opener 窗口

弹窗也可以使用 `window.opener` 来访问 `opener` 窗口。

除了弹窗之外，对其他所有窗口来说，`window.opener` 均为 `null`。

> 窗口之间的连接是双向的：主窗口和弹窗之间相互引用。

### `window.open(url, name, params)`

#### 参数：

1. `url`
   要在新窗口中加载的 URL。

2. `name`
   新窗口的名称。
   每个窗口都有一个 `window.name`，在这里我们可以指定哪个窗口用于弹窗。
   如果已经有一个这样名字的窗口，将在该窗口打开给定的 URL，否则会打开一个新窗口。
   
3. `params`
   新窗口的配置字符串。
   配置字符串要用逗号分隔。参数之间不能有空格，例如：`width=200,height=100`。

##### params 具体有哪些设置

[MDN window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

下面列出一部分常见的设置

1. 位置:
   - `left/top（数字）`—— 屏幕上窗口的左上角的坐标。这有一个限制：不能将新窗口置于屏幕外（offscreen）。     
     如果参数中没有 `left/top`，那么浏览器会尝试在最后打开的窗口附近打开一个新窗口。

   - `width/height（数字）`—— 新窗口的宽度和高度。宽度/高度的最小值是有限制的，因此不可能创建一个不可见的窗口。  
     如果没有 `width/height`，那么新窗口的大小将与上次打开的窗口大小相同。

2. 窗口功能：
   - `menubar（yes/no）`—— 显示或隐藏新窗口的浏览器菜单。
   - `toolbar（yes/no）`—— 显示或隐藏新窗口的浏览器导航栏（后退，前进，重新加载等）。
   - `location（yes/no）`—— 显示或隐藏新窗口的 URL 字段。Firefox 和 IE 浏览器不允许默认隐藏它。
   - `status（yes/no）`—— 显示或隐藏状态栏。同样，大多数浏览器都强制显示它。
   - `resizable（yes/no）`—— 允许禁用新窗口大小调整。不建议使用。
   - `scrollbars（yes/no）`—— 允许禁用新窗口的滚动条。不建议使用。

如果有参数字符串，但是某些 `yes/no` 功能被省略了，那么被省略的功能则被默认值为 `no`。
因此，如果你指定参数，请确保将所有必需的功能明确设置为 `yes`。

如果 `open()` 调用中没有第三个参数，或者它是空的，则使用默认的窗口参数。

> 当然，如果我们写了不合理的设置，大多数浏览器都会“修复”它们。

