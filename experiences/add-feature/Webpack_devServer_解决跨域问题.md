# Webpack devServer 解决浏览器跨域问题

[Webpack devServer 官方文档](https://webpack.docschina.org/configuration/dev-server/#root)

下面是一个实例：

```javascript
const path = require('path')
const PORT = 7070
const HOST = 'https://example.xx.nansen.com'
const srcPath = path.resolve(__dirname, './')
module.exports = {
  entry: {
    index: `${srcPath}/main.js`
  },
  mode: 'development',
  target: 'web',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: PORT,
    compress: true,
    open: `http://localhost:${PORT}/login/Login.html`,
    proxy: {
      '/service': {
        target: HOST,
        changeOrigin: true
      },
      '/login/ajaxJson/**.*jsp': {
        target: HOST,
        changeOrigin: true
      },
      '/login/**.*jsp': {
        target: HOST,
        changeOrigin: true
      },
    },
    static: {
      directory: path.join(__dirname, './'),
    }
  },
};
```