# element 自定义主题

## 安装不上 element-theme 可能的原因

1. node-sass 的原因
2. node 版本原因（需要降级）

### node-sass 的原因

`npm uninstall node-sass` 

再

`npm i sass`

### node 降级

```
安装插件 n ，通过 n 模块来管理 node 版本。

npm install n -g


安装指定版本的 node
n v8.16.0

卸载指定版本的 node
n rm v8.16.0

```