# The difference between TypeScript and JavaScript {ignore=true}

[toc]

## Two Type Systems

类型系统，根据**类型检查的时机**，分为两类：

1. 动态类型
2. 静态类型

动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。

## Differences

1. JS 存在**隱式類型轉換**；
2. 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改；
3. TS 支持 ES 新特性和 ES 之外的新類型和新特性；
4. TS 有更好的代碼提示；
5. TS 有豐富的配置選項；
   - 如果需要兼容 IE，可以轉譯成 ES3；