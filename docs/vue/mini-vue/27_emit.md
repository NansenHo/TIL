# `emit` 功能

## `emit` 如何使用

[官方文档](https://cn.vuejs.org/guide/components/events.html)

`$emit` 是一个**组件实例方法**，是用于**子组件向父组件传递信息**的标准方法。

**代码示例**：

```js
// Child.vue
<template>
  <button @click="sendToParent">Child Component</button>
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits(['update', 'completed']);

  function sendToParent() {
    const someDate = 'some date from Child';

    emit('update', someDate);
    emit('completed');
  }
</script>
```

```js
// Parent.vue
<template>
  <Child @update="handleUpdate" @completed="handleCompleted" />
</template>

<script setup>
  import Child from './Child.vue';

  function handleUpdate(dateFromChild){
    console.log('Date from Child: ', dateFromChild);
  }

  function handleCompleted() {
    console.log('Completed');
  }
</script>
```

`Child.vue` 组件传递了两个事件给父组件： `update` 和 `completed`。

`update` 事件携带了数据 `someData`，而 `completed` 事件则没有携带数据，仅仅是作为一个通知。

父组件 `Parent.vue` 通过 `@update` 和 `@completed` 监听这两个事件，并为它们定义了处理函数 `handleUpdate` 和 `handleCompleted`。

当子组件的按钮被点击时，它将触发 `sendToParent` 函数，从而发射这两个事件。

**使用场景**：

1. 表单组件：子组件是一个自定义表单输入组件，当用户输入时，它可以使用 emit 将新值发送回表单的父组件。

2. 列表选择：子组件代表一个列表项，当用户选择一个列表项时，子组件可以发射一个事件来告诉父组件哪个项被选中了。

3. 状态更新：子组件执行某项操作，比如发送一个 API 请求，然后通过事件发射结果，告知父组件操作成功或失败。

4. 导航组件：子组件是导航菜单的一部分，当用户点击导航项时，子组件可以发射一个事件来告知父组件需要显示哪个页面或组件。

**emit 模式的好处**：

这种模式使得组件间的通信保持了清晰和解耦。

因为子组件不需要知道父组件的内部实现细节，它只是发射事件，父组件负责决定如何处理这些事件。

## `emit` 的功能点

1. 传入 `setup` 的第二个参数是一个对象，这个对象里包含 `emit`。

2. 调用 `emit` 时，可以传入一个事件名和参数。

   1. 子组件可以传入参数，父组件可以接受参数

   2. 支持烤肉串命名方式 `add-foo`

3. 在 `props` 里去找这个事件名对应的事件函数，找到后调用这个函数。

### TPP 编程

[Transformation Priority Premise](https://en.wikipedia.org/wiki/Transformation_Priority_Premise).

简单来说就是先用写死的逻辑来将功能实现，之后再将其替换成通用的逻辑。

比如我们实现 `emit` 的过程中，先实现 `onAdd`，走通之后，再实现所有的 `onEvent`。
