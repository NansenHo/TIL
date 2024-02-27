# DynamoDB

## 简介

DynamoDB 是 **AWS** 旗下的一款 **NoSQL** 数据库。

> 和众多 AWS 服务一样，它可以**根据负载弹性伸缩**。

和传统关系型数据库相比较，由于其是**基于键值对**进行存储的，因此 DynamoDB 的**访问速度非常快**。

但需要注意的是，它只适用于仅**通过固定模式访问数据**的应用场景，而不适合具备复杂关系的数据集合。

DynamoDB 强在稳定的高性能，但弱在灵活的访问方式。

DynamoDB 的优势在于，**无论数据量增长的有多快，其性能会一直非常稳定**。

对于 DynamoDB 来说，首先需要考虑访问数据的方式，才能确定 PK 和 SK。

## 使用时的注意点

1. PK / SK / GSI 的组合

   在涉及到**一对多**的关系时，可以通过 PK/SK 的组合来实现这个关系。

   如果需要**满足不同类型的查询**时，可以考虑创建 GSI。

2. 关于每条 Item 的大小及其对查询结果的影响

   在 DynamoDB 中，无论如何分页，都要考虑到一个硬性限制：

   **返回的数据大小不能超过 1MB**。

   这在有些时候会造成一些误解：问什么我的每页记录数为 50，但只返回了 30？

   **一旦返回数据量超过了 1MB，则不论如何分页，都不再继续返回数据**。

3. 关于 Streams

   这个功能非常强大，可以监测到每条记录的修改，进而触发相应的 Lambda，实现业务逻辑。

   比如，实现 DynamoDB 到 Opensearch 的数据同步，自动记录所有 DynamoDB 的操作到日志中。

4. 关于 scan

   这个功能比较鸡肋，被设计出来了，但似乎又没太大用处。

   当数据量较大的时候，任何应用都无法忍受其效率的。

## 核心概念

1. Table

   DynamoDB 中的表和传统关系型数据库中的表类似，也是一个数据的集合。

2. Item

   Item 就像关系型数据库中的记录，也就是一条记录。

3. Attribute

   Attribute 就等同于关系型数据库中的字段，也就是列。

4. Global Table

   Global table 其实就是一个 Replica tables 的集合。

   DynamoDB 通过 Streams 保证各个表之间的数据同步。

   用户会和距离最近的表交互。

   Global table 的潜在问题：

   - 如果某个区域的 DynamoDB 出现故障，在应用层需要考虑在不同区域间切换的问题。
   - 在同步时可能发生写入的竞争关系
   - 在跨越 region 时的数据一致性不能完全保证。

   在使用 Global table 的时候需要完成以下几个步骤：

   - 激活 Stream
   - Add region
   - 确定选择 On Demand 或者 Autoscaling

5. Primary Key，Partition Key 和 Sort Key

   顾名思义，Primary Key 是主键，**不能重复**。

   它由 Partition Key 和 Sort Key 两个部分组成。

   而这两个部分可以重复，只要**其组合不重复**就可以了。

   在设计 DynamoDB 表结构的时候，如果 Partition Key 本身就不重复，那么可以单独使用 Partition Key 作为 Primary Key，而无需使用 Sort Key。

   ```csv
   Student ID, Subject, Score, details
   9901, Math, 90, JSON
   9901, English, 90, JSON
   9902, English, 80, JSON
   9902, Physics, 88, JSON
   ```

   同时，上面例子中的 details 字段是一个 JSON，其大小不应该超过 400KB。

   可以针对 Sort Key 进行各种查询：==, <, >, >=, <=, begins with, between, contains, in 等。

6. Global Secondary Index (GSI)

   在 DynamoDB 的设计理念中，**只能针对事先设定好的键**进行快速查询。

   但如果需要根据别的字段进行查询，则可以通过 GSI 来实现。

   比如在前面的例子中，可以针对 Score 来建立一个 GSI，这样就能满足类似如下的查询需求了：

   找到所有分数大于 90 分的所有学生及科目信息。

   当然，创建 GSI 的话就涉及到额外的费用。

## 创建自己的 DynamoDB 表时的注意事项

1. DynamoDB 不会在不同区域间同步。

   因此在一个 Region 中创建的 Table，在另一个 Region 中是不可见的。

   除非创建 Global Table，会自动在不同 region 之间同步。

2. **一旦选择了 Partition Key，就不可以更改**，因此在创建之前要慎重考虑。

3. 在选择 Partition Key 和 Sort Key 的时候，需要根据需求灵活设定。

   可能需要两者的组合，也可能只需要 Partition Key 来作为 Primary Key。

4. 强烈推荐**添加 tags**。

   这样在看账单的时候，就更加清晰了。

   其实在使用 AWS 时，不仅仅是 DynamoDB，而是所有的 AWS 资源都应添加 tags。

在 DynamoDB 的表设计中，您的倾向是合理的。选择最重要且数据多样的字段作为分区键是一个好的实践，因为分区键的主要作用是确保数据的均匀分布。这有助于优化查询效率和避免热点问题。将相对次要的字段作为排序键也是合理的，因为排序键可以为同一分区键下的项目提供更细粒度的查询和排序能力。总的来说，这种设计能够有效地利用 DynamoDB 的分区和排序机制，提高数据访问的效率和灵活性。

这个命令 pip install -r requirements.txt -t .venv/lib/python3.11.5/site-packages/ 在 Python 中的含义是：

pip install: 这是使用 pip 安装 Python 包的标准命令，pip 是 Python 的包安装工具。

-r requirements.txt: 这个选项指示 pip 从 requirements.txt 文件中安装包。这个文件通常列出了项目所需的所有依赖项。

-t .venv/lib/python3.11.5/site-packages/: -t 标志指定了包安装的目标目录。在此命令中，包被安装到特定目录，即 Python 虚拟环境（.venv）中的 site-packages 目录。这是 Python 存储第三方包的地方。

所以，这个命令会将 requirements.txt 中列出的所有依赖项安装到指定的 Python 虚拟环境的 site-packages 文件夹中，而不是全局 Python 环境中。这对于管理特定项目的依赖项非常有用。

