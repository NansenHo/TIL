# 使用 `@property`

`@property` 是一个 Python 内置的装饰器，负责把一个方法变成属性调用。

加上 `@property`，将一个 `getter` 方法变成属性。

`@property` 本身又创建了另一个装饰器 `@score.setter`，负责把一个 `setter` 方法变成属性赋值，

```python
class Student(object):
    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError("score must be an integer!")
        if value < 0 or value > 100:
            raise ValueError("score must between 0 and 100.")
        self._score = value

s = Student()

s.score = 101
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
#   File "<stdin>", line 10, in score
# ValueError: score must between 0 and 100.

s.score = '100'
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
#   File "<stdin>", line 8, in score
# ValueError: score must be an integer!

s.score = 99
s.score
# 99
```

我们还可以定义只读属性。

只定义 `getter` 方法，不定义 `setter` 方法就是一个只读属性：

```python
class Student(object):

    @property
    def birth(self):
        return self._birth

    @birth.setter
    def birth(self, value):
        self._birth = value

    @property
    def age(self):
        return 2023 - self._birth
```

上面的 `birth` 是可读写属性。

而 `age` 就是一个只读属性，因为 `age` 可以根据 `birth` 和当前时间计算出来。

注意属性的方法名不要和实例变量重名。

下面代码就是错误的：

```python
class Student(object):

    # 方法名称和实例变量均为birth:
    @property
    def birth(self):
        return self.birth
```

因为调用 `s.birth` 时，首先转换为方法调用，在执行 `return self.birth` 时，又视为访问 `self` 的属性，于是又转换为方法调用，造成无限递归，最终导致栈溢出报错 `RecursionError`。

`@property` 广泛应用在类的定义中，可以让调用者写出简短的代码，同时保证对参数进行必要的检查。这样，程序运行时就减少了出错的可能性。

## 练习

请利用 `@property` 给一个 `Screen` 对象加上 `width` 和 `height` 属性，以及一个只读属性 `resolution`：

```python
# -*- coding: utf-8 -*-
class Screen(object):
    @property
    def width(self):
        return self._width
    @width.setter
    def width(self, value):
        self._width = value

    @property
    def height(self):
        return self._height
    @height.setter
    def height(self, value):
        self._height = value

    @property
    def resolution(self):
        return self._width * self._height

# 测试:
s = Screen()
s.width = 1024
s.height = 768
print('resolution =', s.resolution)
if s.resolution == 786432:
    print('测试通过!')
else:
    print('测试失败!')
```
