# Head Element And Meta Element

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
... ...
</body>
```

1. `<!doctype html>` 说明**文档类型**。
    因为浏览器不仅支持 HTML ，还支持很多其他文档类型，比如 SVG ，XML 等。
    
2. `lang="en"` 说明这个**页面的语言**是英文。
    可以改成 `zh-CN` / `zh-Hans` ；
    > 谷歌的翻译插件，就是参考 `lang` 属性，来做的页面语言识别。
    
3. `<meta charset="UTF-8">` ，表示**文件的字符编码**是 `UTF-8` ；
    `UTF-8` 支持全世界所有语言。
    
4. `<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">` 用来**防止页面缩放**。

5. `<meta http-equiv="X-UA-Compatible" content="ie=edge" />` 表示如果当前页面在 IE 浏览器中显示，用 IE 的最新版渲染内核来渲染。
    因为 IE 里面内置了之前所有版本的渲染模式，而不同内核渲染出来的页面又会有差别。