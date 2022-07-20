# Map

[Map MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Map 是什么

`Map` 对象保存**键值对**，并且能够记住**键的原始插入顺序**。

```javascript
let codeTable = new Map([['zh', '86'], ['zh-CN', '86'], ['ja', '81'], ['ja-JP', '81'], ['en-US', '1'],['en-GB', '44'], ['ko', '82'], ['ko-KR', '82']]);
```

任何值，无论是对象，还是基本类型，都可以作为 `Map` 的键/值。

## Map 和 Object 的区别与实战

|区别点 | Map | Object| 补充 |
| :---: | :--- | :--- | :--- |
| 意外的键 | Map 只包含我们插入的键。除此之外，一般情况下不会包含有其他键。 | Object 上有原型，原型链上的键名可能与你自己设置的有冲突。| ES5 开始也可以用 `Object.create(null)` 来创建一个无原型链的对象了，但这种用法比较少见。 |
| 键的类型 | 可以是**任意值**，包括对象、函数和基本类型。 | 必须是 **String / Symbol**。 | none |
| 键的顺序 | 在迭代的时候，会以插入的顺序来返回键值。 | Object 的键值并不总是有顺序的，最好不要依赖对象属性的顺序。 | none |
| 迭代 | Map 是可迭代的。 | Object 没有实现迭代协议，不能用 `for ... of` 表达式来直接迭代对象。 | `for ... in` 表达式允许你迭代一个 Object 的可枚举属性。 |
| 性能 | 在频繁增删键值对的情况下，表现更好。 | 在频繁增删键值对的情况下未做优化。 | none |
| Size/键值对的个数 | 通过 size 属性即可获得。 | 需要手动计算。 | none |
| 序列化和解析 | 没有元素的序列化和解析的支持。 | JavaScript 原生支持 | none |

## Map 的使用

### `Map.prototype.get(key)`

返回与 key 关联的值，若不存在关联的值，则返回 undefined。

### `Map.prototype.set(key, value)`

在 Map 对象中设置与指定的键 key 关联的值 value，并返回 Map 对象。

存储数据到 Map 中的方式是使用 `set(key, value)` 方法。
```javascript
let mapDemo = new Map();
// 存储数据到 Map 中：
mapDemo.set('zh', '86');
```
... ...

## Map 与数组的关系

使用常规的 Map 的构造函数可以将一个**二维键值对数组**转换成一个 Map 对象。

```javascript
let codeTable = new Map([['zh', '86'], ['zh-CN', '86'], ['ja', '81'], ['ja-JP', '81'], ['en-US', '1'],['en-GB', '44'], ['ko', '82'], ['ko-KR', '82']]);
```

使用 `... 展开运算符` / `Array.from()` 方法又可以将一个 Map 对象转换成一个**二维键值对数组**。

```javascript
let codeTable = new Map([['zh', '86'], ['zh-CN', '86'], ['ja', '81'], ['ja-JP', '81'], ['en-US', '1'],['en-GB', '44'], ['ko', '82'], ['ko-KR', '82']]);
console.log(codeTable);

// 展开运算符
console.log([...codeTable]);
// Array.from()
console.log(Array.from(codeTable));

// 在键的迭代器上，使用 Array.from() 得到了仅含有键的数组
console.log(Array.from(codeTable.keys()));
// 在值的迭代器上，使用 Array.from() 得到了仅含有值的数组
console.log(Array.from(codeTable.values()));
```

