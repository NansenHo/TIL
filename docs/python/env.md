# 公司后端开发环境 - 记录

## Terminal

```bash
brew install python3
brew install pyenv
brew install pyenv-virtualenv
brew install mysql
brew install sam
```

## Inside the Project

在项目中，

```bash
# 创建虚拟环境
python3 -m venv .venv

# 安装所有项目依赖
pip install -r requirements.txt

# 激活虚拟环境
source .venv/bin/activate
```

## 跑 Python 项目

Python 的虚拟环境是一个隔离的环境，使得项目可以独立地安装所需的库和依赖，而不会影响系统全局的 Python 安装或其他项目。

这有助于防止库版本之间的冲突，特别是当不同的项目需要不同版本的同一库时。

`.venv` 通常是虚拟环境的目录名称，但它可以是任何名称。

在这个目录中，你会找到 `bin`、`include` 和 `lib` 等子目录，这些目录包含了虚拟环境的所有内容，例如 Python 解释器、库和脚本。

`activate` 脚本位于 `.venv/bin/` 目录中，它的作用是激活虚拟环境。

当你激活虚拟环境后，你的命令行或终端提示符通常会显示虚拟环境的名称，以表示虚拟环境当前处于激活状态。

此外，当虚拟环境被激活时，`python` 和 `pip` 命令会指向虚拟环境中的 Python 解释器和 `pip` 版本，而不是系统全局的版本。

```bash
# 创建虚拟环境
python3 -m venv .venv

# 激活虚拟环境
source .venv/bin/activate

# 安装依赖
pip install -r requirements.txt
```

```bash
# 运行 pytest 文件
pytest path
```
