# 认识文档数据库 MongoDB

## 什么是 MongoDB

一个以 JSON 为数据模型的 OLTP 文档数据库。

> MongoDB 重新定义了 OLTP（联机事务处理系统）数据库。

[OLAP 和 OLTP 之间有何区别？](https://aws.amazon.com/cn/compare/the-difference-between-olap-and-oltp/)

## 为什么叫文档数据库

文档来自于 JSON Document，而非是 PDF，Word 文档。

其实它更像一个 Object。

## 主要用途

作为应用数据库，可以用于处理海量数据和数据平台等。

应用场景类似于 Oracle 和 MySQL。

> 和传统关系型数据库最大区别：
>
> MongoDB 的模型是一个 JSON 模型，不要求先建模。
>
> 传统关系型数据库要先建模。

## 谁开发的 MongoDB

美国公司 MongoDB Inc，总部位与纽约。

### MongoDB 是免费的吗

MongoDB 有社区版和企业版。

社区版基于 SSPL（和 AGPL 基本类似的开源协议）。

企业版基于商业协议，需付费购买。

## 主要特点

1. 建模为可选

2. JSON 数据模型更适合开发者

3. 横向拓展可以支撑很大数据量和并发

## MongoDB 发展历史

| 版本 | 时间    | 更新特性                  |
| :--- | :------ | :------------------------ |
| 0.x  | 2008 年 | 成立                      |
| 1.x  | 2010 年 | 支持复制集和分片集        |
| 2.x  | 2012 年 | 更丰富的数据库功能        |
| 3.x  | 2014 年 | WiredTiger 和周边生态环境 |
| 4.x  | 2018 年 | 分布式事务支持            |

## MongoDB 和 RDBMS 的区别

<!-- prettier-ignore -->
| | MongoDB | RDBMS |
| :--- | :--- | :--- |
| 数据模型 | 文档模型 | 关系模型 |
| 数据库类型 | OLTP | OLTP |
| CRUD 操作 | MQL/SQL | SQL |
| 高可用 | 复制集 | 集群模式 |
| 横向拓展能力 | 通过原生分片完善支持 | 数据分区或者应用侵入式 |
| 索引支持 | B-树，全文索引，地理位置索引，多键（multikey），索引，TTL索引 | B-树 |
| 开发难度 | 容易 | 困难 |
| 数据容量 | 理论没有上限 | 千万，亿，几十亿 |
| 拓展方式 | 垂直拓展 + 水平/横向拓展 | 垂直拓展 |

> Mongo Query Language 是 MongoDB 中主流使用的语言。
