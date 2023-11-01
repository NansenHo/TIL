# `DELETE`

## `DELETE` 语句的基本语法

```sql
DELETE FROM <表名> WHERE ...;
```

例如，我们想删除 `students` 表中 `id=1` 的记录，就需要这么写：

```sql
DELETE FROM students WHERE id=1;
-- 查询并观察结果:
SELECT * FROM students;
```

```sql
-- 删除多行
DELETE FROM students WHERE id>=5 AND id<=7;
-- 查询并观察结果:
SELECT * FROM students;
```

### 特别注意事项

如果 `WHERE` 条件没有匹配到任何记录，`DELETE` 语句不会报错，也不会有任何记录被删除。

最后，要特别小心的是，和 `UPDATE` 类似，不带 `WHERE` 条件的 `DELETE` 语句会删除整个表的数据。

在执行 `DELETE` 语句时也要非常小心，最好先用 `SELECT` 语句来测试 `WHERE` 条件是否筛选出了期望的记录集，然后再用 `DELETE` 删除。

## MySQL

在使用 MySQL 这类真正的关系数据库时，`DELETE` 语句也会返回

1. 删除的行数

2. `WHERE` 条件匹配的行数

例如，分别执行删除 `id=1` 和 `id=999` 的记录：

```sql
mysql> DELETE FROM students WHERE id=1;
Query OK, 1 row affected (0.01 sec)

mysql> DELETE FROM students WHERE id=999;
Query OK, 0 rows affected (0.01 sec)
```

## 删除主表数据，与其关联的从表也会被删除吗？

1. 无外键：相当于没有任何关联数据

2. 有外键：

   - 创建外键时定义了 `ONDELETECASCADE`：关联数据被自动删除

   - 没有定义 `ONDELETECASCADE`：有关联数据时报错
