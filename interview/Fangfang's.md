## HTML

### 你是如何理解 HTML 语义化的？

[MDN HTML 元素参考]([HTML 元素参考 - HTML（超文本标记语言） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element))

HTML语义化就是根据内容选择合适的标签。（总结）

比如说，

- header 页眉，顶部
- footer 页脚，底部
- main 主要内容
- aside 侧边栏
- section 文档中的节，部分
- nav 导航
- artical 文章，独立的自包含内容
- h1~h6 各级标题
- p 段落
- video 视频

HTML 语义化给项目带来很多好处（优点&意义）

+ 易读性更好，便于团队的开发和维护，在没有写 CSS 的时候，也能呈现较好的内容结构和代码结构。
+ 有利于 SEO，搜索引擎的爬虫是根据标签来确定上下文和各个关键字的权重，HTML 语义化就能让机器可以读懂网页的内容，也就能被搜索引擎更好的检索。
+ 提高不同设备的可访问性。比如屏幕阅读器，盲人阅读器（利于无障碍阅读）等。

### `meta viewport` 是做什么用的，怎么写？

`<meta>` 是用来提供有关页面元信息的标签。meta 标签的 name 属性有 viewport 这个值。

meta viewport 是用来适配移动设备的。为了使不同宽度的页面都能在移动端完美适配。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
```

### 你用过哪些 HTML 5 标签?

[HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)（如果你说出一个标签，却不知道它有哪些API，那么你就会被扣分）

+ img 
+ p
+ button 
+ h 系列的标题标签 
+ form 
+ input