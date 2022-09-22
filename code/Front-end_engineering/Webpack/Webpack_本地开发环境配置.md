# Webpack 本地环境开发配置


1. onError: 对请求状态码进行处理。

    ```js
    function onError(err, req, res, target) {
        res.writeHead(500, {
            'Content-Type': 'text/plain',
        });
        res.end('Something went wrong. And we are reporting a custom error message.');
    }
    ```

2. onProxyRes: 对代理接口的 response 处理，这里常用来获取 cookie、重定向等。

    ```js
    function onProxyRes(proxyRes, req, res) {
        proxyRes.headers['x-added'] = 'foobar'; // 添加一个header
        delete proxyRes.headers['x-removed']; // 删除一个header
    }
    ```

    ```js
    // 重定向
    onProxyRes: function (proxyRes) {
        let location = proxyRes.headers['location']
        // 在本地开发环境，退出登录会跳转到测试环境登录页，很不方便，需要重定向到本地开发环境登录页
        let local_login = 'http://localhost:9000/login/Login.html?from=http%3A%2F%2Flocalhost%3A9000%2F%23%2F',
            logout = 'https://login.xxx.com/logout/';
        if (location && location.split('?')[0] === logout) {
            proxyRes.headers['location'] = local_login
        }
    },
    ```

3. onProxyReq：对代理接口 request 处理，执行在请求前，常用来设置 cookie、header 等操作。

    ```js
    function onProxyReq(proxyReq, req, res) {
        // add custom header to request
        proxyReq.setHeader('x-added', 'foobar');
        // or log the req
    }
    ```

- [Webpack devServer 配置](https://juejin.cn/post/7010571347705200671)
- [Webpack proxy bypass 用法](https://juejin.cn/post/6850418120436383758)
