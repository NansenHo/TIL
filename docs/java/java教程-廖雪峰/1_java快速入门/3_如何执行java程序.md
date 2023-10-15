# 如何执行 Java 程序

## 执行 Java 程序的流程图

```bash
┌──────────────────┐
│    Hello.java    │◀── source code
└──────────────────┘
          │ compile by Javac
          ▼
┌──────────────────┐
│   Hello.class    │◀── byte code (Java)
└──────────────────┘
          │ execute
          ▼
┌──────────────────┐
│    Run on JVM    │
└──────────────────┘
```

- Java 本质上是一个文本文件
- 用 javac 将 Main.java 编译成 Java 字节码文件 Main.class
- 再用 Java 命令执行这个字节码文件

> Javac 是编译器
>
> 执行 Java 字节码文件的是虚拟机

## 命令行运行 Main.java

```bash
javac src/Main.java
ls src
cd src
# java className
# 因为是 className 所以后面不用 .class
java Main
```

或者直接

```bash
java src/Main.java
```
