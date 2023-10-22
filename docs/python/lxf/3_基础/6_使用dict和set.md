# 使用 dict 和 set

## dict

Python 内置了字典：dict 的支持，dict 全称 dictionary。

在其他语言中也称为 map，使用键-值（key-value）存储，具有极快的查找速度。

```python
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```

这种 key-value 存储方式，在放进去的时候，必须根据 key 算出 value 的存放位置，这样，取的时候才能根据 key 直接拿到 value。

由于一个 key 只能对应一个 value，所以，多次对一个 key 放入 value，后面的值会把前面的值冲掉。

```python
>>> d['Jack'] = 90
>>> d['Jack']
90
>>> d['Jack'] = 88
>>> d['Jack']
88
```

要删除一个 key，用`pop(key)`方法，对应的 value 也会从 dict 中删除：

```python
>>> d.pop('Bob')
75
>>> d
{'Michael': 95, 'Tracy': 85}
```

请务必注意，dict 内部存放的顺序和 key 放入的顺序是没有关系的。

### 避免 key 不存在的错误

有两种办法，一是通过`in`判断 key 是否存在。

```python
>>> 'Thomas' in d
False
```

二是通过 dict 提供的`get()`方法，如果 key 不存在，可以返回`None`，或者自己指定的 value。

```python
>>> d.get('Thomas')
>>> d.get('Thomas', -1)
-1
```

> 注意：返回`None`的时候 Python 的交互环境不显示结果。

### dict 和 list 相比

dict 的特点：

1. dict 查找和插入的速度极快，不会随着 key 的增加而变慢；
2. dict 需要占用大量的内存，内存浪费多。

list 的特点：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

dict 是用空间来换取时间的一种方法。

### dict 实际运用中的要点

dict 可以用在需要高速查找的很多地方，在 Python 代码中几乎无处不在，正确使用 dict 非常重要，需要牢记的第一条就是 dict 的 key 必须是**不可变对象**。

这是因为 dict 根据 key 来计算 value 的存储位置，如果每次计算相同的 key 得出的结果不同，那 dict 内部就完全混乱了。

这个通过 key 计算位置的算法称为哈希算法（Hash）。

要保证 hash 的正确性，作为 key 的对象就不能变。

在 Python 中，字符串、整数等都是不可变的，因此，可以放心地作为 key。而 list 是可变的，就不能作为 key。

## set

set 和 dict 类似，也是一组 key 的集合，但不存储 value。

由于 key 不能重复，所以，在 set 中，没有重复的 key。

要创建一个 set，需要提供一个 list 作为输入集合：

```python
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
```

重复元素在 set 中自动被过滤。

通过 `add(key)` 方法可以添加元素到 set 中，可以重复添加，但不会有效果。

通过 `remove(key)` 方法可以删除元素。

set 可以看成数学意义上的无序和无重复元素的集合，因此，两个 set 可以做数学意义上的交集、并集等操作。

```python
>>> s1 = set([1, 2, 3])
>>> s2 = set([2, 3, 4])
>>> s1 & s2
{2, 3}
>>> s1 | s2
{1, 2, 3, 4}
```

set 的原理和 dict 一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证 set 内部“不会有重复元素”。

> 使用 key-value 存储结构的 dict 在 Python 中非常有用，选择不可变对象作为 key 很重要，最常用的 key 是字符串。

> 如果 `(1,2,3)` 和 `(1,[2,3])` 作为 dict 和 set 的 key 可以吗？
>
> `(1,2,3)`是 tuple，不可变，所以可以作为 dict 和 set 的 key,不会报错；
> `(1,[2,3])` 是 tulpe 里面包含了 list，list 可变，所以不能作为 dict 和 set 的 key，要报错。
