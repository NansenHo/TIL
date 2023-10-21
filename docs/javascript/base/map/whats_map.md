# What's Map

`Map` 对象保存**键值对**，并且能够记住**键的原始插入顺序**。

```javascript
const arr = [
  ["zh", "86"],
  ["zh-CN", "86"],
  ["ja", "81"],
  ["ja-JP", "81"],
  ["en-US", "1"],
  ["en-GB", "44"],
  ["ko", "82"],
  ["ko-KR", "82"],
];
const _Map = new Map(arr);
console.log(arr, _Map);
```

任何值，无论是对象，还是基本类型，都可以作为 `Map` 的键/值。
