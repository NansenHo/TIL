# `filter`

## `filter` 介绍

Python 内建的 `filter()` 函数用于过滤序列。

和 `map()` 类似，`filter()` 也接收一个函数和一个序列。

和 `map()` 不同的是，`filter()` 把传入的函数依次作用于每个元素，然后根据返回值是 `True` 还是 `False` 决定保留还是丢弃该元素。

在一个 `list` 中，删掉偶数，只保留奇数，可以这么写：

```python
def is_odd(num):
    return num % 2 == 1

list(filter(is_odd, [1,2,3,4,5,6,7]))
# [1, 3, 5, 7]
```

`filter()` 函数返回一个迭代器（iterator）而不是列表（list）。

迭代器是一个惰性计算的序列，这意味着它会在你迭代它时按需生成元素，而不是一开始就生成所有的元素。

将 `filter()` 的结果包裹在 `list()` 里，可以强制迭代器一次性地计算所有的元素，并将这些元素放入一个列表中。

把一个序列中的空字符串删掉，可以用：

```python
def not_empty(s):
    return s and s.strip()

list(filter(not_empty, ['name', 'age', '', ' ', 'gender', None]))
# ['name', 'age', 'gender']
```

## 用 `filter` 求素数

> 质数又称素数。
> 质数是指，在大于 1 的自然数中，除了 1 和它本身以外不再有其他因数的自然数。

求质数，常用的办法是[埃拉托斯特尼筛法](https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95)。

```python
from math import sqrt
def is_prime(n):
    if n == 1:
        return False
    for i in range(2, int(sqrt(n)+1)):
        if n % i == 0:
            return False
    return True

is_prime(20) # False
is_prime(3) # True
```

## 练习

回数是指从左向右读和从右向左读都是一样的数，例如 `12321`，`909`。请利用 `filter()` 筛选出回数：

```python
# -*- coding: utf-8 -*-
def is_palindrome(n):
    return str(n) == str(n)[::-1]

# 测试:
output = filter(is_palindrome, range(1, 1000))
print('1~1000:', list(output))
if list(filter(is_palindrome, range(1, 200))) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191]:
    print('测试成功!')
else:
    print('测试失败!')
```

`str(n)[::-1]` 使用 Python 的切片功能来翻转字符串。

`[::-1]` 表示从字符串的末尾开始取到开头，并且每次跳过一个字符，所以它会**返回一个反转的字符串**。

例如，对于字符串 `'12321'`，`str(n)[::-1]` 将返回 `'12321'`。

### 使用切片来翻转字符串

切片的一般格式是：

```python
sequence[start:stop:step]
```

- `start`: 开始的索引（默认为 `0`）
- `stop`: 结束的索引（默认为序列的长度）
- `step`: 步长（默认为 `1`）

`start` 和 `stop` 都被省略，则意味着包括了整个序列。

`step` 是 `-1`，意味着它从末尾开始，每次步进为 `-1`，所以实际上是在反向迭代整个序列。
