# HTTPS 模块

我们在浏览器中打开下面的页面，会发现控制台里报错了。

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>browser-safe-sandbox</title>
</head>
<body>
<div>browser-safe-sandbox</div>
<script>
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'https://juejin.cn/post/6844903805419536398', false)
    xhr.send()
</script>
</body>
</html>
```

从源 `'http://localhost:8080'` 访问 `XMLHttpRequest at 'https://juejin.cn/post/6844903805419536398'` 已被 `CORS` 策略阻止。

而我们如果在 Node 环境中就可以轻松拿到想要的内容。

```jsx
const https = require('https')

https.get('https://juejin.cn/post/6844903805419536398', (response) => {
    // console.log(response);
    let string = ''
    response.on('data', (chunk) => {
        string += chunk
    })
    response.on('end', () => {
        console.log(string)
		// 会把整个网页的代码都爬下来
		// 我们对内容进行一定筛选即可使用了
    })
})
```