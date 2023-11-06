# 使用 `list` 和 `tuple`

## `list`

Python 内置的一种数据类型是列表：`list`。

`list` 是一种有序的集合，可以随时添加和删除其中的元素。

```python
classmates = ['Michael', 'Bob', 'Tracy']
classmates
# ['Michael', 'Bob', 'Tracy']
```

变量 `classmates` 就是一个 `list`。

`list` 里面的元素的数据类型可以不同：

```python
>>> L = ['Apple', 123, True]
```

`list` 元素也可以是另一个 `list`：

```python
>>> s = ['python', 'java', ['asp', 'php'], 'scheme']
>>> len(s)
4
```

因此`s`可以看成是一个二维数组，类似的还有三维、四维……数组，不过很少用到。

如果一个 `list` 中一个元素也没有，就是一个空的 `list`，它的长度为 `0`。

### `len(list)`

用 `len()` 函数可以获得 `list` 元素的个数：

```python
len(classmates)
# 3
```

### `list[index]`

用索引来访问 `list` 中每一个位置的元素，记得索引是从 `0` 开始的。

```python
classmates[0]
# 'Michael'

classmates[1]
# 'Bob'

classmates[2]
# 'Tracy'

classmates[3]
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# IndexError: list index out of range
```

当索引超出了范围时，Python 会报一个 `IndexError` 错误。

所以，要确保索引不要越界，记得最后一个元素的索引是 `len(classmates) - 1`。

如果要取最后一个元素，除了计算索引位置外，还可以**用 `-1` 做索引**，直接获取最后一个元素。

```python
classmates[-1]
# 'Tracy'
```

以此类推，可以获取倒数第 `2` 个、倒数第 `3` 个...

```python
classmates[-2]
# 'Bob'

classmates[-3]
# 'Michael'

classmates[-4]
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# IndexError: list index out of range
```

### `list.append(ele)` 在 `list` 末尾追加元素

`list` 是一个可变的有序表，所以，可以往 `list` 中追加元素到末尾：

```python
classmates.append('Adam')
classmates
# ['Michael', 'Bob', 'Tracy', 'Adam']
```

### `list.pop()` 删除末尾元素

要删除 `list` 末尾的元素，用 `pop()` 方法：

```python
classmates.pop()
# 'Adam'

classmates
# ['Michael', 'Jack', 'Bob', 'Tracy']

classmates.pop(1)
# 'Jack'

classmates
# ['Michael', 'Bob', 'Tracy']
```

### `list.insert(index, ele)` 在特定位置插入元素

也可以把元素插入到指定的位置，比如索引号为 `1` 的位置：

```python
classmates.insert(1, 'Jack')
classmates
# ['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
```

### `list[index] = ele` 替换元素

要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：

```python
classmates[1] = 'Sarah'
classmates
# ['Michael', 'Sarah', 'Tracy']
```

### Python 的 `list` 和 JavaScript 的 `array` 的异同

**不同点**：

1. **内存使用**

   - Python 列表在存储混合类型数据时，可能会使用更多内存，因为每个元素都是一个包含其类型信息的对象。
   - 由于 V8 引擎的优化，JavaScript 数组的内存使用效率更高，尤其是只包含相同类型元素时。

2. **切片操作**

   - Python 列表支持切片操作，允许快速访问和修改列表的一部分。
   - JavaScript 数组没有切片操作，但提供了 `slice` 方法来返回数组的一部分（原数组不会被修改）。

**相似点**：

1. 都支持包含不同类型的元素（字符串，数字，其他数组/列表等）。

2. 都是动态的，即可以根据需要动态地调整大小。

3. 都是可变的，即允许在创建后修改。

4. 都支持函数式编程。
   - Python 通常是通过全局函数 `map()`, `filter()`, `reduce()` 等，而不是列表自身的方法。
   - JavaScript 数组有强大的函数式编程支持，如 `map()`, `filter()`, `reduce()` 等方法。

## `tuple`

另一种有序列表叫元组：`tuple`。

`tuple` 和 `list` 非常类似，

### `tuple` 不可变

但是 `tuple` **一旦初始化就不能修改**。

```python
>>> classmates = ('Michael', 'Bob', 'Tracy')
```

现在，`classmates` 这个 `tuple` 不能变了，它也没有 `append()`，`insert()` 这样的方法。

因为 `tuple` 不可变，所以代码更安全。
如果可能，**能用 `tuple` 代替 `list` 就尽量用 `tuple`**。

### `tuple[index]` 获取元素

其他获取元素的方法和 `list` 是一样的，你可以正常地使用 `classmates[0]`，`classmates[-1]`，但不能赋值成另外的元素。

### 空 `tuple`

如果要定义一个空的 `tuple`，可以写成 `()`：

```python
t = ()
t
# ()
```

### 只有一个元素的 `tuple`

不能这样定义只有 `1` 个元素的 `tuple`：

```python
t = (1)
t
# 1
```

因为括号 `()` 既可以表示 `tuple`，又可以表示数学公式中的小括号，这就产生了歧义。

因此 Python 规定，这种情况下，按小括号进行计算，计算结果自然是数字 `1`。

只有 `1` 个元素的 `tuple` 定义时必须加一个逗号 `,`，来消除歧义。

```python
t = (1,)
# (1,)
```

Python 在显示只有 `1` 个元素的 `tuple` 时，也会加一个逗号`,`，以免你误解成数学计算意义上的括号。

### 可变的 `tuple`

最后来看一个“可变的” `tuple`：

```python
t = ('a', 'b', ['A', 'B'])
t[2][0] = 'X'
t[2][1] = 'Y'
t
# ('a', 'b', ['X', 'Y'])
```

## 练习

请问以下变量哪些是 `tuple` 类型：

- [x] `a = ()`
- [ ] `b = (1)`
- [ ] `c = [2]`
- [x] `d = (3,)`
- [x] `e = (4,5,6)`

> `list` 和 `tuple` 是 Python 内置的有序集合，一个可变，一个不可变。根据需要来选择使用它们。
