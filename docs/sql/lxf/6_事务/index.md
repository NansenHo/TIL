# 事务

## 什么是事务

在执行 SQL 语句的时候，某些业务要求，一系列操作必须全部执行，而不能仅执行一部分。

例如，一个转账操作：

```sql
-- 从 id=1 的账户给 id=2 的账户转账 100 元
-- 第一步：将 id=1 的 A 账户余额减去 100
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- 第二步：将 id=2 的 B 账户余额加上 100
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
```

这两条 SQL 语句必须全部执行，

或者，由于某些原因，如果第一条语句成功，第二条语句失败，就必须全部撤销。

这种把多条语句作为一个整体进行操作的功能，被称为**数据库事务**。

数据库事务可以确保该事务范围内的所有操作都可以全部成功或者全部失败。

如果事务失败，那么效果就和没有执行这些 SQL 一样，不会对数据库数据有任何改动。

## 数据库事务的特性

数据库事务具有 ACID 这 4 个特性：

1. A：Atomic，原子性

   将所有 SQL 作为原子工作单元执行，要么全部执行，要么全部不执行；

2. C：Consistent，一致性

   事务完成后，所有数据的状态都是一致的，即 A 账户只要减去了 100，B 账户则必定加上了 100；

3. I：Isolation，隔离性

   如果有多个事务并发执行，每个事务作出的修改必须与其他事务隔离；

4. D：Duration，持久性

   即事务完成后，对数据库数据的修改被持久化存储。

> 数据库事务具有 ACID 特性，用来保证多条 SQL 的全部执行。

## 隐式事务

对于单条 SQL 语句，数据库系统自动将其作为一个事务执行，这种事务被称为隐式事务。

## 显式事务

要手动把多条 SQL 语句作为一个事务执行，使用 `BEGIN` 开启一个事务，使用 `COMMIT` 提交一个事务，这种事务被称为显式事务。

例如，把上述的转账操作作为一个显式事务：

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

多条 SQL 语句要想作为一个事务执行，就必须使用显式事务。

`COMMIT` 是指提交事务，即试图把事务内的所有 SQL 所做的修改永久保存。

如果 `COMMIT` 语句执行失败了，整个事务也会失败。

有些时候，我们希望主动让事务失败。

这时，可以用 `ROLLBACK` 回滚事务，整个事务会失败：

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
ROLLBACK;
```

数据库事务是由数据库系统保证的，我们只需要根据业务逻辑使用它就可以。

## 隔离级别

对于两个并发执行的事务，如果涉及到操作同一条记录的时候，可能会发生问题。

因为并发操作会带来数据的**不一致性**，包括**脏读**、**不可重复读**、**幻读**等。

数据库系统提供了隔离级别来让我们有针对性地选择事务的隔离级别，避免数据不一致的问题。

SQL 标准定义了 4 种隔离级别，分别对应可能出现的数据不一致的情况：

<!-- prettier-ignore -->
| Isolation Level | 脏读（Dirty Read） | 不可重复读（Non Repeatable Read） | 幻读（Phantom Read）|
| :--- | :--- | :--- | :---|
| Read Uncommitted | Yes | Yes | Yes |
| Read Committed | - | Yes | Yes |
| Repeatable Read | - | - | Yes |
| Serializable | - | - | - |
