# `<a>` 标签

## `href` 属性的可取值

href = hyper + reference 超级引用，超链接。

1. url: 如 `//google.com`（无协议，推荐写法）, `https://google.com`, `http://google.com`

> 为什么推荐 `//google.com` 这种写法呢
> 因为前两种要是弄错了，就会出 bug，但这种是自动选择用 https 还是 http 。
    
2. 路径

3. 伪协议: 如 `javascript:` 代码；
    ```html
    <!-- 当我们在网页中点击 javascript伪协议，会看到 alert(1) 执行了。 -->
    <a href="javascript:alert(1);">javascript伪协议</a>
    
    <!-- 常用来做一个点击之后没有任何动作的标签，页面不会刷新，也不会滚回顶部。-->
    <!-- 我们点击空的伪协议，相当于执行了一段空的 js 代码。-->
    <a href="javascript:;">空的伪协议</a>

    <!-- mailto：-->
    <a href="mailto:nansen.ho@foxmail.com">nansen.ho@foxmail.com</a>

    <!-- tel: -->
    <a href="tel:13308562261">133-0856-2261</a>
    ```
    
4. id: 如 `href="#id"` 可以让网页定位到 `document.querySelected('#id')` 元素的位置。
    
5. href 的一些其他用法
    
    ```html
    <!-- href 里面啥也不写的话，会刷新页面 -->
    <a href="">刷新页面</a>
    
    <!-- 只写 # 号，点击按钮页面会滚到顶部 -->
    <a href="#">滚到顶部</a>
    ```    

## `target` 属性的可取值

`target` 属性指定打开超链接的方式，`target` 属性的值一共有以下五种情况。

1. `target="_self"` 默认，在该窗口打开；
  
2. `target="_blank"`  在新窗口打开；
   
3. `target="_top"` 在最顶层页面中打开；
   
4. `target="_parent"` 在父框架中打开；
   
5. `target="xxx"` 在指定窗口中打开。如果有一个叫做 `xxx` 的窗口，就用它打开；
    
    在控制台中，可以这样 `window.name` 查看窗口名字。
    
```html
<iframe src="" name="xxx"></iframe>
```

### rel="noopener"

> `target="_blank"` をつけるならときは `rel='noopener'` も一緒に付けておく。
> [aタグに付いているrel="noopener"って何？ | ocws BLOG](https://ocws.jp/blog/post1974/)
> [聊聊 rel=noopener](https://juejin.cn/post/6844903485289267214)

## rel

```html
rel="noreferrer"
```

## `download` 属性

下载该网页，而不是查看该网页。

如果 `download="Vim book"`，那下载下来的东西的名字也会是你指定的 `Vim book`，后缀会自动给你添加。