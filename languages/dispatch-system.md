## 派遣系统

### el-pagination 报错

```html
        <el-pagination
            v-show="data.length > 0"
            @size-change="handlePagesizeChange"
            @current-change="handleCurrentpageChange"
            :current-page="currentPage"
            :page-sizes="pagesizes"
            :page-size="pagesize"
            layout="total, sizes, prev, pages, next, jumper"
            style="margin-top: 20px"
            :total="data.length">
        </el-pagination>
```

以上代码会报下面的错：

```
[Vue warn]: Error in nextTick: "TypeError: Cannot read properties of undefined (reading 'key')"

TypeError: Cannot read properties of undefined (reading 'key')

```

问题出在 layout 的值里面有一个 `pages`，但 layout 的可选值只  `sizes, prev , pager, next, jumper, ->, total 和 slot` 。

### 全局路由守卫

[全局导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫)

```javascript
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({...})

router.beforeEach((to, from, next) => {
    console.log(to, "to", from, "from")
    // 如果我要前往的是 login 画面，那就直接让我去
	if (to.path === '/login') {
		next()
    // 如果我前往 login 之外的画面，并且没有 localStorage.token 那就让我去登录
	} else if (!localStorage.token) {
		next('/login')
    // 如果我前往 login 之外的画面，并且有 localStorage.token 那就让我去
	} else {
		next()
	}
})
```

