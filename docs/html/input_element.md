# `<input>` element

```html
<input name="username" type="text" required/>
```

如果我们没有填写，就提交的话，会说请填写。这就是自带的验证。

如何让两个 radio 只能选一个？

```html
<input type="radio" name="gender" /> 男
<input type="radio" name="gender" /> 女
```

在复选框很多的时候，如何让人知道哪些是一组的呢？

```html
<input type="checkbox" name="hobbies"/>dance 
<input type="checkbox" name="hobbies"/>jump
<input type="checkbox" name="hobbies"/>basketball 
<input type="checkbox" name="hobbies"/>sing
<input type="checkbox" name="horrible_things"/>smoke
```

同一组的复选框，都要加同一个 `name`。

虽然说目前能用到的，看上去和没加 `name` 没有区别，但后面提交表单的时候有用。

> `input` 元素都要加 `name` 属性。

```html
<input type="hidden" /> 
```

这种 `input` 是用来给机器输的，而不是我们。

看不见的 `input` 是用来给 JS 自动填写一些 `id` ，字符串之类的东西，传到后台。

> 我们一般不监听 `input` 的 `click` 事件。