# Using Code In HTML

在 HTML 中，如果你有连续多个空格或者回车，都会被缩为一个空格。

`<pre>` 包裹住的文本中的空白符（比如空格和换行符）都会显示出来。

可以配合 `<code>` 元素来来包裹代码。

```html
<pre>
  <code>
    const arr = [1, 2, 3, 4, 5];
		const min_number = Math.min(...arr)
  </code>
</pre>
```