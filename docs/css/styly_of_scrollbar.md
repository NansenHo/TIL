# 滚动条样式

## 滚动条相关选择器

我们需要使用以下伪元素选择器来修改基于 webkit 的浏览器滚动条样式

1. `::-webkit-scrollbar` 整个滚动条
2. `::-webkit-scrollbar-button` 滚动条上的按钮（上下箭头）
3. `::-webkit-scrollbar-thumb` 滚动条上的滚动滑块
   1. 可以设置 background
4. `::-webkit-scrollbar-track` 滚动条轨道
5. `::-webkit-scrollbar-track-piece` 滚动条没有滑块的轨道部分
6. `::-webkit-scrollbar-corner` 当同时有垂直滚动条和水平滚动条时交汇的部分。通常是浏览器窗口的右下角。
7. `::-webkit-resizer` 出现在某些元素底角的可拖动调整大小的滑块

## 实战案例

### 让滚动滑块距离边框一定距离

有两种滚动条：

1. 页面原生的滚动条、比如 html 和 body 元素的滚动条；
2. div 等元素内部的滚动条；

有时我们的 div 四周是圆角的，这样滚动条的存在就可以导致圆角处会出现一些样式问题。

这时我们可以尝试利用 `滚动条上的按钮（上下箭头）` 来处理：

```css
&::-webkit-scrollbar-button {
  display: none;
}
&::-webkit-scrollbar-button:vertical:end:increment {
  display: block;
  height: 8px;
  background-color: transparent;
}
&::-webkit-scrollbar-button:vertical:start:increment {
  display: block;
  height: 8px;
  background-color: transparent;
}
```

### 滚动条距离侧边有一定距离

当我们在 div 等容器中使用，用来美化滚动条。

```css
&::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.24);
  border: 4px solid transparent;
  border-radius: 8px;
  /* 使用 background-clip 裁剪背景，可以让滚动滑块与边框隔开一定距离 */
  background-clip: content-box;
}
```

### 滚动条综合案例

下面的滚动条效果是距离侧边和上下都有一定距离的圆角滚动条。

```css
&::-webkit-scrollbar {
  width: 21px;
  height: 80px;
}
&::-webkit-scrollbar-button {
  display: none;
}
&::-webkit-scrollbar-button:vertical:end:increment {
  display: block;
  height: 8px;
  background-color: transparent;
}
&::-webkit-scrollbar-button:vertical:start:increment {
  display: block;
  height: 8px;
  background-color: transparent;
}
&::-webkit-scrollbar-track {
  background: #fff;
}
&::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.24);
  border: 6px solid transparent;
  border-radius: 12px;
  background-clip: content-box;
}
&::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.24);
  border: 6px solid transparent;
  border-radius: 12px;
  background-clip: content-box;
}
```

## 注意点

要注意，我们这只是在 CSS 层面上修改滚动条，而这些 CSS 属性是针对 Webkit 内核的浏览器的。

对于非 Webkit 的浏览器我们需要另外写一套针对的 CSS。

除了 CSS ，我们也可以用 `el-scrollbar` 这样的组件库里设计好的滚动条组件, 或者自己写一个 `div` 来充当滚动条等，用来处理特殊的滚动条样式。
