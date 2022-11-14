# Webpack devServer 解决浏览器跨域问题

> 只能应用于开发环境中。

下面是一个实例：

```javascript
const path = require('path')
const PORT = 7070
const HOST = 'https://example.xx.nansen.com'
const srcPath = path.resolve(__dirname, './')
module.exports = {
  devServer: {
    port: PORT,
    // 指定监听请求的端口号。
    compress: true,
    // 是否为每个静态文件启动 gzip 压缩 也可以使用命令。
    // compress 开启 gzip 怎么查看？去看响应头返回的 Content-Encoding: gzip
    // compress 为 true 后，是这样请求的：
    // 1. 请求头会有一个 Accept-encoding: gzip，发送到服务器，
    // 2. 服务器找到请求的资源，将其压缩后发送给浏览器，
    // 3. 浏览器的响应头会有一个 Content-Encoding: gzip，这标志该资源已经进行了 gzip 压缩，
    // 4. 浏览器对这个 zip 文件进行解压，前端拿到资源内容。
    // devServer 对于过小的文件，不会开启 gzip，即便 compress 为 true，
    // 可能是根据 gzip 压缩后的大小和文件本身的大小进行比较，如果压缩后反而更大就不做处理。
    open: `http://localhost:${PORT}/login/Login.html`,
    // 告诉 dev-server 在服务器已经启动后打开浏览器。设置其为 true 以打开你的默认浏览器。
    // 也可以给浏览器名称，如 open: 'google-chrome'。
    proxy: {
    // 代理。在有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时可以使用。
    // 这里路径对应的配置为多项，所以写成了对象，如果只有单项可以直接写成 '/service': 'http://localhost:3000'
      '/service': {
        target: HOST,
        changeOrigin: true,
        // 默认情况下，代理时会保留主机头的来源。
        // 将 changeOrigin 设置为 true 可以覆盖此行为。 
      },
      '/login/ajaxJson/**.*jsp': {
        target: HOST,
        changeOrigin: true,
      },
      '/login/**.*jsp': {
        target: HOST,
        changeOrigin: true,
      },
    },
    static: {
      directory: path.join(__dirname, './'),
      // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。
      // 将其设置为 false 可以禁用
    }
  },
};
```

### 参考文章

- [Webpack devServer 官方文档](https://webpack.docschina.org/configuration/dev-server/#root)
- [webpack-dev-server 使用详解](https://blog.csdn.net/qq_17175013/article/details/119213124)