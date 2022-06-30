# zsh: command not found: pnpm 和 npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead. 问题

- [zsh: command not found: pnpm 和 npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead. 问题](#zsh-command-not-found-pnpm-和-npm-warn-config-global---global---local-are-deprecated-use---locationglobal-instead-问题)
  - [问题描述](#问题描述)
  - [解决方法](#解决方法)
    - [1. 终端中执行 `open .zshrc`](#1-终端中执行-open-zshrc)
    - [2. 打开 .zshrc 之后，在里面写入 `source ~/.bash_profile` / `source .bash_profile` 并保存退出](#2-打开-zshrc-之后在里面写入-source-bash_profile--source-bash_profile-并保存退出)
    - [3. 在终端中执行 `source .zshrc`](#3-在终端中执行-source-zshrc)

## 问题描述

`npm install pnpm -g` 安装 pnpm 时，npm 给了一个警告。

```shell
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
```

在我使用 `npm install pnpm --location=global` 安装后，

再用 `pnpm --version` 检验是否安装成功，结果返回 `zsh: command not found: pnpm`

## 解决方法

把 `bash shell` 中 `.bash_profile` 里的全部环境变量加入 `zsh shell` 。

### 1. 终端中执行 `open .zshrc`

有可能你并没有 `.zshrc` 这个文件，这时你需要自己创建一下。

通过 `touch ~/.zshrc` / `touch .zshrc` 来创建。

> `.zshrc` 文件在 macOS Catalina 中默认不存在，我们需要创建它。

> `~` 在 Linux 路径中表示的意思是：当前登录用户的用户主文件夹。比如如果当前用户是 root 就代表 root 用户的主文件夹 /root 。

### 2. 打开 .zshrc 之后，在里面写入 `source ~/.bash_profile` / `source .bash_profile` 并保存退出

哪个奏效用哪个。

这一步会在执行 `.zshrc` 时将 `.bash_profile` 里的全部环境变量加入 `zsh shell` 。

如果你没有 `.bash_profile` 这个文件，那需要自己创建一个。

通过 `touch ~/.bash_profile` 或者 `touch .bash_profile` 来创建。

然后 `open .bash_profile` 在文件里写入以下 PATH

```shell
export PATH=~/.npm-global/bin:${PATH}
```

> **注意**
> `PATH=~/.npm-global` 里的 `=` 两边不要为了美观去加空格。

之后你要看看你有没有 `.npm-global` 这个目录（`mkdir ~/.npm-global` 命令），如果没有，你需要自己创建一个 `mkdir ~/.npm-global` 。

别忘了还要将 npm 全局安装的位置设置成 `.npm-global`。

```shell
npm config set prefix '~/.npm-global'
```

npm 全局下载的包就会安装到这个位置去了。

### 3. 在终端中执行 `source .zshrc`