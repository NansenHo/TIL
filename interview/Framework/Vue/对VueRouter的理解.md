# 对 Vue Router 的理解

Vue Router 是 Vue 用来写路由的一个插件。

主要有两个重要的组件：`<router-link>` 和 `<router-view>`

- `<router-link>` 和 `a` 标签类似，有一个属性 `to` 会指向目标地址。
- `<router-view>` 负责渲染路径匹配到的视图组件。

有两种模式：hash 和 history

- 默认是 hash 模式，history 需要设置 `mode: “history”` 。

- hash 模式下的 URL 里永远带着 # 号，比较丑。history 模式下没有 # 号，就是正常的 URL。

- history 模式是基于 HTML5 的 `pushState()` `replaceState()` API 来实现的。没有 `#` 号，美观。

  [Vue Router history模式的配置方法及其原理 - 掘金](https://juejin.cn/post/6844903856359342087)

  静态服务器（这里是nginx）会默认去目标目录（这里为 `location` 中 `root` 所指定的目录）下寻找 `index.html`（这是nginx在端口后没有额外路径时的默认行为）

  但在子路由下手动刷新会出现 404 。这个可以在后端配置，比如 nginx 中可以配置 `try_files: $uri $uri/ index.html` 。

在 JS 里，需要先初始化一个 router。

这个初始化的 router 里，需要有

- 路由表
- history 对象

> 有的 app 里，url 不允许带有 # 号，这时需要使用 history 模式。

> 使用 history 模式的问题：
> 访问二级页面时，如果刷新，会出现404错误。
> 这需要后端配合，让其配置一下 apache / nginx 的 url 重定向，重定向到首页路由上。