# `UPDATE`

## `UPDATE` 语句的基本语法

```sql
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```

比方说，我们想更新 `students` 表 `id=1` 的记录的 `name` 和 `score` 这两个字段：

```sql
-- 更新 id=1 的记录
UPDATE students SET name='大牛', score=66 WHERE id=1;
-- 查询并观察结果:
SELECT * FROM students WHERE id=1;
```

```sql
-- 更新id=5,6,7的记录
UPDATE students SET name='小牛', score=77 WHERE id>=5 AND id<=7;
-- 查询并观察结果:
SELECT * FROM students;
```

### 使用表达式

在 `UPDATE` 语句中，更新字段时可以使用表达式。

比方说，我们想给所有成绩低于 80 分的同学，提高 10 分：

```sql
UPDATE students SET score=score+10 WHERE score<80;
-- 查询并观察结果:
SELECT * FROM students;
```

## 特别注意事项

如果 `WHERE` 条件没有匹配到任何记录，`UPDATE` 语句**不会报错**，也**不会有任何记录被更新**。

要特别小心：`UPDATE` 语句可以没有 `WHERE` 条件。

这时，整个表的所有记录都会被更新。

所以，**在执行 `UPDATE` 语句前，最好先用 `SELECT` 语句来测试 `WHERE` 条件是否筛选出了期望的记录集，然后再用 `UPDATE` 更新。**

## MySQL

在使用 MySQL 这类真正的关系数据库时，`UPDATE` 语句会返回

1. 更新的行数

2. `WHERE` 条件匹配的行数

例如，更新 `id=1` 的记录时：

```sql
mysql> UPDATE students SET name='大宝' WHERE id=1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

MySQL 会返回 `1`，可以从打印的结果 `Rows matched: 1 Changed: 1` 看到。
