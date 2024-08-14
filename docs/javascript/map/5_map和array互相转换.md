# Map 和 Array 相互转换

使用常规的 Map 的构造函数可以将一个**二维键值对数组**转换成一个 Map 对象。

```javascript
let codeTable = new Map([
  ["zh", "86"],
  ["zh-CN", "86"],
  ["ja", "81"],
  ["ja-JP", "81"],
  ["en-US", "1"],
  ["en-GB", "44"],
  ["ko", "82"],
  ["ko-KR", "82"],
]);
```

使用 `... 展开运算符` / `Array.from()` 方法又可以将一个 Map 对象转换成一个**二维键值对数组**。

```javascript
let codeTable = new Map([
  ["zh", "86"],
  ["zh-CN", "86"],
  ["ja", "81"],
  ["ja-JP", "81"],
  ["en-US", "1"],
  ["en-GB", "44"],
  ["ko", "82"],
  ["ko-KR", "82"],
]);
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
