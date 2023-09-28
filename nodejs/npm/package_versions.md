# package.json 

```json
  "dependencies": {
    "axios": "^1.4.0"
  }
```

## The rules of version number

版本号一般是 `major.minor.patch` 的格式。从右往左依次表示：

1. `patch` 表示**小版本变更**，通常是一些 bug fix、兼容老版本等。

2. `minor` 表示**大版本变更**，通常是一些 API 的变化、新增功能、兼容老版本等。

3. `major` 通常是**设计变动、模块重构、新的架构调整等**，可能不兼容老版本，

## The `^` and `~` before the version number

仔细观察，你会发现 package.json 中有些包的版本号前，有这两个符号：

1. `^major.minor.patch`

The `^` symbol signifies that any higher `MINOR` or `PATCH` version would satisfy this version constraint. 
   
2. `~major.minor.patch`

The `~` symbol signifies that any higher `PATCH` version would satisfy the version constraint. 