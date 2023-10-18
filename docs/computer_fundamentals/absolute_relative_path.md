# Absolute Path And  Relative Path

#### 所有不以 `/` 或 `~` 开头的都是相对路径。

| Path | Meaning |
| :--- | :--- |
| `/` | root directory |
| `./` | current directory |
| `../` | upper level directory |
| `~` | 代码主目录 |

> 为什么 `/` 明明表示的是根目录，但 `<a href="/a/b/c/文件名">` 里的 `/a/b/c/文件名` 却有一种相对路径的感觉？
> 
> 这是因为，之前我们讲的所有路径，都是基于文件的。
> 在基于 `http` 的时候，其根目录是我们开服务的地方。
> 而该 `<a>` 标签所在的 .html 文件就在根目录里。