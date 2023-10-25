# `map` / `reduce`

Python 内建了 `map()` 和 `reduce()` 函数。

如果你读过 Google 的那篇大名鼎鼎的论文 [“MapReduce: Simplified Data Processing on Large Clusters”](https://research.google/pubs/pub62/)，你就能大概明白 `map` 和 `reduce` 的概念。

## `map`

`map` 函数接受两个参数，一个是函数，一个是 `Iterable`。

`map` 将传入的函数依次作用到序列的每个元素，并把结果作为新的 `Iterator` 返回。

```python
>>> def f(x):
...     return x * x
...
>>> r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
>>> list(r)
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```

结果 `r` 是一个 `Iterator`，`Iterator` 是惰性序列，因此通过 `list()` 函数让它把整个序列都计算出来并返回一个 `list`。

当然，使用 `for` 循环也能做到，但不够直观。

所以，`map()` 作为高阶函数，事实上它把运算规则抽象了。

> **惰性序列**
>
> 惰性序列是指在真正需要某个元素时才计算该元素的序列。
>
> Python 中最典型的惰性序列就是 `generator`。
>
> 惰性计算的好处：
>
> 1. **内存效率**：你不需要一开始就存储所有的元素，这在处理大数据或无限序列时特别有用。
> 2. **计算效率**：你只计算你真正需要的元素，避免了不必要的计算。
>
> 惰性序列的核心思想：元素是在真正需要时才计算的，而不是事先计算并存储起来。

## `reduce`

`reduce` 把一个函数作用在一个序列 `[x1, x2, x3, ...]` 上。

这个函数必须接收两个参数，`reduce` 把结果继续和序列的下一个元素做累积计算。

比如实现一个求和序列：

```python
>>> from functools import reduce
>>> def add(x, y):
...     return x + y
...
>>> reduce(add, [1, 3, 5, 7, 9])
25
```

比如实现把序列 `[1, 3, 5, 7, 9]` 变换成整数 `13579`：

```python
>>> from functools import reduce
>>> def fn(x, y):
        return x * 10 + y
>>> reduce(fm, [1, 3, 5, 7, 9])
```

> 求和运算可以直接用 Python 内建函数 `sum()`，没必要动用 `reduce`。

## 练习

利用 `map()` 函数，把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。

输入：`['adam', 'LISA', 'barT']`，输出：`['Adam', 'Lisa', 'Bart']`：

```python
# -*- coding: utf-8 -*-
def normalize(name):
    return name.capitalize()

# TEST
L1 = ['adam', 'LISA', 'barT']
L2 = list(map(normalize, L1))
print(L2)  # 输出: ['Adam', 'Lisa', 'Bart']
```

请编写一个 `prod()` 函数，可以接受一个 `list` 并利用 `reduce()` 求积。

```python
# -*- coding: utf-8 -*-
from functools import reduce
def prod(L):
    # 将列表 L 中的所有元素转换为整数
    m=list(map(int,L))
    # 使用 reduce 函数和匿名函数 lambda x, y: x*y 来计算列表 m 中所有元素的乘积。
    return reduce(lambda x,y: x*y, m)

print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))
if prod([3, 5, 7, 9]) == 945:
    print('测试成功!')
else:
    print('测试失败!')
```

// TODO
利用 `map` 和 `reduce` 编写一个 `str2float` 函数，把字符串 `'123.456'` 转换成浮点数 `123.456`：

```python
# -*- coding: utf-8 -*-
from functools import reduce

# 小数点前后的部分分开处理
def str2float(s):
    len = s.find('.')
        inter = reduce(lambda x,y:x*10+y,map(int,s[:len]))
        decim = reduce(lambda x,y:x*10+y,map(int,s[len+1:]))
        return float(inter+decim*10**(-1*len))

print('str2float(\'123.456\') =', str2float('123.456'))
if abs(str2float('123.456') - 123.456) < 0.00001:
    print('测试成功!')
else:
    print('测试失败!')
```
