# 模块

## 什么是模块（Module）

在 Python 中，一个 `.py` 文件就称之为一个模块（Module）。

## 使用模块的好处

1. 提高代码的可维护性

2. 避免函数名和变量名冲突

> 自己在编写模块时，尽量不要与内置函数的名字冲突。

## 什么是包（Package）

为了避免模块名冲突，Python 又引入了按目录来组织模块的方法，称为包（Package）。

### `__init__.py` 文件

请注意，每一个包目录下面都会有一个 `__init__.py` 的文件，这个文件是必须存在的，否则，Python 就把这个目录当成普通目录，而不是一个包。

假设我们有一个 `mycompany` 包：

```
mycompany
├─ __init__.py
├─ abc.py
└─ xyz.py
```

包里面的 `__init__.py` 可以是空文件，也可以有 Python 代码。

`__init__.py` 本身也是一个模块。

这个示例下， `__init__.py` 的模块名就是 `mycompany`。

### 多级目录

可以有多级目录，组成多级层次的包结构。比如如下的目录结构：

```
mycompany
 ├─ web
 │  ├─ __init__.py
 │  ├─ utils.py
 │  └─ www.py
 ├─ __init__.py
 ├─ abc.py
 └─ utils.py
```

文件 `www.py` 的模块名就是 `mycompany.web.www`。

两个文件 `utils.py` 的模块名分别是 `mycompany.utils` 和 `mycompany.web.utils`。

> 自己创建模块时要注意命名，不能和 Python 自带的模块名称冲突。
>
> 例如，系统自带了 sys 模块，自己的模块就不可命名为 sys.py，否则将无法导入系统自带的 sys 模块。

`mycompany.web` 也是一个模块，该模块默认对应的是 `__init__.py` 文件。

`mycompany.web.other.py` 对应的就是 `mycompany.web` 模块下的其他 `.py` 文件。
