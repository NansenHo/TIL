# 将 Title 在有 Icon 元素的 Header 里垂直水平居中

## 目标样式

在一个 Container 里, 左边是一个 Arrow Icon, 右边是一个子 Container 包裹的 Title

要求 Title 永远在整个外层 Container 的正中央, 而不是子 Container 的正中央

```
 +----------------------------------------------+
 |      Indications based on the Specified      |
 |  <                                           |
 |         Commercial Transactions Law          |
 +----------------------------------------------+
```

现在的 HTML 结构:

```html
<div class="header-container">
  <div class="back-arrow"><</div>
  <div class="title-container">
    <div class="header-title">
      Indications based on the Specified Commercial Transactions Law
    </div>
  </div>
</div>
```

## 样式实现

要让 Title 在外层 Container 中居中, 就不能简单用 Flex 布局来解决了,

而需要将其 **脱离文档流** 来处理,

不然就需要用 JS 获取画面大小对样式进行调整

> 能用 CSS 解决的, 就肯定不能用 JS 来组合实现, 因为性能较差的同时, 可维护性也更差, 这样做大概率不是最佳实践

先给出 SCSS 的完整实现代码:

```css
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.title-container {
  /* 让元素相对于父元素真正居中（水平 & 垂直） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 72px = Icon 的宽度 + 外层 Container 的左右两边的 Padding */
  width: calc(100% - 72px);
}

.header-title {
  text-align: center;
}
```

### 水平&垂直方向上居中

```css
.title-container {
  /* 让元素相对于父元素真正居中（水平 & 垂直） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- `position: absolute;`

  让元素相对于 最近的 `position: relative;` 父元素 进行定位。

- `top: 50%; left: 50%;`

  让元素的 左上角（左上角的坐标点） 先移动到父元素的 `50%` 位置（即中心）。

- `transform: translate(-50%, -50%);`

  由于 `top: 50%; left: 50%;` 是以 元素的左上角为基准，所以元素的实际位置会偏移。

  `translate(-50%, -50%)` 让 自身的中心点 也移动到这个 `50%` 的位置，达到真正的居中。

## 启动项目过程中, 遇到的一些小问题

> **切换到特定定制版 Application**
>
> 在环境变量中将 `PARTNER_NAME` 赋值为 `xxx`, 即可访问特定定制版 Application
>
> ```
> PARTNER_NAME=xxx
> ```

> **报错解决**
>
> 项目里, 控制台, alert, API 的报错都特别多
>
> 登录账号后, 点击 start 按钮, 之后会出现 alert 报错 `An unknown error occurred. Please try reloading and trying again.`
>
> 这个是由于数据库里的我的账号的数据上, 缺少了一个字段 (比较久远的边缘功能的字段)
