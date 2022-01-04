# 

### 轮询

3 秒轮询一次

```javascript
// 轮询余额、代扣状态和代付状态
const seconds2 = 3;
let num = 0;
timer = setInterval(() => {
    if (num < seconds2) {
        num++;
    } else {
        num = 0;
        clearInterval(timer);
        this.queryBalance();
        console.log('刷新余额');
        this.getData();
        console.log('刷新列表');
    }
}, 1000);
// 我这里的 timer 因为要在 beforeDestroy 生命周期里 clearInterval(timer); 清除掉，所以是全局声明的。
```

