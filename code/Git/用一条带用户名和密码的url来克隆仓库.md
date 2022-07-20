# 用一条带用户名和密码的命令来克隆仓库

这种方法是因为本地 git 已经登录了一个 git 账号，但是这个账号没有权限拉取该仓库的权限

此时，就可以在 url 加上 `username:password@` 来拉取。

```shell
git clone https://username:password@git.test.com/Demo/demo-1.git
```