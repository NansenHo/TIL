# 146. LRU Cache | Medium

## Keep-alive 组件中的 LRU Cache 缓存机制

试想在 keep-alive 里包裹成百上千个组件，那它会将其所有的状态都保存吗？
肯定是不可以的，浏览器也是有内存限制的。
所以就需要有一个**淘汰机制**防止内存被挤爆。

### 三种淘汰机制

缓存模块里，都需要一个合适的淘汰机制：

1. **LRU Cache**
   LRU 缓存，全称 **Least Recently Used**，即**最近最少使用**
   选择最近最久未使用的项目予以淘汰。
   在**组件里**，适合使用 LRU Cache。

2. **队列**
   **队列（First-in, First-out. FIFO）**
   在**任务里**，适合使用队列。

3. **LF-Cache**
   **淘汰掉出现次数最少的一项**。
   这种方式**需要做数据统计，耗费计算量和内存**。

### LRU Cache 举例

```js
// 比如有一段内存里面最多存4个组件，如下
1, 2, 3, 4;

// 如果现在再塞进来一个 2
// 那会认为 2 被重用到了
// 所以 2 调整顺序到第一位
2, 1, 3, 4;

// 如果在再进来一个 5
// 那会淘汰掉最近最少使用的那一个组件
// 然后将 5 调整到顺序第一位
5, 2, 1, 3;

// 如果内存没有被塞满
// 这时进来一个新的
// 那就会直接被添加到顺序第一位
1, 2, 3;
// 添加一位 4 后变成如下
4, 1, 2, 3;
```

因为 LRU Cache 需要频繁做插入删除操作，所以适合用链表去实现。

> 在 Vue 源码中，
>
> - compiler-sfc 解析单文件组件时所用到的缓存就是 lru-cache 库。
> - keep-alive 里的缓存也是用的 LRU 缓存机制。
>   但并没有使用 lru-cache 库，而是 Vue 团队自己实现的。
>
> 之所以 keep-alive 所在的 runtime 模块要自己实现 LRU Cache，应该是有一些定制化的需求，以及性能要求。
>
> 具体可以看 Vue 源码，代码路径：packages/runtime-core/src/components/KeepAlive.ts。
> Vue 是用 Map 来实现的 LRU-Cache。

### Map 实现 LRU 算法的关键逻辑

[Iterator - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

```js
let cache = new Map();
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);

console.log(cache.keys()); // 返回 Map Iterator
```

在生成器中，可以使用 `.next()` 获取 `map` 中的最早被 `set` 进去的数据，

在 `map` 中最后被 `set` 进去的数据会被放在最后。

```js
console.log(cache.keys().next());
cache.set("d", 4);
console.log(cache.keys().next());
console.log(cache.keys());
```

这样就已经很像一个 LRU Cache 了，只不过是最近最常被使用的在最右边而已。

> `.next()` 的用法也和链表很像。

该算法虽然在数据结构上是基于链表来做的，但在 JS 中可以用更高级的 Interator 生成器来实现。

## 题解

```js
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.max = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let val = this.cache.get(key);
    // 如果再放进来一个已经存在的组件
    // 那需要将该组件放到最前面，表示最近最常被使用
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果 key 已存在，那就是需要更新 key 的 value
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size === this.max) {
    // this.cache.keys().next().value 就是 least recently used key
    // map.keys()，即Interator 生成器类型的 LRU 在最左边
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};
```
