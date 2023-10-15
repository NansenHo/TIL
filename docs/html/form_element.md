# `<form>` 表单标签

`form` 会发一个 `get` 或 `post` 请求，然后刷新页面。

Event:  `onsubmit`

| Attribute | Effect | Value | Note |
| :--- | :--- | :--- | :--- |
| action | 请求那个地址 | | action 其实就相当于是 img 里面的 src。我要请求的那个页面的地址。|
| method | get / post 请求 | get, post | 其实还有一个，但另外一个值兼容性不行，也没有人用 |
| autocomplete | 是否自动填充 | on, off | |
| target | 用什么方式打开页面 | _self, _blank, _parent, _top, xxx_framename | |

`form` 标签里一般会有一个输入框和提交按钮

```html
<body>
    <form action="/xxx" method="post" autocomplete="on">
      <input name="username" type="text" />
      <input type="submit" />
    </form>
  </body>
```

如果我们写了 `<input type="submit" />` 那浏览器会根据你当前使用的语言，自动地变成对应语言的 `提交`。

可以通过改 `value` 属性，或是使用 `button` 标签进行更改。

```html
<input type="submit" value="搞起">
```

```html
<input type="submit" />
<button type="submit">搞起</button>
```

使用 `button` 的话，其里面还可以再放东西，但 `input` 就不行了。

```html
<input type="submit" value="搞起" />
<button type="submit"><strong>搞起</strong>
<img src="cat.jpg" width="100px" alt="a cat">
</button>
```

一个 `form` 里面，必须要有一个 `type ="submit"` 的按钮。

- 如果不写，那么默认会是 `submit` ；
- 只写 `type="button"`，那只是一个可以点击的 `button` ，并不能提交。我们要触发它的事件，必须要有一个 `type = “submit”`  的东西才行。
