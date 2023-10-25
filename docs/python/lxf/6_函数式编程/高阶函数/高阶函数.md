# 高阶函数

高阶函数英文叫 Higher-order function。

## 变量可以指向函数

变量可以指向函数是指：函数本身也可以赋值给变量。

```python
>>> abs
<built-in function abs>
```

```python
>>> f = abs
>>> f
<built-in function abs>
```

变量 `f` 现在已经指向了 `abs` 函数本身。

直接调用 `abs()` 函数和调用变量 `f()` 完全相同。

## 函数名也是变量

函数名其实就是指向函数的变量！

对于 `abs()` 这个函数，完全可以把函数名 `abs` 看成变量，它指向一个可以计算绝对值的函数！

如果我们将 `abs` 指向其他对象，例如让其指向 `10`：

```python
>>> abs = 10
>>> abs(-10)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not callable
```

就无法通过 `abs(-10)` 调用该函数了！

因为 `abs` 这个变量已经不指向求绝对值函数而是指向一个整数 `10`！

> 注：由于 `abs` 函数实际上是定义在 `import builtins` 模块中的，
>
> 所以要让修改 `abs` 变量的指向在其它模块也生效，要用：
>
> ```python
> import builtins;
> builtins.abs = 10。
> ```

## 高阶函数

在 Python 中，函数是一等公民（first-class citizens），这意味着函数可以被当作参数传递、作为返回值返回，还可以被赋值给变量或存储在数据结构中。

```python
def add(x, y, f):
    return f(x) + f(y)

x = -5
y = 6
f = abs
f(x) + f(y) ==> abs(-5) + abs(6) ==> 11
return 11
```
