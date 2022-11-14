# 从0到1：HTML+CSS快速上手

莫振杰
133个笔记

## 1.2 什么是HTML

我们一般用 `<em>绿叶学习网</em>` 来定义文字为斜体。

HTML是一门描述性的语言，就是用标签来说话。

## 1.3 常见问题

HTML是从HTML4.01升级到HTML5的。我们常说的HTML，指的是HTML4.01，而HTML5一般指的是相对于HTML4.01“新增加的内容”，并不是指HTML4.01被淘汰了。准确地说，你要学的HTML，其实是HTML4.01加上HTML5。

## 第3章 基本标签

文档声明：`<!DOCTYPE html>`

`<html xmlns="http://www.w3.org/1999/xhtml">​​`
这句代码的作用是告诉浏览器，当前页面使用的是W3C的XHTML标准。这个我们了解即可，不用深究。一般情况下，我们不需要加上`xmlns="http://www.w3.org/1999/xhtml"`这一句。

`<head></head>` 是网页的“头部”，用于定义一些特殊的内容，如页面标题、定时刷新、外部文件等。

## 3.2 head标签

一般来说，只有6个标签能放在head标签内。
title标签。
meta标签。
link标签。
style标签。
script标签。
base标签。

在HTML中，title标签唯一的作用就是定义网页的标题。

meta标签一般用于定义页面的特殊信息，如页面关键字、页面描述等。这些信息不是提供给用户看的，而是提供给搜索引擎蜘蛛（如百度蜘蛛、谷歌蜘蛛）看的。简单地说，meta标签就是用来告诉“搜索蜘蛛”这个页面是做什么的。

meta标签有两个重要的属性：name和http-equiv。

一般只会用到keywords和description。

meta标签的http-equiv属性只有两个重要作用：定义网页所使用的编码，定义网页自动刷新跳转。

`​​<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>​​`
这段代码告诉浏览器，该页面所使用的编码是utf-8。不过在HTML5标准中，上面这句代码可以简写成下面这样：
`​​<meta charset="utf-8"/>​​`
在实际开发中，为了确保不出现乱码，我们必须要在每一个页面中加上这句代码。

`​​<meta http-equiv="refresh" content="6;url=http://www.lvyestudy.com"/>​​`
这段代码表示当前页面在6秒后会自动跳转到http://www.lvyestudy.com这个页面。
实际上，很多“小广告”网站就是用这种方式来实现页面定时跳转的。

## 3.3 body标签

`<meta charset="utf-8" />` 这一句必须放在title标签以及其他meta标签前面，这一点大家要记住。

## 3.4 HTML注释

`<!---->` 又叫注释标签。<!--表示注释的开始，-->表示注释的结束。

## 4.2 标题标签

一个页面一般只能有一个h1标签，而h2到h6标签可以有多个。

h1表示的是这个页面的大标题。就像写作文一样，你见过哪篇作文有两个大标题吗？但是，一篇作文却可以有多个小标题。

h1~h6标题标签看起来很简单，但是在搜索引擎优化中却扮演着非常重要的角色。

## 4.3 段落标签

其中`<br/>`是自闭合标签，br是break（换行）的缩写。

## 4.4 文本标签

常用的文本标签有以下8种。
粗体标签：strong、b。
斜体标签：i、em、cite。
上标标签：sup。
下标标签：sub。
中划线标签：s。
下划线标签：u。
大字号标签：big。
小字号标签：small。

strong标签和b标签的加粗效果是一样的。

在实际开发中，如果想要对文本实现加粗效果，尽量使用strong标签，而不要使用b标签。这是因为strong标签比b标签更具有语义性。

在实际开发中，如果想要实现文本的斜体效果，尽量使用em标签，而不要用i标签或cite标签。这也是因为em标签比其他两个标签的语义性更好。

sup，是superscripted（上标）的缩写。

在HTML中，我们可以使用“s标签”来实现文本的中划线效果。

