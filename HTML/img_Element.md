# `<img>` Element

`src` 就是 `source` 来源的缩写。会发出一个 `get` 请求，展示一张图片。

Event : 

- onload
- onerror

## onload & onerror 事件

`img` 标签在 JS 里有两个重要的事件 `onload` & `onerror`

这两个是用来监听图片是否加载成功了。

```jsx
<body>
    <img id="xxx" src="cat.jpg" alt="一只猫">
    <script>
        xxx.onload = function() {
            console.log("图片加载成功");
        }
        xxx.console = function() {
            console.log("图片加载失败");
        }
    </script>
</body>
```

通过这个事件，我可以知道图片是否加载成功并进行统计等。

有这两个事件，使我们能在图片加载失败的时候，进行挽救

像下面这样：

```jsx
<body>
    <img id="xxx" src="cat_wrong.jpg" alt="一只猫" />
    <script>
        xxx.onload = function() {
            console.log("图片加载成功");
        };
        xxx.onerror = function() {
            console.log("图片加载失败");
            xxx.src = "/cat_404.jpg";
        };
    </script>
</body>
```

这是一种用户体验的优化，让用户不要看难看的 `alt` ，可以看一张更好一点的图。