# reactivity 的核心流程

reactivity 的基础功能：接受一个对象，把它转化成一个 proxy（代理对象）。之后通过 proxy 来访问之前对象上的值，从而与现在的进行对比。

