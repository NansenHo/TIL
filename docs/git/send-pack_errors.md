# Fixing `send-pack` Errors in Git Push

## Errors

我创建了 `my-rime` 仓库来保存我的 Rime 输入法配置.

但当我将其 push 到远程仓库时 `git push --set-upstream origin main`, 发生了下面的报错:

```bash
(base) nansenho@mb-nansyou-01 my-rime %  git push --set-upstream origin main
Enumerating objects: 164, done.
Counting objects: 100% (164/164), done.
Delta compression using up to 8 threads
Compressing objects: 100% (160/160), done.
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
Writing objects: 100% (164/164), 45.79 MiB | 7.34 MiB/s, done.
Total 164 (delta 28), reused 0 (delta 0), pack-reused 0
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

可以看到, 我使用的是 HTTPS, 而非 SSH

## Resolving Errors

### Git 缓冲区

有可能是单个文件太大, Git 缓冲区不够用, 所以 push 出现错误

Git 主要有两个缓冲区相关的配置项：

1. `http.postBuffer`
   控制 Git 发送数据时的最大缓冲区（默认 1MB）

2. `http.maxRequestBuffer`
   控制 Git 请求的最大缓冲区（默认 10MB）

使用下面的命令分别可以查看 `http.postBuffer` 和 `http.maxRequestBuffer`:

```bash
# 如果没有返回值, 说明是默认的 1 MB
git config --global --get http.postBuffer

# 如果没有返回值, 说明是默认的 10 MB
git config --global --get http.maxRequestBuffer
```

> SSH 方式是端对端的直接传输，不会经过 HTTP 服务器, 也就不会受到服务器的超时或请求大小限制,
>
> 因此通常**更稳定**，特别适用于**大仓库**或**大文件推送**
>
> - HTTP 方式通常有文件大小上限（GitHub 限制 100MB 单文件，2GB git push 总大小）
> - 而 SSH 方式没有这种问题（但 GitHub 仍然有 100MB 的 LFS 限制）

通过下面的命令, 可以设置 `http.postBuffer`

```bash
# 单位为 字节, 524288000 bytes === 500 MB
git config --global http.postBuffer 524288000
```

在将 `http.postBuffer` 设置为 500 MB 之后, 代码成功 push 到远程仓库了

```bash
(base) nansenho@mb-nansyou-01 my-rime %  git push --set-upstream origin main
Enumerating objects: 164, done.
Counting objects: 100% (164/164), done.
Delta compression using up to 8 threads
Compressing objects: 100% (160/160), done.
Writing objects: 100% (164/164), 45.79 MiB | 8.15 MiB/s, done.
Total 164 (delta 28), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (28/28), done.
remote: warning: See https://gh.io/lfs for more information.
remote: warning: File build/rime_ice.table.bin is 57.62 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/NansenHo/my-rime.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

### Git LFS (Large File Storage)

但我也注意到了 Git 给我返回了一个 lfs 警告

Git LFS（Large File Storage）是 GitHub 推荐的工具，它专门用于管理二进制大文件（如 `.bin`、`.png`、`.mp4` 等），避免 Git 仓库膨胀。

> GitHub 允许的最大单个文件大小为 100 MB，超过 100 MB 之后 GitHub 会拒绝 push。
