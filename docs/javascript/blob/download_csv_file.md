# 下载 CSV 文件

## 问题说明

Web 系统中有一个把 CSV 数据下载下来的功能。最近同事发现下载下来的 CSV 文件，如果直接用 Excel 打开，内容会变成乱码。

下载 CSV 文件的函数代码如下：

```ts
function downloadCsvFile(csv: string, fileName: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${fileName}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

> **[Comma-separated values（CSV）](https://zh.wikipedia.org/wiki/%E9%80%97%E5%8F%B7%E5%88%86%E9%9A%94%E5%80%BC) 字符分隔值**
>
> CSV 文件以纯文本形式存储表格数据（数字和文本）。
>
> CSV 文件由任意数目的记录组成，记录间以某种换行符分隔；
> 每条记录由字段组成，字段间的分隔符是其它字符或字符串，最常见的是逗号或制表符。
> 通常，所有记录都有完全相同的字段序列。
>
> CSV 文件的格式不存在通用标准，也没有指定所使用的字符编码。

## 问题解决

我发现下载下来的 CSV 文件，用 Excel 打开后，变成乱码的内容只有日语，英语的显示是正常的。
而且用 MacOS 的预览和 Numbers 打开，没有乱码问题。

所以我怀疑是 Excel 没有是识别到 CSV 文件的 UTF-8 编码类型。

### Excel 不完善的编码支持

Excel 对 CSV 文件的默认编码支持并不完善，尤其是在不同的地区设置中。

在某些环境下，Excel **默认会将 CSV 文件识别为 ANSI 或 Windows-1252 编码**，而不是 UTF-8。

如果 CSV 文件中包含**非 ASCII 字符**（如中文、日文等多字节字符），而文件没有 BOM，Excel 可能无法正确解码，从而出现乱码问题。

### BOM (Byte-order Mark)

[Byte-order mark BOM](https://en.wikipedia.org/wiki/Byte_order_mark) 是位于码点 `U+FEFF` 的 Unicode 的名称。

当以 UTF-16 或 UTF-32 来将 UCS/Unicode 所组成的字符串编码时，这个字符被用来标示其端序。
它也被用来当做标示文件是以 UTF-8、UTF-16 或 UTF-32 编码的标记。

### 修复后的函数代码

```ts
export function downloadCSVFile(csv: string, filename: string) {
  const bom = "\uFEFF";
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  try {
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
  } finally {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
```
