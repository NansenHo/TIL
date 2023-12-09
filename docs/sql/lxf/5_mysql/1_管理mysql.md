# 管理 MySQL

要管理 MySQL，可以使用可视化图形界面 MySQL Workbench。

MySQL Workbench 可以用可视化的方式查询、创建和修改数据库表。

但是，归根到底，MySQL Workbench 是一个图形客户端，它对 MySQL 的操作仍然是发送 SQL 语句并执行。

因此，本质上，MySQL Workbench 和 MySQL Client 命令行都是客户端。

和 MySQL 交互，唯一的接口就是 SQL。

MySQL 提供了大量的 SQL 语句用于管理。

虽然可以使用 MySQL Workbench 图形界面来直接管理 MySQL，但是，很多时候，通过 SSH 远程连接时，只能使用 SQL 命令。

## 数据库

在一个运行 MySQL 的服务器上，实际上可以创建多个数据库（Database）。

```
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| shici              |
| sys                |
| test               |
| school             |
+--------------------+
```

其中，`information_schema`、`mysql`、`performance_schema` 和 `sys` 是系统库，不要去改动它们。其他的是用户创建的数据库。

> 注意：
>
> 在 MySQL 命令行客户端输入 SQL 后，记得加一个 `;`, 表示 SQL 语句结束，再回车就可以执行该 SQL 语句。
>
> 虽然有些 SQL 命令不需要 `;`，也能执行，但类似 SELECT 等语句不加 `;`，会让 MySQL 客户端换行后继续等待输入。
>
> 如果在图形界面或程序开发中集成 SQL 则不需要加 `;`。

要创建一个新数据库，使用命令：

```sql
mysql> CREATE DATABASE test;
Query OK, 1 row affected (0.01 sec)
```

要删除一个数据库，使用命令：

```sql
mysql> DROP DATABASE test;
Query OK, 0 rows affected (0.01 sec)
```

注意：删除一个数据库将导致该数据库的所有表全部被删除。

对一个数据库进行操作时，要首先将其切换为当前数据库：

```sql
mysql> USE test;
Database changed
```

## 表

列出当前数据库的所有表，使用命令：

```sql
mysql> SHOW TABLES;
+---------------------+
| Tables_in_test      |
+---------------------+
| classes             |
| statistics          |
| students            |
| students_of_class1  |
+---------------------+
```

要查看一个表的结构，使用命令：

```sql
mysql> DESC students;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | bigint(20)   | NO   | PRI | NULL    | auto_increment |
| class_id | bigint(20)   | NO   |     | NULL    |                |
| name     | varchar(100) | NO   |     | NULL    |                |
| gender   | varchar(1)   | NO   |     | NULL    |                |
| score    | int(11)      | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```

创建表使用 `CREATE TABLE` 语句，而删除表使用 `DROP TABLE` 语句。

添加列，例如给 `students` 表新增一列 `birth`，使用：

```sql
ALTER TABLE students ADD COLUMN birth VARCHAR(10) NOT NULL;
```

修改列，例如把列名改为 `birthday`，类型改为 `VARCHAR(20)`：

```sql
ALTER TABLE students CHANGE COLUMN birth birthday VARCHAR(20) NOT NULL;
```

要删除列：

```sql
ALTER TABLE students DROP COLUMN birthday;
```

## 退出 MySQL

使用 `EXIT` 命令退出 MySQL：

```sql
mysql> EXIT
```

注意 `EXIT` 仅仅断开了客户端和服务器的连接，MySQL 服务器仍然继续运行。
