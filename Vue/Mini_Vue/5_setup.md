# Setup mini Vue

基本的一个 typescript 和 单元测试 环境配置。

```shell
# 1. 初始化项目
yarn init -y

# 2. 规定目录结构（不是 monorepo）
# 直接按模块分目录就行
#                          +--- tests --- index.spec.ts
#        +---reactivity ---|
#        |                 +--- index.ts
# src ---|

# 3. 集成 TS
yarn add typescript --dev
npx tsc --init

# 4. 集成 Jest
# 先写一个 test 文件，
# 用来检验 Jest 环境是否已集成 ok。
# it("init", () => {
#   expect(true).toBe(true);
# });
yarn add jest @types/jest --dev

# 4.1. 在 tsconfig.json 做以下配置
# "types": ["jest"]

# 4.2 package.json 里配置 scripts
# "scripts": {
#   "test": "jest" 
# }
# 这样我们就可以使用 yarn test 运行 jest 命令

# 4.3 在测试文件中使用 ES Module
# Jest 的运行环境是 NodeJS
# 在 NodeJS 里，默认模块规范是 CommonJS，不是 ES Module
# 需要用 Babel 来转换一下
# https://jestjs.io/docs/getting-started#using-babel
yarn add --dev babel-jest @babel/core @babel/preset-env
# 添加一个 balel.config.js 配置文件并写入：
# module.exports = {
#   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
# };

# 4.4 还要让 babel 支持 typescript
# https://jestjs.io/docs/getting-started#using-typescript
yarn add --dev @babel/preset-typescript
# 在 babel.config.js 里添加以下配置：
# module.exports = {
#   presets: [
#     ['@babel/preset-env', {targets: {node: 'current'}}],
#     '@babel/preset-typescript',
#   ],
# };
```