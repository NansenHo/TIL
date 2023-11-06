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

属性的方法名不要和实例变量重名。

```python
class Student(object):

    # 方法名称和实例变量均为birth:
    @property
    def birth(self):
        return self.birth
```


