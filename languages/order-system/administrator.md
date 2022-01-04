### `handleTime()` 函数

将一个时间戳变成 `YYYY-MM-DD` 的形式。

```javascript
// time 必须是一个时间戳
// 必要时可以用 time = new Date(time) 转换一下
handleTime(time) {
    if (time) {
        time = new Date(time);
        let year = time.getFullYear().toString();
        let month = (time.getMonth() + 1).toString();
        let day = time.getDate().toString();
        let result = year + '-' + month + '-' + day;
        return result;
    }
},
```

