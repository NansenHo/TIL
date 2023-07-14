# 第一个 Java 程序

Java 规定，某个类定义的 `public static void main(String[] args)` 是 Java 程序的固定入口方法，因此，Java 程序总是从 main 方法开始执行。

```java
// `public` `class` 都是 Java 关键字，必须小写
// 类的名字大小写敏感，且一般首字母大写
// 文件名必须是 Main.java，而且文件名也要注意大小写，因为要和我们定义的类名 Main 完全保持一致
public class Main {
	// `public` `static` 都是修饰方法 main 的，表明其是一个公开的静态方法
	// `void` 是方法的返回类型
	// `(String[] arg)` 表明参数数据类型是 String[]，参数名是 arg
	public static void main(String[] args) {
		System.out.println("hello world");
	}
}
```

Java 源码只能定义一个 `public` 类型的 class，而且 class 名称必须要与文件名完全一致。

