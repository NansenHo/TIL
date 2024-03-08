# Bash 简介

## Bash 是什么

Bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），

也是目前大部分 Linux 发行版的默认 Shell。

## Shell 的含义

Shell 这个单词的原义是“外壳”，与 kernel（内核）相对，用于表示用户跟内核交互的对话界面。

Shell 的多重含义：

1. Shell 是一个程序

   提供一个与用户对话的环境，这个环境只有一个命令提示符，让用户可以用键盘输入命令，所以又称命令行环境（command line interface，简写为 CLI）。

   Shell 接收用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。

   本教程中，除非特殊指明，Shell 指的就是命令行环境。

2. Shell 是一个命令解释器，解释用户输入的命令

   它支持变量，条件判断，循环操作等语法，用户可以用 Shell 写出各种脚本。

   这些脚本可以直接通过 Shell 解释执行，而无需编译。

3. Shell 是一个工具箱

   提供了各种小工具，供用户方便地使用操作系统的功能。

## Shell 的种类

只要是能给用户提供命令行环境的程序都能看作是 Shell。

历史上，主要有以下 Shell：

- Bourne Shell (sh)
- Bourne Again Shell (bash)
- C Shell (csh)
- TENEX C Shell (tcsh)
- Korn Shell (ksh)
- Z Shell (zsh)
- Friendly Interactive Shell (fish)

Bash 是目前最常用的 Shell。

下列命令可以查看当前设备的默认 Shell：

```bash
echo $SHELL
```

但你正在使用的 Shell 不一定是默认的 Shell，一般来说，`ps` 命令结果的倒数二行是当前使用的 Shell。

下面的命令可以查看当前 Linux 系统安装的所有 Shell。

```bash
cat /etc/shells
```

## 命令行环境

### 什么是终端模拟器

如果是不带有图形环境的 Linux 系统（比如专用于服务器的系统），启动后就直接是命令行环境。

现在大部分的 Linux 发行版，尤其是针对普通用户的发行版，都是图形环境。

用户登录系统后，自动进入图形环境，需要自己启动终端模拟器，才能进入命令行环境。

所谓“终端模拟器”（terminal emulator）就是一个模拟命令行窗口的程序，让用户在一个窗口中使用命令行环境，并且提供各种附加功能，比如调整颜色、字体大小、行距等等。

> 典型的终端模拟器包括：
>
> - Windows 上的 PowerShell 或命令提示符（cmd）
> - macOS 的 Terminal
> - Linux 系统中的 GNOME Terminal、Konsole 等

> 终端模拟器和 Shell 的区别：
>
> - 终端模拟器提供了一个使用 Shell 的环境，而 Shell 是在该环境下运行的命令解释器。
> - 终端模拟器更多关注于用户界面和交互，Shell 则更多处理命令的解释和执行。
> - 没有终端模拟器，用户很难以图形界面的方式使用 Shell；
>   没有 Shell，终端模拟器就只是一个空壳，无法执行命令或脚本。

### 命令行提示符

提示符往往是一串前缀，最后以一个美元符号 `$` 结尾，用户可以在这个符号后面输入各种命令。

根用户（root）的提示符，不以美元符号（`$`）结尾，而以井号（`#`）结尾，用来提醒用户，现在具有根权限，可以执行各种操作，务必小心，不要出现误操作。

> 这个符号也是可以自己定义的。

### 进入和退出 bash

如果你的 Shell 不是 Bash，可以输入 `bash` 命令启动 Bash。

退出 Bash 环境，可以使用 `exit` 命令，也可以同时按下 `Ctrl + d`。

## Shell 和 Bash 的历史

Shell 伴随着 Unix 系统的诞生而诞生。

- **1969 年**，Ken Thompson 和 Dennis Ritchie 开发了第一版的 Unix。

- **1971 年**，Ken Thompson 编写了最初的 Shell，称为 Thompson shell，程序名是 sh，方便用户使用 Unix。

- 1973 年至 1975 年间，John R. Mashey 扩展了最初的 Thompson shell，添加了编程功能，使得 Shell 成为一种编程语言。这个版本的 Shell 称为 Mashey shell。

- 1976 年，Stephen Bourne 结合 Mashey shell 的功能，重写一个新的 Shell，称为 Bourne shell。

- 1978 年，加州大学伯克利分校的 Bill Joy 开发了 C shell，为 Shell 提供 C 语言的语法，程序名是 csh。它是第一个真正替代 sh 的 UNIX shell，被合并到 Berkeley UNIX 的 2BSD 版本中。

- 1979 年，UNIX 第七版发布，内置了 Bourne Shell，导致它成为 Unix 的默认 Shell。
  注意，Thompson shell、Mashey shell 和 Bourne shell 都是贝尔实验室的产品，程序名都是 sh。对于用户来说，它们是同一个东西，只是底层代码不同而已。

- 1983 年，David Korn 开发了 Korn shell，程序名是 ksh。

- 1985 年，Richard Stallman 成立了自由软件基金会（FSF），由于 Shell 的版权属于贝尔公司，所以他决定写一个自由版权的、使用 GNU 许可证的 Shell 程序，避免 Unix 的版权争议。

- **1988 年**，自由软件基金会的第一个付薪程序员 Brian Fox 写了一个 Shell，功能基本上是 Bourne shell 的克隆，叫做 Bourne-Again SHell，简称 Bash，程序名为 bash，任何人都可以免费使用。后来，它逐渐成为 Linux 系统的标准 Shell。

1989 年，Bash 发布 1.0 版。

1996 年，Bash 发布 2.0 版。

2004 年，Bash 发布 3.0 版。

2009 年，Bash 发布 4.0 版。

2019 年，Bash 发布 5.0 版。

用户可以通过 bash 命令的 `--version` 参数或者环境变量 `$BASH_VERSION`，查看本机的 Bash 版本。
