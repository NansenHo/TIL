### 计算属性

基本用法：

```javascript
<p> {{ c }} </p>

data(){
	return {
		a: 2,
		b: 3
	}
},
computed: {
	c: function(){
		return this.a * this.b
	}
}
```

以上代码注意点：

1. computed 里面不能使用箭头函数；
   因为箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 。
2. c 不需要在 data 中声明，computed 里直接声明，并且通过计算得到 c 的值；
3. c 可以直接像 data 里的数据一样在 template 和 script 里使用；
4. 计算属性的结果会被缓存，除非 a 和 b 这两个数据改变了，否则 c 不会重新计算，会直接用缓存的结果。

计算属性和方法分别的使用场景：

```
<p> {{ c() }} </p>

data(){
	return {
		a: 2,
		b: 3
	}
},
methods: {
	c: function(){
		return this.a * this.b
	}
}
```

用 methods 也能实现和 computed 一样的效果。不过 methods 不会对计算的结果做缓存，我们每次使用到 `c()` 都会重新执行函数；

但是做缓存也会有问题，比如以下代码：

```javascript
computed: {
	now: function(){
		return Date()
	}
}
```

`Date()` 不是响应式依赖，一旦 computed 缓存了当天的时间戳之后，计算属性将不再更新。这当然不是我们想要的。

所以，**性能消耗大的计算 **推荐使用计算属性；**没有缓存且不可避免要多次计算的数据** 推荐使用函数。

### 通过 `props` 向子组件传值

Prop 是你可以在组件上注册的一些自定义 attribute 。在子组件中，我们可以像使用 data 中的数据一样使用 props 传过来的 attribute 。

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。

如果是多个单词，注意这个 props 要用小写驼峰，而 attribute 则必须用 `-` 中划线写法来写。

```javascript
// 子组件 y-button.vue
props: ['iconPosition']

// 父组件
<y-button icon-position="left"><y-button>
```

props 还可以用对象的写法来写

```javascript
// 对象写法
props: { 
    icon: {},
    iconPosition: {
      // type: [Number, String] // type 也可以这样写，支持不止一种类型
      type: String,
      // 对象写法可以为 attribute 设置默认值
      default: 'left',
      // 还可以写一个检验器
      validator(value) {
        if (value !== 'left' && value !== 'right') {
          return false;
        } else {
          return true;
        }
    }
  }
  
// 数组写法
props: ['icon', 'iconPosition'] 
```



### 内置组件 `<slot>` ，通过插槽分发内容

### 父实例 `vm.$parent` 和 子实例 `vm.$children`

如果当前实例有父实例的话，表示父实例。子实例可以用 `this.$parent` 访问父实例。

父组件也可以用 `vm.$children.forEach((vm)=>{...})` 等方法访问子实例。