对于删除线效果，一般会用CSS来实现，几乎不会用s标签来实现。

在HTML中，我们可以使用“u标签”来实现文本的下划线效果。

对于下划线效果，一般会用CSS来实现，几乎不会用u标签来实现。

可以使用“big标签”来实现字体的变大效果，还可以使用“small标签”来实现字体的变小效果。

## 4.5 水平线标签

hr，是horizon（水平线）的缩写。

## 4.6 div标签

div，全称division（分区），用来划分一个区域。

## 4.7 自闭合标签

常见的自闭合标签

## 4.9 特殊符号

在HTML中，空格也是需要用代码来实现的。其中，空格的代码是“&nbsp;”。

1个汉字约等于3个“&nbsp;”

如果想要往p标签内加入两个汉字的空格，那么我们需要往p标签内加入6个“&nbsp;”。

这些特殊符号对应的代码，都是以“&”开头，并且以“;”（英文分号）结尾的。

## 5.2 有序列表

我们可以使用type属性来改变列表项符号

## 5.3 无序列表

我们可以使用type属性来定义列表项符号

The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
e.g.
list-style-type: space-counter;
list-style-type: "\1F44D"; // thumbs up sign
The color of the marker will be the same as the computed color of the element it applies to.
使用list-style-type属性

使用list-style-type属性

ul元素的子元素只能是li元素，不能是其他元素。

## 5.4 定义列表

dl即definition list（定义列表），dt即definition term（定义名词），而dd即definition description（定义描述）。

定义列表虽然用得比较少，但是在某些高级效果（如自定义表单）中也会用到。

## 6.2 基本结构

tr指的是table row（表格行）

td指的是table data cell（表格单元格）

## 6.3 完整结构

表格一般都会有一个标题，我们可以使用caption标签来实现。

一个表格只能有一个标题，也就是只能有一个caption标签。在默认情况下，标题位于整个表格的第一行。

## 6.4 语义化

表脚（tfoot）往往用于统计数据。

thead、tbody和tfoot除了可以使代码更具有语义，还有另外一个重要作用：方便分块来控制表格的CSS样式。

## 6.5 合并行：rowspan

我们可以使用rowspan属性来合并行。所谓的合并行，指的是将“纵向的N个单元格”合并。

## 6.6 合并列：colspan

我们可以使用colspan属性来合并列。所谓的合并列，指的是将“横向的N个单元格”合并。

## 第7章 图片

alt属性用于图片描述，这个描述文字是给搜索引擎看的。

当图片无法显示时，页面会显示alt中的文字。

对于img标签，src和alt这两个是必选属性，一定要添加；而title是可选属性，可加可不加。

## 7.2 图片路径

在真正的网站开发中，对于图片或者引用文件的路径，我们几乎都是使用相对路径。

大家不必过于纠结绝对路径的相关问题，只需要掌握相对路径的写法即可。

## 7.3 图片格式

jpg格式可以很好地处理大面积色调的图片，适合存储颜色丰富的复杂图片，如照片、高清图片等。此外，jpg格式的图片体积较大，并且不支持保存透明背景。

png格式是一种无损格式，可以无损压缩以保证页面打开速度。此外，png格式的图片体积较小，并且支持保存透明背景，不过不适合存储颜色丰富的图片。

gif格式的图片效果最差，不过它适合制作动画。

矢量图最大的优点是图片无论放大、缩小或旋转等，都不会失真。最大的缺点是难以表现色彩丰富的图片，

矢量图的常见格式有“.ai”“.cdr”“.fh”“.swf”。

位图的组成单位是“像素”，而矢量图的组成单位是“数学向量”。
位图受分辨率影响，当图片放大时会失真；而矢量图不受分辨率影响，当图片放大时不会失真。

在Web 1.0时代，切图是一种形象的说法，它指的是使用Photoshop把设计图切成一块一块的，然后再使用Dreamweaver拼接起来，从而合成一个网页。

