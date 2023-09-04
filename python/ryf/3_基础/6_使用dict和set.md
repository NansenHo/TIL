# 使用dict和set

## dict

Python内置了字典：dict的支持，dict全称dictionary。

在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度。

```python
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```

这种key-value存储方式，在放进去的时候，必须根据key算出value的存放位置，这样，取的时候才能根据key直接拿到value。

由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉。

```python
>>> d['Jack'] = 90
>>> d['Jack']
90
>>> d['Jack'] = 88
>>> d['Jack']
88
```

要删除一个key，用`pop(key)`方法，对应的value也会从dict中删除：

```python
>>> d.pop('Bob')
75
>>> d
{'Michael': 95, 'Tracy': 85}
```

请务必注意，dict内部存放的顺序和key放入的顺序是没有关系的。

### 避免key不存在的错误

有两种办法，一是通过`in`判断key是否存在。

```python
>>> 'Thomas' in d
False
```

二是通过dict提供的`get()`方法，如果key不存在，可以返回`None`，或者自己指定的value。

```python
>>> d.get('Thomas')
>>> d.get('Thomas', -1)
-1
```

> 注意：返回`None`的时候Python的交互环境不显示结果。

### dict 和 list 相比

dict 的特点：

1. dict 查找和插入的速度极快，不会随着key的增加而变慢；
2. dict 需要占用大量的内存，内存浪费多。

list 的特点：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

dict是用空间来换取时间的一种方法。

### dict 实际运用中的要点

dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，正确使用dict非常重要，需要牢记的第一条就是dict的key必须是**不可变对象**。

这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。

这个通过key计算位置的算法称为哈希算法（Hash）。

要保证hash的正确性，作为key的对象就不能变。

在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key。

## set

set和dict类似，也是一组key的集合，但不存储value。

由于key不能重复，所以，在set中，没有重复的key。

要创建一个set，需要提供一个list作为输入集合：

```python
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
```

重复元素在set中自动被过滤。

通过 `add(key)` 方法可以添加元素到set中，可以重复添加，但不会有效果。

通过 `remove(key)` 方法可以删除元素。

set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作。

```python
>>> s1 = set([1, 2, 3])
>>> s2 = set([2, 3, 4])
>>> s1 & s2
{2, 3}
>>> s1 | s2
{1, 2, 3, 4}
```

set的原理和dict一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复元素”。

> 使用key-value存储结构的dict在Python中非常有用，选择不可变对象作为key很重要，最常用的key是字符串。

> 如果 `(1,2,3)` 和 `(1,[2,3])` 作为 dict 和 set 的 key 可以吗？
> 
> `(1,2,3)`是tuple，不可变，所以可以作为dict和set的key,不会报错；
> `(1,[2,3])` 是tulpe里面包含了list，list可变，所以不能作为dict和set的key，要报错。
