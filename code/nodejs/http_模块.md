# http 模块

用 http 模块实现一个 server

```jsx
const http = require('http')

http.createServer((request, response) => {
    // request response 这两个参数的位置不能调换
    const url = request.url
    // 要从前端拿数据，要用 request 对象
    response.write(url)
    response.end()
}).listen(8090, 'localhost', ()=>{
    console.log('localhost:8090');
})
```

