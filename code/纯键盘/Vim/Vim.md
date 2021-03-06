# Vim 

## Vim 基础

### normal 和 insert 两种模式

- mormal 模式（vim 模式）
- insert 模式（文字输入模式）

通过 `i` / `a` 键，可以从 normal 模式切换到 insert 模式。
通过 `esc` 键 / `control` + `[` 键都可以从 insert 模式切换到 normal 模式。

### 移动

- j 下
- k 上
- h 左
- l 右

#### 快速移动

在 normal 模式下，通过长按 jkhl 来快速移动如何设置：

这需要我们进入 VScode Vim 插件的官网，将上面的设置命令依次都在终端里执行一次即可。

![](../../images/Vim/VScode-Vim快速移动设置.jpg)

#### 移动到行首和行尾

blank 字符：
1. 空格
2. tab
3. 回车
4. 换行
5. 等

包含 blank：
1. `0` 可以定位到当前行的行首；
2. `$` 可以定位到当前行的行尾；

去除 blank：
1. `⇧shift + 6` 或者 `^` 可以定位到当前行除 blank 字符的行首；
2. `g + _` 可以定位到当前行除 blank 字符的行尾； 

### 终端中使用 vim

#### 如何进入/退出 vim

- 进入：输入 `vim` 即可开始在终端中使用 vim；
  在终端中，进入某一目录后，运行 `vim new.txt` 命令，会进入 vim normal 模式，且在没有 new.txt 文件的情况下还会新建一个 new.txt 文件。

退出：在 normal 模式下，
- 输入 `:wq` + enter 即可，表示**保存并退出**；
  > `wq` 是 write quit 的意思。
- 输入 `:q!` + enter 即可，表示**强制退出**；

### 插入

1. `I` 在行首插入（包含 blank 字符）；
2. `A` 在行尾插入（包含 blank 字符）；
3. `i` 在光标前插入；
4. `a` 在光标后插入；

1. `O` 在行前插入；
2. `o` 在行后插入；

### 复制粘贴删除

1. `yy` 复制该行；
2. `p` 粘贴；
3. `dd` 删除该行；

vim 的复制粘贴和系统原生的 command c/v 是互相独立，不冲突的。

normal 模式里也可以用 command c/v；

使用 `yy` 和 `p` Vim 是将字符串存到一个寄存器里面，然后再拿出来。
使用 `dd` 之后，被删掉的字符串也将会被保存到寄存器里面，所以在执行 `dd` 之后可以执行 `p` 我们又可以拿回被删掉的那一行。在将某行代码移动位置中很好用。

### 如何在多个 VScode 窗口中快速切换

`command` + `

## Vim 语法

> Vim 语法 = 操作符 operation + 动作（区域范围）

动作：hjkl o O 等移动都是属于动作。

### 三个操作符

1. 删除符号 `d`
2. 删除并进入 insert 模式 `c`
3. 复制 `y`

输入一个 `d` 之后，会在底部进入一个 pendding 的状态

![](../../images/Vim/d操作符.jpg)

然后我们再输入动作。比如
