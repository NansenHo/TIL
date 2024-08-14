# Parse

Parse 主要包括**词法分析**和**语法分析**。

## 词法分析

将源代码中每一个词切割开来，最后会生成很多 tokens。

tokens 是数组结构，数组里的元素都是对象。

`const name = 'nansen'` 就会被切割成以下形式的 tokens：

```
[
{
  type: 'keyword', // 关键字
  value: 'const'
},
{
  type: 'identifier', // 标识符
  value: 'name'
},
... ...
]
```

## 语法分析

词法分析结束后，会经过语法分析，最终生成 [AST 抽象语法树](抽象语法树.md)。
