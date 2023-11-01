# `INSERT`

当我们需要向数据库表中插入一条新记录时，就必须使用 `INSERT` 语句。

## `INSERT` 的基本语法

```sql
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
```

例如，我们向 `students` 表插入一条新记录，先列举出需要插入的字段名称，然后在 `VALUES` 子句中依次写出对应字段的值：

```sql
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
-- 查询并观察结果:
SELECT * FROM students;
```

我们并没有列出 `id` 字段，也没有列出 `id` 字段对应的值。

这是因为 `id` 字段是一个自增主键，它的值可以由数据库自己推算出来。

此外，如果一个字段有默认值，那么在 `INSERT` 语句中也可以不出现。

字段顺序不必和数据库表的字段顺序一致，但值的顺序必须和字段顺序一致。

## 一次性添加多条记录

```sql
INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81);

SELECT * FROM students;
```
