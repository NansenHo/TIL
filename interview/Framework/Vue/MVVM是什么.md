# MVVM 是什么

MVVM 即 **Model-View-ViewModel**。

- Model：数据模型，负责业务逻辑和数据封装；
- View：视图，负责界面的显示；
- ViewModel：监听模型数据和控制视图；

ViewModel 监听模型数据的改变和控制视图行为，处理用户交互，简单来说就是**通过双向数据绑定把 View 层和 Model 层连接起来**。

在 MVVM 架构下，View 和 Model 没有直接联系，而是**通过ViewModel 进行交互**，我们只关注业务逻辑，不需要手动操作 DOM ，不需要关注 View 和 Model 的同步工作。