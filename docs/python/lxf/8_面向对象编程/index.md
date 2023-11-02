# 面向对象编程

面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。

OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。

面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。

为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。

而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息。

计算机程序的执行就是一系列消息在各个对象之间传递。

在 Python 中，所有数据类型都可以视为对象，当然也可以自定义对象。

自定义的对象数据类型就是面向对象中的类（Class）的概念。

假设我们要处理学生的成绩表，为了表示一个学生的成绩，面向过程的程序可以用一个 `dict` 表示：

```python
std1 = { 'name': 'Michael', 'score': 98 }
std2 = { 'name': 'Bob', 'score': 81 }
```

处理学生成绩可以通过函数实现，比如打印学生的成绩：

```python
def print_score(std):
    print('%s: %s' % (std['name'], std['score']))
```

如果采用面向对象的程序设计思想，我们首选思考的不是程序的执行流程，而是 `Student` 这种数据类型应该被视为一个对象。

这个对象拥有 `name` 和 `score` 这两个属性（Property）。

如果要打印一个学生的成绩，首先必须创建出这个学生对应的对象。

然后，给对象发一个 `print_score` 消息，让对象自己把自己的数据打印出来。

```python
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def print_score(self):
        print('%s: %s' % (self.name, self.score))

bart = Student('Bart Simpson', 59)
lisa = Student('Lisa Simpson', 87)
bart.print_score()
# Bart: 59
lisa.print_score()
# lisa: 87
```

给对象发消息实际上就是调用对象对应的关联函数，我们称之为对象的方法（Method）。

> 在 Python 中，定义类时通常需要继承自一个基类。例如 `object`。
>
> `object` 是所有类的基类，它提供了一些默认的方法和属性，如 `__init__` 和 `__str__` 等，这些方法可以在子类中被继承和重写。
>
> 在 Python 3 中，如果没有显式指定一个基类，那么默认情况下，所有的类都会继承自 `object` 类。
>
> 因此在 Python 3 中，我们可以不写 `(object)`。
>
> 两种写法在 Python 3 中是等效的。
>
> 但在 Python 2 中，如果不继承自 `object`，那么类就不会具有一些新式类的特性。
>
> 所以 `(object)` 的写法可以确保代码在 Python 2 和 Python 3 中的兼容性。
>
> 如果你只在 Python 3 中运行代码，可以省略 `(object)`。

面向对象的设计思想是从自然界中来的，因为在自然界中，类（Class）和实例（Instance）的概念是很自然的。

面向对象的设计思想是抽象出 Class，根据 Class 创建 Instance。

面向对象的抽象程度又比函数要高，因为一个 Class 既包含数据，又包含操作数据的方法。

