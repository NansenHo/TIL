# path.resolve([...paths])

`path.resolve()` 方法将路径或路径片段的序列解析为绝对路径。

给定的路径序列从右到左处理，每个后续的 path 会被追加到前面，直到构建绝对路径。 

如果在处理完所有给定的 path 片段之后，还没有生成绝对路径，则使用当前工作目录。

生成的路径被规范化，并删除尾部斜杠（除非路径解析为根目录）。

零长度的 path 片段被忽略。

如果没有传入 path 片段，则 `path.resolve()` 将返回当前工作目录的绝对路径。

## path.resolve(__)

理解 `path.resolve(__dirname, '../dist')`

`path.resolve` 操作类似于 `cd` 操作，就是一步一步查找。

`__dirname` 则是获得当前文件所在目录的完整路径名。