# 认识 Cargo

## cargo 是什么

包管理工具最重要的意义就是，**任何用户拿到你的代码，都能运行起来**。
而不会因为各种包版本依赖焦头烂额。

cargo 提供了一系列工具，从项目的创建、构建、测试、运行、甚至部署，一路负责到底。

同时，cargo 与 Rust 编译器 rustc 紧密结合。

## 创建 hello world 项目

```bash
mdkir rust-demo
cd rust-demo

cargo init
```

该项目的结构和配置文件都由 cargo 生成。

### `bin` 和 `lib` 类型

早期的 cargo 在创建项目时，必须要添加 `-bin` 参数。
现在的版本无需再添加这个参数。

Rust 项目分两种类型：

1. `bin`：一个可运行的项目
2. `lib`：一个依赖库项目