现在的切图，指的是前端工程师拿到UI设计师的图稿时，需要分析页面的布局，哪些用CSS实现，哪些用图片实现，哪些用CSS Spirit实现等。

## 第8章 超链接

图片超链接

`<a href="http://www.lvyestudy.com"><img src="img/lvye.png" alt="绿叶学习网"/></a>`

## 8.3 锚点链接

有些页面内容比较多，导致页面过长，此时用户需要不停地拖动浏览器上的滚动条才可以看到下面的内容。为了方便用户操作，我们可以使用锚点链接来优化用户体验。

## 9.2 form标签

在form标签中，action属性用于指定表单数据提交到哪一个地址进行处理。

在form标签中，enctype属性用于指定表单数据提交的编码方式。一般情况下，我们不需要设置，除非你用到上传文件功能。

## 9.4 单行文本框

size属性可以用来设置单行文本框的长度，不过在实际开发中，我们一般不会用到这个属性，而是使用CSS来控制。

## 9.6 单选框

对于同一组的单选框，必须要设置一个相同的name，这样才会把这些选项归为同一个组。

为了更好地语义化，表单元素与后面的文本一般都需要借助label标签关联起来。

```html
<label><input type="radio" name="gender" value="男" />男</label>
<label><input type="radio" name="gender" value="女" />女</label>​​
```

## 9.7 复选框

name属性表示复选框所在的组名，而value表示复选框的取值。与单选框一样，这两个属性也必须要设置。

## 9.8 按钮

```html
<form method="post">
  <input type="button" value="按钮" />
  <input type="submit" value="按钮" />
  <input type="reset" value="按钮" />
</form>￼
```

普通按钮一般情况下都是配合JavaScript来进行各种操作的。
提交按钮一般都是用来给服务器提交数据的。
重置按钮一般用来清除用户在表单中输入的内容。

## 9.11 下拉列表

表单元素不一定都要放在form标签内。对于要与服务器进行交互的表单元素，必须放在form标签内才有效。

## 第10章 框架

在HTML中，我们可以使用iframe标签来实现一个内嵌框架。内嵌框架，是指在当前页面再嵌入另外一个网页。

src是必选的，用于定义链接页面的地址。

width和height这两个属性是可选的，分别用于定义框架的宽度和高度。

iframe实际上就是在当前页面嵌入另外一个页面，我们也可以同时嵌入多个页面。

还有frameset、frame标签，事实上这几个标签在HTML5标准中已经被废弃了。

## 11.2 CSS引入方式

为什么我们一直强烈不推荐使用Dreamweaver“点点点”的方式来开发页面，就是因为这种方式产生的页面代码中，所有的CSS样式都是行内样式。

@import方式与外部样式表很相似。不过在实际开发中，我们极少使用@import方式，而更倾向于使用link方式（外部样式）。原因在于@import方式是先加载HTML后加载CSS，而link是先加载CSS后加载HTML。如果HTML在CSS之前加载，页面用户体验就会非常差。

## 13.3 字体大小：font-size

font-size属性取值有两种：一种是“关键字”，如small、medium、large等；另外一种是“像素值”，如10px、16px、21px等。

px全称pixel（像素）

严格来说，px属于相对单位，因为屏幕分辨率的不同，1px的大小也是不同的。

如果不考虑屏幕分辨率，我们也可以把px当成绝对单位来看待，这也是很多地方说px是绝对单位的原因。

## 13.4 字体粗细：font-weight

font-weight属性取值有两种：一种是“100~900的数值”，另一种是“关键字”。

font-weight属性取值

对于实际开发来说，一般我们只会用到bold这一个属性值，其他的几乎用不上

font-weight属性可以取100、200、…、900这9个值。其中100相当于lighter，400相当于normal，700相当于bold，而900相当于bolder。

## 13.5 字体风格：font-style

font-style属性取值

