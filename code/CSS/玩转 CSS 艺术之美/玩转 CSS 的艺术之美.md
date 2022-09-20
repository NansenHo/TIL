# 《玩转 CSS 的艺术之美》

- [《玩转 CSS 的艺术之美》](#玩转-css-的艺术之美)
    - [浏览器如何渲染页面](#浏览器如何渲染页面)
    - [让一个节点看不见的数种方法对比](#让一个节点看不见的数种方法对比)
    - [让节点生成层叠上下文的条件](#让节点生成层叠上下文的条件)
    - [发生层叠后，z 轴上的排列顺序](#发生层叠后z-轴上的排列顺序)
    - [CSS Selector 优先级](#css-selector-优先级)
    - [CSS 支持的单位](#css-支持的单位)
  - [CSS 布局](#css-布局)
    - [CSS 的全部布局方式](#css-的全部布局方式)
    - [居中问题](#居中问题)
      - [水平居中](#水平居中)
      - [垂直居中](#垂直居中)
      - [垂直水平居中](#垂直水平居中)
  - [函数](#函数)
    - [`calc 函数`](#calc-函数)
    - [`attr()` 函数 - `data-*` 在 CSS 中的运用](#attr-函数---data--在-css-中的运用)

### 浏览器如何渲染页面

DOM 树构建过程：

1. 读取 HTML 文档中的字节
2. 将字节转换成字符
3. 再根据字符确定标签
4. 最后再将标签转变成节点

### 让一个节点看不见的数种方法对比

让一个节点不可见的方法：

1. `visibility:hidden` 占据空间、显隐时可过渡、不可点击。
2. `display: none` 不占据空间、可访问 DOM
3. `opacity: 0` 占据空间、但节点 `position: absolute` 时不占据空间、 可点击
4. `z-index:-1` `position: relative` 时占据空间、`position: absolute` 时不占据空间、不可点击。

[display和visibility的区别以及回流和重绘_暖暖--的博客-CSDN博客_visibility:hidden产生回流和重绘](https://blog.csdn.net/qq_41681425/article/details/81016356)

### 让节点生成层叠上下文的条件

能让节点生成层叠上下文的条件

1. `position` 和 `z-index` 配合使用 
2. `<html>`根结点
3. 声明`position:relative/absolute`和`z-index`不为`auto`的节点
4. 声明`position:fixed/sticky`的节点
5. Flex布局下声明`z-index`不为`auto`的节点
6. Grid布局下声明`z-index`不为`auto`的节点
7. 声明`mask/mask-image/mask-border`不为`none`的节点
8. 声明`filter`不为`none`的节点
9. 声明`mix-blend-mode`不为`normal`的节点
10. 声明`opacity`不为`1`的节点
11. 声明`clip-path`不为`none`的节点
12. 声明`will-change`不为`initial`的节点
13. 声明`perspective`不为`none`的节点
14. 声明`transform`不为`none`的节点
15. 声明`isolation`为`isolate`的节点
16. 声明`webkit-overflow-scrolling`为`touch`的节点

### 发生层叠后，z 轴上的排列顺序

节点发生层叠时，按照下图的规则在 z 轴上排列：

![](assets/发生层叠后，z%20轴上的排列顺序.png)

1. 层叠上下文的`border`和`background`
2. `z-index < 0`的子节点
3. 标准流内块级非定位的子节点
4. 浮动非定位的子节点
5. 标准流内行内非定位的子节点
6. `z-index: auto/0`的子节点
7. `z-index > 0`的子节点

（以上文字从低到高排序）

### CSS Selector 优先级

选择器的优先级

```
1. !important > 
2. 内联样式 = 外联样式!??? > 
3. ID选择器 > 
4. 类选择器 = 伪类选择器 = 属性选择器 > 
5. 标签选择器 = 伪元素选择器 > 
6. 通配选择器 = 后代选择器 = 兄弟选择器
```

`:not()` 不参与优先级别的计算。

`:not()` 在优先级别计算中不会被看成 `伪类` ，但会把 `:not()` 里的选择器当作普通选择器计数。简单来说就是忽略 `:not()` ，其他伪类照常参与优先级别计算。
**
### CSS 支持的单位

单位

| 单位 | 定义 | 类型 | 描述 |
| --- | --- | --- | --- |
| px | 像素 | 绝对单位 | - |
| pt | 点 | 绝对单位 | 1pt = 1/72in |
| pc | 派 | 绝对单位 | 1pc = 12pt |

实际上，所有单位无论是 `绝对单位` 还是 `相对单位` ，最终都是转化 `px` 在屏幕上显示。因此在设计和开发过程中都以 `px` 为准。

`rem` 全称是 `root em` 基于根节点 `<html>` 字体宽度。`em` 基于父节点字体宽度。

在CSS3中增加了与 `viewport` 相关的四个长度单位，随着时间推移，目前大部分浏览器对这四个长度单位都有较好的兼容，这也是未来最建议在伸缩方案中使用的长度单位。

- `1vw` 表示 `1%` 视窗宽度
- `1vh` 表示 `1%` 视窗高度
- `1vmin` 表示 `1%` 视窗宽度和 `1%` 视窗高度中最小者
- `1vmax` 表示 `1%` 视窗宽度和 `1%` 视窗高度中最大者

视窗宽高在 JS 中分别对应 `window.innerWdith` 和 `window.innerHeight` 。

若不考虑低版本浏览器的兼容，完全可用一行CSS代码秒杀所有移动端的伸缩方案。

## CSS 布局

### CSS 的全部布局方式

- 普通布局：`display:block/inline`
- 浮动布局：`float:left/right`
- 定位布局：`position:relative/absolute/fixed`、`left/right/top/bottom/z-index`
- 表格布局：`table系列属性` （牵一发而动全身，一个很小的改动也可能造成整个 `<table>` 的回流）
- 弹性布局：`display:flex/inline-flex`、`flex系列属性`
- 多列布局：`column系列属性`
- 格栅布局：`display:grid/inline-grid`、`grid系列属性`
- 响应式布局：`em/rem/vw/vh/vmin/vmax`、`媒体查询`

[flexbox演示站](https://xluos.github.io/demo/flexbox/)

### 居中问题

#### 水平居中

```css
/* 适用块级、行内等所有元素 */
margin: 0 auto;
width: fit-content;

display: flex;
justify-content: center;

position: xx;
left/right: xx;
margin-left/right: width;

position: xx;
left/right: xx;
transform: translateX(-50%)

/* 适用于块级元素 */
margin: 0 auto;
width: xx;

/* 适用于行内元素 */
text-align: center;
```

#### 垂直居中

```css
/* 适用于块级、行内等所有元素 */
display: flex;
align-items: center;

display: flex;
margin: auto 0;

position: xx;
top/bottom: xx;
margin-top/bottom: xx;
width: xx;

position: xx;
top/bottom: xx;
transform: translateY(-50%)

display: table; /* 父节点 */
display: table-cell; /* 子节点 */
vertical-align: middle;

/* 适用于块级元素 */
padding-top/bottom: xx; 

/* 适用于行内元素 */
line-height: xx; /*和高度一致*/
```

#### 垂直水平居中

```css
/* 适用于行内块级元素 */
.parent {
    line-height: xx; /* 垂直居中 */
    text-align: center; /* 水平居中 */
    font-size: 0; /* 父元素需要 */

    .child {
        display: inline-block;
        vertical-align: middle;
    }
}

.parent {
    display: flex;
    align-items: center;
    justify-content: center;
}

```

## 函数

### `calc 函数`


### `attr()` 函数 - `data-*` 在 CSS 中的运用

```tsx
<h1 class="hello" data\';-name="玩转CSS的艺术之美"></h1>

h1 {
    &::before {
        content: attr(class);
    }
    &::after {
        content: attr(data-name);
    }
}

```

`::before` 通过 `attr()` 获取 `<h1 class>` 的属性值并赋值到 `content` 上，`::after` 通过 `attr()` 获取 `<h1 data-name>` 的属性值并赋值到 `content` 上，最终 `<h1>` 的 `innerText`
是 `hello玩转CSS的艺术之美` 。

`attr()` 可灵活结合 `选择器` 返回节点属性并赋值到伪元素的 `content` 上，通过 `attr()` 结合 `:hover` 和 `:empty` 抓取节点需显示的内容是一个很不错的技巧。



[CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)

响应式布局的几种方式：

1. vw 和 vh 等
2. 媒体查询
3. flex 布局
4. rem 布局
5. 百分比布局

