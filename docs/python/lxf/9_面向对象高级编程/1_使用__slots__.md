# 使用 `__slots__`

## 给实例绑定属性和方法

正常情况下，当我们定义了一个 `class`，创建了一个 `class` 的实例后，我们可以给该实例绑定任何属性和方法，这就是动态语言的灵活性。

我们可以给实例绑定属性和方法：

```python
class Student(object):
    pass

# 给实例绑定属性
s = Student()
s.name = 'Michael'
print(s.name)
# Michael

# 给实例绑定方法
def set_age(self, age):
    self.age = age

from types import MethodType
s.set_age = MethodType(set_age, s)
s.set_age(25)
s.age
# 25
```

给类动态绑定方法，这样所有实例都可以用了：

```python
def set_score(self, score):
    self.score = score

Student.set_score = set_score
```

> 动态绑定允许我们**在程序运行的过程中**动态给 `class` 加上功能，这在静态语言中很难实现。

## 使用 `__slots__`

可以动态添加属性和方法当然很方便，但如果我们想要限制实例的属性，要怎么办呢？

为了达到限制的目的，Python 允许在定义 `class` 的时候，定义一个特殊的 `__slots__` 变量，来限制该 `class` 实例能添加的属性：

```python
class Student(object):
    # 用 tuple 来定义允许绑定的属性名称
    __slots__ = ('name', 'age')
```

