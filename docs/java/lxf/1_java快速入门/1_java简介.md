# Java 简介

## Java 身世

- Java 之父：[James Gosling](https://en.wikipedia.org/wiki/James_Gosling)
- Java 最早由 SUN 公司（现被 Oracle 收购）开发
- Java 于上世纪 90 年代初被开发，于 1995 年正式以 Java 的名称发布


## Java 语言特性

- Java 介于 **编译型语言** 和 **解释型语言** 之间。

> 编译型语言：将代码直接编译成**机器码**执行，但不同平台（X86，ARM等）CPU 的指令集不同，因此需要编译成对应的机器码。
> 代表语言有 C, C++。
> 
> 解释型语言：代码可以由解释器直接加载运行。

- Java 代码需要先被编译成一种“字节码”（类似于抽象的 CPU 指令），然后针对不同平台编写虚拟机，不同平台的虚拟机加载这些“字节码”并执行。

> SUN 公司制定了一系列虚拟机规范。
> 
> 从实践角度看，JVM 的兼容性很好，低版本的 Java 字节码完全可以正常在高版本的 JVM 上运行。

## 3 种 Java 版本

1. Java Enterprise Edition
2. Java Standard Edition
3. Java Micro Edition

```bash
┌───────────────────────────┐
│Java EE                    │
│    ┌────────────────────┐ │
│    │Java SE             │ │
│    │    ┌─────────────┐ │ │
│    │    │   Java ME   │ │ │
│    │    └─────────────┘ │ │
│    └────────────────────┘ │
└───────────────────────────┘
```

> - Java SE 就是标准版，包含标准的 JVM 和标准库。
> - Java EE 是企业版，它只是在 Java SE 的基础上加上了大量的 API 和库，以便方便开发 Web 应用、数据库、消息服务等。Java EE 的应用使用的虚拟机和 Java SE 完全相同。Spring 等框架都是 Java EE 开源生态系统的一部分。
> - Java ME 是一个针对嵌入式设备的“瘦身版”。Java SE 的标准库无法在 Java ME 上使用，Java ME 的虚拟机也是“瘦身版”。

## 名词解释

```bash
  ┌─    ┌──────────────────────────────────┐
  │     │     Compiler, debugger, etc.     │
  │     └──────────────────────────────────┘
 JDK ┌─ ┌──────────────────────────────────┐
  │  │  │                                  │
  │ JRE │   JVM + Runtime Library (APIs)   │
  │  │  │                                  │
  └─ └─ └──────────────────────────────────┘
        ┌───────┐┌───────┐┌───────┐┌───────┐
        │Windows││ Linux ││ macOS ││others │
        └───────┘└───────┘└───────┘└───────┘
```

| Word | Explain |
| :--- | :--- |
| Java Development Kit (JDK) | 将 Java 编译成 Java 字节码。<br/> JDK 不光包含 JRE，还提供了编译器，调试器等开发工具。 |
| Java Runtime Environment (JRE) | 运行 Java 字节码的虚拟机 |
| Java Virtual Machine (JVM) |  |
| Java Specification Request (JSR) | JSR 规范。凡是想给 Java 平台加一个功能，比如说访问数据库的功能，大家要先创建一个JSR规范，定义好接口，这样，各个数据库厂商都按照规范写出 Java 驱动程序，开发者就不用担心自己写的数据库代码在 MySQL 上能跑，却不能跑在 PostgreSQL 上。 |
| Java Community Process (JCP) | 负责审核 JSR 的组织就是 JCP。 |
| Reference Implementation (RI) | 一个新的 JSR 规范发布时，还需要有一个“参考实现”。就是贴出对应的真正能跑的代码，这就是 RI。 |
| Technology Compatibility Kit (TCK) | 一个新的 JSR 规范发布时，除了“参考实现”，还需要“兼容性测试套件”。如果有其他人也想开发这样一个消息服务器，如何保证这些消息服务器对开发者来说接口、功能都是相同的？所以还得提供TCK。 |

> 通常来说，RI 只是一个“能跑”的正确的代码，它不追求速度，所以，如果真正要选择一个 Java 的消息服务器，一般是没人用 RI 的，大家都会选择一个有竞争力的商用或开源产品。

## English Words

| English | Chinese |
| --- | --- |
| Standard Edition | 标准版本	|	
| Enterprise <br/> /ˈen.t̬ɚ.praɪz/ | 企业，公司，组织	|
| Enterprise Edition		
| specification <br/> /ˌspes.ə.fəˈkeɪ.ʃən/ | 规格，规范，标准	 |
| specification request |  |
		