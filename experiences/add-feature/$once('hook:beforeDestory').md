# 用 this.$once('hook:beforeDestory') 来清除定时器等/解绑事件

如果一个需求是不得不要手动添加一些东西，比如定时器，然后在离开页面时要取消/删除。

通常我们的做法是，分别在 `beforeMount` 和 `beforeDestroy` 生命周期中操作

```javascript
beforeMount () {
   document.querySelector('body').style.minWidth = '1280px';
},
beforeDestroy () {
   document.querySelector('body').style.removeProperty('min-width');
},
```

但是这样代码可读性低，明明相关联的代码却分别写在两处，不易维护。

我们可以用 

```javascript
this.$once(‘hook:beforeDestroy’, ()=>{}); 
```

来取代之前的做法。

```javascript
beforeDestroy () {
  this.udcTimer && clearInterval(this.udcTimer);
}
methods: {
  setMinWidth () {
    /* 从流程页切换回首页时，有一个 v-show 隐藏 form 元素的逻辑，
    ** 这导致返回首页后，form 元素及其里面的 style 元素仍会存在，从而影响到首页的样式。
    ** 这里给了一个优先级更高的 min-width，并在离开页面时做了删除。*/
    document.querySelector('body').style.minWidth = '1280px';
    this.$once('hook:beforeDestroy', () => {
      document.querySelector('body').style.removeProperty('min-width');
    })
  },
}
```

但这是在 Vue2 中的写法，Vue3 中貌似不可以这样写了，要换其他实现方式了。

**相关链接**

- [Vue项目中使用$.once(‘hook:beforeDestory‘,() =＞ {})清理定时器问题](https://blog.csdn.net/qq_37600506/article/details/105208307)
- [Vue里的神秘钩子](https://juejin.cn/post/7006616545119961101)
