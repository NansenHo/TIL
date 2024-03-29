# `sorted`

## 排序算法

排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。

如果是数字，我们可以直接比较，但如果是字符串或者两个 `dict` 呢？

Python 内置的 `sorted()` 函数就可以对 `list` 进行排序：

```python
>>> sorted([36, 5, -12, 9, -21])
[-21, -12, 5, 9, 36]
```

`sorted()` 函数也是一个高阶函数，它还可以接收一个 `key` 函数来实现自定义的排序，例如按绝对值大小排序：

```python
sorted([-21, -12, 5, 9, 36], key=abs)
[5, 9, -12, -21, 36]
```

`key` 指定的函数将作用于 `list` 的每一个元素上，然后，`sorted` 根据 `key` 函数返回的结果进行排序。

```python
sorted(['bob', 'about', 'Zoo', 'Credit'])
# ['Credit', 'Zoo', 'about', 'bob']
```

默认情况下，对字符串排序，是按照 ASCII 的大小比较的，由于 `'Z'` < `'a'`，结果，大写字母 `Z` 会排在小写字母 `a` 的前面。

现在，我们提出排序应该忽略大小写，按照字母序排序。

要实现这个算法，不必对现有代码大加改动，只要我们能用一个 `key` 函数把字符串映射为忽略大小写排序即可。

```python
sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower)
# ['about', 'bob', 'Credit', 'Zoo']
```

要进行反向排序，不必改动 `key` 函数，可以传入第三个参数 `reverse=True`：

```python
sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)
# ['Zoo', 'Credit', 'bob', 'about']
```

> 可以看出，高阶函数十分强大，其核心代码可以保持非常简洁。

`sorted()` 也是一个高阶函数。用 `sorted()` 排序的关键在于实现一个映射函数。

## 练习

假设我们用一组 `tuple` 表示学生名字和成绩：

```python
L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
```

请用 `sorted()` 对上述列表分别按名字排序：

```python
# -_- coding: utf-8 -_-
L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]

def by_name(t):
    return str.lower(t[0])

L2 = sorted(L, key=by_name)
print(L2)
```
