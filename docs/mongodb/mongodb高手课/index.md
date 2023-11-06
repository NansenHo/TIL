# MongoDB 综述

## MongoDB 是排名前五的数据库

[数据库排名网站](https://db-engines.com/en/)

MongoDB 是排名前五的数据库里唯一的 NoSQL 数据库。

## MongoDB 相比传统关系型数据库的优势

1. 开发效率的显著提升

   MongoDB 直接使用 JSON 数据结构，大幅简化了数据库模式设计 [ORM (Object Relational Mapping)](https://zh.wikipedia.org/wiki/对象关系映射) 层编码层的工作。

   - 对于开发程序员，MongoDB 可以让其花更少静力在数据库上，更多专注于业务开发。
   - 对于 [DBA (Database Administrator)](https://en.wikipedia.org/wiki/DBA)，MongoDB 可以解决系统高可用，高性能，以及横向拓展的痛点。
   - 对于架构师和产品经理，灵活的 MongoDB 可以快速响应业务需求变化。

2. 卓越的横向扩展能力

## MongoDB 学习难点

1. 学习资料较少

   MongoDB 是基于 JSON 数据模型，鼓励使用更多的文档嵌套方式，来减少多表关联的设计，从而达到易用，高性能的目的。

   但这种反范式的文档模型设计，目前并没有完整的理论支持，导致学习时没有太好的书籍和材料可供参考。

2. MongoDB 依赖于 JSON 和 JavaScript 语法，对运维和 DBA 需要额外学习。

3. MongoDB 通过分片来进行横向拓展，分片的设计和调优相对比较复杂。

   主要是要考虑 MongoDB 本身的技术实现，以及数据均衡带来的性能影响。
