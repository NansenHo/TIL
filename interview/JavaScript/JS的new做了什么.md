# JS 的 `new` 做了什么

1. 自动创建临时对象（空对象）
2. 绑定原型（自动把空对象的原型，关联为 Xxx 的 prototype，将原型地址指定为 Xxx.prototype）
3. 执行构造 constructor 函数（会把空对象作为 this 关键字运行构造函数）
4. 返回临时对象（自动 return this）

[JS 的 new 做了什么——方应杭](https://zhuanlan.zhihu.com/p/23987456)