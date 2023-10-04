# Vim 命令

## 移動

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| `0` / `^` | 行首 |  |  |
| `$` | 行尾 |  |  | 
| `b` | 上一個單詞開頭 ||
| `w` | 下一個單詞開頭 |  |  |
| `e` | 下一個單詞結尾 |  |  |
|  |  |  |  |

## 插入

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| `A` | 在行尾插入 |||
| `e + a` | 在當前單詞後插入 |||
|  |  |  |  |

## 選中

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| `v` | 以字符為單位<br/>Characterwise visual mode | command ||
| `V` | 以行為單位<br/>Linewise visual mode | command ||
| `Ctrl + v` | 以塊為單位<br/>Blockwise visual mode | command ||
| `esc` / `ctrl + [` | 退出選中模式 | insert | |
| `o` | `visual mode` 中，在選中區域的頭和尾之間切換光標位置 | command | |
| `I` | `blockwise visual mode` 中，前插入 | insert | |
| `A` | `blockwise visual mode` 中，後插入 | insert | |
| `ve` | 選中從光標位置到單詞結尾<br/>`v` 還可以和其他移動命令結合 |  |  |
|  |  |  |  |

## 刪除

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| `x` | 光標位置字符 | command |||
| `d` | 刪除 | command ||
| `c` | 刪除 | insert ||
| `s` | 光標位置字符 | insert |||
| `X` | 光標位置的前一個字符 | command |||
| `S` | 光標所在行，除縮進外的字符 | insert ||
| `dd` | 删除一整行 | command |
| `cc` | 删除一整行 | insert |
| `de` | 光標到單詞尾 |  |  |
| `ce` / `cw` | 删除单词，保留单词后面的空格 | insert |
| `dw` | 删除单词和单词后面的空格 | command |
| `diw` | 刪除光標所在位置的單詞 | command |  |
| `ciw` | 刪除光標所在位置的單詞 | insert |  |
| `v` + `d / c` | 選中內容 | command / insert ||
|  |  |  |  |

## 查找

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| / | 正向查找 ||
| ? | 反向查找 ||
| `/` + searchContent + `<CR>` | 高亮匹配项 ||
|  |  |  |  |

## 增加

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| >G | 当前行锁进 |||
| guw / gue | 光标后面的一个字母转换为小写 |||
| gUw、gUe | 光标后面的一个字母转换为大写 |||
| gu5w、gu5e、gU5w、gU5e | 转换光标后面5个字母的 |||
|  |  |  |  |

## 其他

| Key | Meaning |  | |
| :---: | --- | --- | --- |
| :h | 打开官方文档 |||
| Esc | 从输入模式切换到普通模式 |||
|  |  |  |  |
|  |  |  |  |