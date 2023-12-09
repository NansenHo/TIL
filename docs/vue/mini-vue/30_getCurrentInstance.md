# 实现 `getCurrentInstance`

最好将修改一个全局变量的值的操作封装到函数里。

比如，修改全局变量 `currentInstance` 的值：

```js
currentInstance = instance;
```

就应该封装成函数来操作：

```js
function setCurrentInstance(instance) {
  currentInstance = instance;
}

setCurrentInstance(instance);
setCurrentInstance(null);
```

这样在调试上有个好处，我们将断点打在 `setCurrentInstance` 上，就可以跟踪 `currentInstance` 的全部变化。

而且代码也会更清晰，提高可读性和可维护性。
