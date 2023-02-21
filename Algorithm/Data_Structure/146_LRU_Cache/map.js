let cache = new Map()
cache.set('a', 1)
cache.set('b', 2)
cache.set('c', 3)

console.log(cache.keys())
// 通过打印得知，cache.keys() 返回的是一个 Map Iterator（生成器）
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators

// 在生成器中，可以使用 .next() 获取 map 中的最早 set 进去的数据
// 在 map 中最新 set 进去的数据会被放在最后
console.log(cache.keys().next())
cache.set('d', 4)
console.log(cache.keys().next())
console.log(cache.keys())
// 这样就已经很像一个 LRU Cache 了，只不过是最近最常被使用的在最右边而已
// .next() 的用法也和链表很像

// 该算法虽然在数据结构上是基于链表来做的，
// 但在 JS 中可以用更高级的 Interator 生成器来实现。

// ----------------- 下面是答题 -----------------

var LRUCache = function(capacity) {
  this.cache = new Map()
  this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    let val = this.cache.get(key)
    // 如果再放进来一个已经存在的组件
    // 那需要将该组件放到最前面，表示最近最常被使用
    this.cache.delete(key)
    this.cache.set(key, val)
    return val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 如果 key 已存在，那就是需要更新 key 的 value 
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else if (this.cache.size === this.max) {
    // this.cache.keys().next().value 就是 least recently used key
    // map.keys()，即Interator 生成器类型的 LRU 在最左边
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
};