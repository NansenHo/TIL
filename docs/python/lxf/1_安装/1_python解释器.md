# Python 解释器

当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以.py 为扩展名的文本文件。

要运行代码，就需要 Python 解释器去执行.py 文件。

由于整个 Python 语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写 Python 解释器来执行 Python 代码（当然难度很大）。

事实上，确实存在多种 Python 解释器。

## 官方版本解释器：CPython

安装好 Python 3.x 后，我们就直接获得了一个官方版本的解释器：CPython。

这个解释器是用 C 语言开发的，所以叫 CPython。

CPython 是使用最广的 Python 解释器。教程的所有代码也都在 CPython 下执行。

CPython 用 `>>>` 作为提示符。

## IPython

IPython 是基于 CPython 之上的一个交互式解释器，也就是说，IPython 只是在交互方式上有所增强，但是执行 Python 代码的功能和 CPython 是完全一样的。

IPython 用 `In [序号]:` 作为提示符。

## PyPy

PyPy 是另一个 Python 解释器，它的目标是执行速度。PyPy 采用 JIT 技术，对 Python 代码进行动态编译（注意不是解释），所以可以显著提高 Python 代码的执行速度。

绝大部分 Python 代码都可以在 PyPy 下运行，但是 PyPy 和 CPython 有一些是不同的，这就导致相同的 Python 代码在两种解释器下执行可能会有不同的结果。

[PyPy 和 CPython 的不同点](https://doc.pypy.org/en/latest/cpython_differences.html)

## Jython

Jython 是运行在 Java 平台上的 Python 解释器，可以直接把 Python 代码编译成 Java 字节码执行。

## IronPython

IronPython 和 Jython 类似，只不过 IronPython 是运行在微软.Net 平台上的 Python 解释器，可以直接把 Python 代码编译成.Net 的字节码。

> 如果要和 Java 或.Net 平台交互，最好的办法不是用 Jython 或 IronPython，而是通过网络调用来交互，确保各程序之间的独立性。
