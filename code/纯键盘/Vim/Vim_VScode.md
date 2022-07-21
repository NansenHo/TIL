## 在 VScode 中使用 Vim

### 设置一些快捷键来替代默认快捷键

#### 移动到行首/行尾

去除 blank 的移动（`g + _` 和 `^`）更常用，但按起来却很不方便，所以我们去改一下映射：

```json
"vim.normalModeKeyBindings": [
    {
        "before": ["H"],
        "after": ["^"]
    },
    {
        "before": ["L"],
        "after": ["g", "_"]
    }
]
```

#### 在 VScode 中快速切换回 normal 模式

```json
"vim.insertModeKeyBindings": [
    {
        "before": ["n", "n"],
        "after": ["<Esc>"]
    }
]
```
这样通过双击 n 键就可以切换到 normal 模式了。

> 我没有选择这样设置，因为我觉得习惯了原生的更有益，毕竟还要在别的软件中使用 Vim。
