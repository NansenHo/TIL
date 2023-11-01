# MySQL

安装完 MySQL 后，除了 **MySQL Server**，即真正的 MySQL 服务器外，

还附赠一个 **MySQL Client** 程序。

## 如何使用 MySQL Client

MySQL Client 是一个命令行客户端。

可以通过 MySQL Client 登录 MySQL，然后，输入 SQL 语句并执行。

打开命令提示符，输入命令 `mysql -u root -p`，提示输入口令。

填入 MySQL 的 `root` 口令，如果正确，就连上了 MySQL Server，同时提示符变为 `mysql>`。

输入 `exit` 断开与 MySQL Server 的连接并返回到命令提示符。

## MySQL Client 和 MySQL Server

两者的可执行程序：

- MySQL Client 的可执行程序是 mysql

- MySQL Server 的可执行程序是 mysqld

MySQL Client 和 MySQL Server 的关系如下：

```
┌──────────────┐  SQL   ┌──────────────┐
│ MySQL Client │───────>│ MySQL Server │
└──────────────┘  TCP   └──────────────┘
```

在 MySQL Client 中输入的 SQL 语句**通过 TCP 连接**发送到 MySQL Server。

> 命令行程序 mysql 实际上是 MySQL 客户端，真正的 MySQL 服务器程序是 mysqld，在后台运行。

默认端口号是 `3306`，即如果发送到本机 MySQL Server，地址就是 `127.0.0.1:3306`。

也可以只安装 MySQL Client，然后连接到远程 MySQL Server。

假设远程 MySQL Server 的 IP 地址是 `10.0.1.99`，那么就使用 `-h` 指定 IP 或域名：

```sql
mysql -h 10.0.1.99 -u root -p
```
