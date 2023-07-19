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

`public` 是访问修饰符，不写 `public` 也可以编译，但这个类将无法从命令行执行。

> Java 规定，入口方法必须是静态方法，方法名必须为 `main`，括号内的参数必须是 `String[]`。

> Java 的每一行语句必须以 `;` 结尾。

使用 `System.out.println()` 可以向屏幕输出一些内容。

`println` 是 `print line` 的缩写，表示输出并换行。因此，如果输出后不想换行，可以用 `print()`。

```java
System.out.println("hello world");
System.out.print("hello ");
System.out.print("world");
```
