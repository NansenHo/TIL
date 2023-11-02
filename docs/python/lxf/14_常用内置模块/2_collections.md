# `collections`

`collections` 是 Python 内建的一个集合模块，提供了许多有用的集合类。

## `namedtuple`

我们知道 `tuple` 可以表示不变集合。

例如，一个点的二维坐标就可以表示成：

```python
p = (1, 2)
```

但是单看 p 很难看出是表示坐标的，不过为其特地定义一个 `class` 又小题大作，

这时候，`namedtuple` 就派上用场了。

`namedtuple` 的接受两个参数，分别是名称和属性 list，

即 `namedtuple('名称', [属性list])`

```python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p  = Point(1, 2)

p.x
# 1

p.y
# 2
```

`namedtuple` 是一个函数，它用来创建一个自定义的 `tuple` 对象，并且规定了 `tuple` 元素的个数，并可以用属性而不是索引来引用 `tuple` 的某个元素。

这样一来，我们用 `namedtuple` 可以很方便地定义一种数据类型，它具备 `tuple` 的不变性，又可以根据属性来引用，使用十分方便。

可以验证创建的 `Point` 对象是 `tuple` 的一种子类：

```python
isinstance(p, Point)
# True

isinstance(p, tuple)
# True
```

类似的，如果要用坐标和半径表示一个圆，也可以用 `namedtuple` 定义：

```python
from collections import namedtuple
Circle = namedtuple('Circle', ['x', 'y', 'r'])

c = Circle()
```

## `deque`

使用 `list` 存储数据时，按索引访问元素很快，但是插入和删除元素就很慢了。

因为 `list` 是线性存储，数据量大的时候，插入和删除效率很低。

`deque` 是为了高效实现插入和删除操作的双向列表，适合用于队列和栈。

```python
from collections import deque
q = deque(['b', 'c'])

q.append('d')
q.appendleft('a')

q
# deque(['a', 'b', 'c', 'd'])
```

`deque` 除了实现 `list` 的 `append()` 和 `pop()` 外，还支持 `appendleft()` 和 `popleft()`，这样就可以非常高效地往头部添加或删除元素。

## `defaultdict`

使用 `dict` 时，如果引用的 `Key` 不存在，就会抛出 `KeyError`。

如果希望 `key` 不存在时，返回一个默认值，就可以用 `defaultdict`：

```python
from collections import defaultdict
dd = defaultdict(lambda: 'N/A')
dd['key1'] = 'abc'

dd['key1']
# 'adc'

dd['key2']
# 'N/A'
```

注意默认值是调用函数返回的，而函数在创建 `defaultdict` 对象时传入。

除了在 `Key` 不存在时返回默认值，`defaultdict` 的其他行为跟 `dict` 是完全一样的。

## `OrderedDict`

使用 `dict` 时，`Key` 是无序的（Python3.7 之前）。

> 尽管 Python 3.7+ 中的普通字典也是有序的，但 `OrderedDict` 仍然有其用途。
>
> 特别是在需要精确控制键值对的插入和顺序时。
>
> 所以，如果需要使用有序字典，可以继续使用 `collections` 模块中的 `OrderedDict` 类。

在对 `dict` 做迭代时，我们无法确定 `Key` 的顺序。

如果要保持 `Key` 的顺序，可以用 `OrderedDict`：

```python
from collections import OrderedDict

d = dict([('a', 1), ('b', 2), ('c', 3)])
d
# {'a': 1, 'b': 2, 'c': 3}

od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])
od
# OrderedDict([('a', 1), ('b', 2), ('c', 3)])
```

> 注意，
>
> `OrderedDict` 的 `Key` 会按照插入的顺序排列，不是 `Key` 本身排序。

```python
from collections import OrderedDict

od = OrderedDict()
od['z'] = 1
od['y'] = 2
od['x'] = 3

list(od.keys()) # 按照插入的Key的顺序返回
# ['z', 'y', 'x']
```

`OrderedDict` 可以实现一个 FIFO（先进先出）的 `dict`，当容量超出限制时，先删除最早添加的 `Key`：

```python
from collections import OrderedDict

# 自定义一个先进先出的有序字典类
#
class LastUpdatedOrderedDict(OrderedDict):

    # __init__ 用于初始化 `LastUpdatedOrderedDict` 示例
    def __init__(self, capacity):
        super(LastUpdatedOrderedDict, self).__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        if len(self) - containsKey >= self._capacity:
            last = self.popitem(last=False)
            print('remove:', last)
        if containsKey:
            del self[key]
            print('set:', (key, value))
        else:
            print('add:', (key, value))
        OrderedDict.__setitem__(self, key, value)
```

- 在 Python 中，使用以双下划线 `__` 开头和结尾的命名方式来表示特殊方法或特殊属性。

- `popitem()` 是 Python `dict` 对象的一个方法，用于删除字典中的一个键值对，并返回被删除的键值对。

## `ChainMap`

`ChainMap` 可以把一组 `dict` 串起来并组成一个逻辑上的 `dict`。

`ChainMap` 本身也是一个 `dict`，但是查找的时候，会按照顺序在内部的 `dict` 依次查找。

### 使用场景

应用程序往往都需要传入参数，参数可以通过命令行传入，可以通过环境变量传入，还可以有默认参数。

我们可以用 `ChainMap` 实现参数的优先级查找，即先查命令行参数，如果没有传入，再查环境变量，如果没有，就使用默认参数。


