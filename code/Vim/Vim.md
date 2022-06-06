### 两种模式

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

### 在终端中如何使用/退出 vim

- 输入 `vim` 即可开始在终端中使用 vim；

在终端中，进入某一目录后，运行 `vim new.txt` 命令，会进入 vim normal 模式，且在没有 new.txt 文件的情况下还会新建一个 new.txt 文件。

在 normal 模式下，
- 输入 `:wq` + enter 即可，表示保存并退出；
- 输入 `:q!` + enter 即可，表示强制退出；

### 切换到 normal 模式下的快捷键更换

有多种方案：

#### 将 control 键更改成 caps lock 键

![](../../images/Vim/更改按键-%20macOS.jpg)

这样我们按 `control` + `[` 快捷键就会轻松很多。

#### 在 vscdoe 中的 setting.json 里添加下面的映射

```json
"vim.insertModeKeyBindings": [
    {
        "before": ["n", "n"],
        "after": ["<Esc>"]
    }
]
```
这样通过双击 n 键就可以切换到 normal 模式了。








