# FastAPI

## 相关连接

- [FastAPI 文档](https://fastapi.tiangolo.com)
- [FastAPI 源码](https://github.com/tiangolo/fastapi)

## FastAPI 是什么

FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.8+ 并基于标准的 Python 类型提示。

## FastAPI 的关键特性

- **快速**：可与 NodeJS 和 Go 并肩的极高性能（归功于 Starlette 和 Pydantic）。最快的 Python web 框架之一。
- **高效编码**：提高功能开发速度约 200％ 至 300％。
- **更少 bug**：减少约 40％ 的人为（开发者）导致错误。
- **智能**：极佳的编辑器支持。处处皆可自动补全，减少调试时间。
- **简单**：设计的易于使用和学习，阅读文档的时间更短。
- **简短**：使代码重复最小化。通过不同的参数声明实现丰富功能。bug 更少。
- **健壮**：生产可用级别的代码。还有自动生成的交互式文档。
- **标准化**：基于（并完全兼容）API 的相关开放标准：OpenAPI (以前被称为 Swagger) 和 JSON Schema。

## 依赖

Python 3.8 及更高版本

FastAPI 站在以下巨人的肩膀之上：

- [Starlette](https://www.starlette.io/) 负责 web 部分。
- [Pydantic](https://docs.pydantic.dev/latest/) 负责数据部分。

## 安装

```bash
pip install fastapi
```

你还会需要一个 ASGI 服务器，生产环境可以使用 Uvicorn 或者 Hypercorn。

```bash
pip install "uvicorn[standard]"
```

## 示例

