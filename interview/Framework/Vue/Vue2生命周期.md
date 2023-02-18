# Vue 有哪些生命周期函数，分别有什么用

1. **beforeCreate** 和 **created**

   - beforeCreate：Vue 实例已经初始化了；只初始化一些事件；data 数据没有初始化，无法访问。

   - created：数据侦听、计算属性、方法、事件/侦听器的回调函数都已经可以访问了。data 数据已经初始化，可以访问，但此时的 dom 没有挂载，

     在这里一般进行「请求服务器数据」等操作。
<br/>

2. **beforeMount** 和 **mounted**

   - beforeMount：dom 挂载，但是 dom 中存在类似 的占位符，并没有替换。
   - mounted：此时组件渲染完毕，占位符也都被替换。
<br/>

3. **beforeUpdate** 和 **updated**

   - 组件触发更新时，会立刻先调用 beforeUpdate
   - 等到重新渲染完之后调用 updated 钩子
<br/>

4. **beforeDestroy** 和 **destroyed**

   组件在销毁前会调用 beforeDestroy 钩子，可以在这里进行一些定时器或者销毁操作。destroyed 钩子函数会在 Vue 实例销毁后调用。
<br/>

5. **activated** 和 **deactivated**

   如果组件被 keep-alive 包裹，第一次渲染会在 mounted 钩子后面调用 activated 钩子，离开的时候不会调用 beforeDestroy 和 destroyed 钩子，而是调用 deactivated 钩子，等到再切换回来的时候，activated 钩子会调用（不会再走 mounted 钩子）。
<br/>

6. **errorCaptured**

   用于捕获子组件中抛出的错误，注意只有 errorCaptured 返回 false 则可以阻止错误继续向上传播（本质上是说“这个错误已经被搞定了且应该被忽略”）。