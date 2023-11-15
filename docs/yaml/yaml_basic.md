# Yaml 入门

## Yaml 概览

Yaml 文件使用 `.yml` 或 `.Yaml` 扩展名，并遵循特定的语法规则。

Yaml 拥有 Perl、C、XML、HTML 和其他编程语言的特性。

Yaml 也是 JSON 的超集，所以 JSON 文件在 Yaml 中有效。

没有通常的格式符号，如大括号、方括号、结束标记或引号。

Yaml 文件更容易阅读，因为其使用 Python 风格的缩进来确定结构并表示嵌套。

为了保持跨系统的可移植性，设计时不允许使用制表符，因此改用空格（字面意义的空格字符）。

> 请注意，Yaml 文件的结构是映射或列表，遵循层次结构，具体取决于缩进以及定义键值的方式。

它以映射来关联键值对。每个键必须是唯一的，而且顺序并不重要。

这跟 Python 字典或 Bash 脚本中的变量赋值相似。

## 基本语法

### 基本语法

- 大小写敏感
- 使用缩进表示层级关系
- 缩进时不允许使用 Tab 键，只允许使用空格。
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
  一个列表序列以破折号（-）和空格开始，而缩进则将其与父级分开。

### 注释

注释可以用井号或哈希符号（#）。YAML 不支持多行注释，每行都需要以井号字符为后缀。

### `---` & `...`

Yaml 的三个破折号（`---`）用来表示文档的开始，而三个点（`...`）表示文档的结束。

### Yaml 中支持的数据结构

- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）

- 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）

- 纯量（scalars）：单个的、不可再分的值

## Yaml 中的三种数据结构

### 1. 对象

```Yaml
animal: pets
```

即 JavaScript 里的

```js
{
  animal: "pets";
}
```

Yaml 也允许这样的写法：

```Yaml
hash: { name: Steve, foo: bar }
```

即 JavaScript 里的

```js
{ hash: { name: 'Steve', foo: 'bar' } }
```

### 2. 数组

一组连词线开头的行，构成一个数组。

```Yaml
- Cat
- Dog
- Goldfish
```

转为 JavaScript 如下：

```js
["Cat", "Dog", "Goldfish"];
```

数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。

```Yaml
- - Cat
  - Dog
  - Goldfish
```

转成 JavaScript 如下：

```js
[["Cat", "Dog", "Goldfish"]];
```

也可以用行内表示法

```Yaml
animal: [Cat, Dog]
```

转成 JavaScript 如下：

```js
{
  animal: ["Cat", "Dog"];
}
```

### 3. 纯量

纯量是最基本的、不可再分的值。

以下数据类型都属于 JavaScript 的纯量。

- 字符串
- 布尔值

  直接用 `false` 和 `true` 表示。

- 整数

  直接以字面量的形式表示。

- 浮点数

  直接以字面量的形式表示。

- `Null`

  用 `~` 表示。

- 时间

  采用 ISO8601 格式表示。

  ```Yaml
  iso8601: 2001-12-14t21:59:43.10-05:00
  ```

- 日期

  采用复合 iso8601 格式的年、月、日表示。

  ```Yaml
  date: 1976-07-31
  ```

> Yaml 允许使用两个感叹号 `!!` 来强制转换类型。
>
> ```Yaml
> e: !!str 123
> f: !!str true
> ```
>
> 转为 JavaScript 为：
>
> ```js
> { e: '123', f: 'true' }
> ```

## 数据结构详解

### 复合结构

```Yaml
languages:
  - Ruby
  - Perl
  - Python
websites:
  Yaml: Yaml.org
  Ruby: ruby-lang.org
  Python: python.org
  Perl: use.perl.org
```

转为 JavaScript 如下

```js
{
  languages: [ 'Ruby', 'Perl', 'Python' ],
  websites: {
    Yaml: 'Yaml.org',
    Ruby: 'ruby-lang.org',
    Python: 'python.org',
    Perl: 'use.perl.org'
  }
}
```

### 字符串

字符串是最常见，也是最复杂的一种数据类型。

字符串默认不使用引号表示。

如果字符串之中包含空格或特殊字符，需要放在引号之中。

```Yaml
str: "内容： 字符串"
```

使用单引号(`'`)包围的字符串会按照字面的意思来处理，里面的转义序列不会被解释或转换。

例如，`\n` 会被视为两个字符：反斜杠和 `n`，而不是换行符。

使用双引号(`"`)包围的字符串会解释特殊字符的转义序列。

例如，`\n` 会被视为换行符。

```Yaml
s1: '内容\n字符串'
s2: "内容\n字符串"
```

单引号之中如果还有单引号，必须连续使用两个单引号转义。

```Yaml
str: "labor's day"
```

相当于以下 JavaScript ：

```js
{
  str: "labor's day";
}
```

字符串可以写成多行，从第二行开始，必须有一个单空格缩进。换行符会被转为空格。

```Yaml
str: 这是一段
  多行
  字符串
```

转为 JavaScript 如下：

```js
{
  str: "这是一段 多行 字符串";
}
```

多行字符串可以使用 `|` 保留换行符，也可以使用 `>` 折叠换行。

```Yaml
this: |
  Foo
  Bar
that: >
  Foo
  Bar
```

转为 JavaScript 代码如下：

```js
{ this: 'Foo\nBar\n', that: 'Foo Bar\n' }
```

`+` 表示保留文字块末尾的换行，`-` 表示删除字符串末尾的换行。

```Yaml
s1: |
  Foo

s2: |+
  Foo


s3: |-
  Foo
```

转为 JavaScript 代码如下：

```js
{ s1: 'Foo\n', s2: 'Foo\n\n\n', s3: 'Foo' }
```

字符串之中可以插入 HTML 标记。

```Yaml
message: |

  <p style="color: red">
    段落
  </p>
```

转为 JavaScript 如下。

```js
{
  message: '\n<p style="color: red">\n  段落\n</p>\n';
}
```

## 引用

锚点 `&` 和别名 `*`，可以用来引用。

```Yaml
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

等同于下面的代码：

```
defaults:
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  adapter:  postgres
  host:     localhost

test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
```

- `&` 用来建立锚点（defaults）
- `*` 用来引用锚点
- `<<` 表示合并到当前数据

下面是另一个例子：

```Yaml
- &showell Steve
- Oren
- *showell
```

转为 JavaScript 代码如下：

```js
["Steve", "Oren", "Steve"];
```
