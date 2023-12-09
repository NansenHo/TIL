# Read Uncommitted

Read Uncommitted 是隔离级别最低的一种事务级别。

在这种隔离级别下，

一个事务会读到另一个事务**更新后但未提交**的数据，

如果另一个事务回滚，那么当前事务读到的数据就是脏数据，

这就是脏读（Dirty Read）。

来看一个例子。首先，我们准备好 `students` 表的数据，该表仅一行记录：

```sql
mysql> select * from students;
+----+-------+
| id | name  |
+----+-------+
|  1 | Alice |
+----+-------+
1 row in set (0.00 sec)
```