italic是字体的一个属性，但是并非所有的字体都有这个italic属性。对于有italic属性的字体，我们可以使用“font-style:italic;”来实现斜体效果。但是对于没有italic属性的字体，我们只能另外想办法，也就是使用“font-style:oblique;”来实现。

## 13.6 字体颜色：color

十六进制RGB值，指的是类似“#FBF9D0”形式的值。

## 第14章 文本样式

字体样式针对的是“文字本身”的形体效果，而文本样式针对的是“整个段落”的排版效果。

## 14.2 首行缩进：text-indent

中文段落首行一般需要缩进两个字的空间。想要实现这个效果，那么textindent值应该是font-size值的2倍。

## 14.3 水平对齐：text-align

text-align属性不仅对文本有效，对图片（img元素）也有效。

## 14.4 文本修饰：text-decoration

在CSS中，我们可以使用text-decoration属性来定义文本的修饰效果（下划线、中划线、顶划线）。

text-decoration属性取值

使用“text-decoration:none;”去除a元素的下划线，这个技巧我们在实际开发中会大量用到。

## 14.5 大小写：text-transform

使用text-transform属性来将文本进行大小写转换。text-transform属性是针对英文而言的，因为中文不存在大小写之分。

text-transform属性取值

## 14.7 间距：letter-spacing、word-spacing

在CSS中，我们可以使用letter-spacing属性来控制字与字之间的距离。

在CSS中，我们可以使用word-spacing属性来定义两个单词之间的距离。

一般来说，word-spacing只针对英文单词而言。

对于中文网页来说，我们很少去定义字间距以及词间距。letter-spacing和word-spacing只会用于英文网页，平常几乎用不上，因此只需简单了解即可。

## 15.2 整体样式

border-width属性用于定义边框的宽度，取值是一个像素值。

border-style属性用于定义边框的外观，常用取值如表15-2所示。

## 15.3 局部样式

​​border-top-width:1px;￼border-top-style:solid;￼border-top-color:red;​​

border-top:1px solid red;​​

“border-bottom:0px;”“border-bottom:0;”和“border-bottom:none;”是等价的。

## 第16章 列表样式

list-style-type属性是针对ol或者ul元素的，而不是li元素。

list-style-type属性取值（有序列表）

list-style-type属性取值（无序列表）

由于列表项符号不太美观，因此在实际开发中，大多数情况下我们都需要使用“list-styletype:none;”将其去掉。

## 16.2 列表项图片：list-style-image

我们可以使用list-style-image属性来定义列表项图片，也就是使用图片来代替列表项符号。

一般情况下我们都不会用liststyle-image属性来实现，而是使用更为高级的iconfont图标技术来实现

## 18.3 图片对齐

可以使用vertical-align属性来定义图片的垂直对齐方式。

vertical-align属性定义周围的行内元素或文本相对于该元素的垂直方式

## 19.5 背景图片位置：background-position

background-position属性常用取值有两种：一种是“像素值”，另外一种是“关键字”（这里不考虑百分比取值）。

“background-position:12px 24px;”表示背景图片距离该元素左上角的水平方向距离为12px，垂直方向距离为24px。

## 19.6 背景图片固定：background-attachment

我们可以使用background-attachment属性来定义背景图片是随元素一起滚动还是固定不动。

## 第20章 超链接样式

对于未访问时状态，我们直接针对a元素定义就行了，没必要使用“a:link”。

## 20.2 深入了解:hover

事实上，“:hover”伪类可以定义任何一个元素在鼠标经过时的样式。注意，是任何元素。

## 22.3 清除浮动

在实际开发中，我们几乎不会使用“clear:left”或“clear:right”来单独清除左浮动或右浮动，往往都是直截了当地使用“clear:both”来把所有浮动清除，既简单又省事。

## 23.5 静态定位：static

在默认情况下，元素没有指定position属性时，这个元素就是静态定位的。也就是说，元素position属性的默认值是static。