# 报错解决 - 找不到模块

`.gitlab-ci.yaml` 里面是使用 `npm ci` 来进行依赖安装。

安装之后，在运行 `npm run test-ut` 和 `npm run test-ct` 等命令时，会报下面的错：

```bash
$ npm run test-ut
> dragonfly_frontend@1.0.5 test-ut
> vitest
/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js:87
		throw new Error(
		      ^
Error: Cannot find module @rollup/rollup-linux-arm64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at requireWithFriendlyError (/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js:87:9)
    at Object.<anonymous> (/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js:96:76)
    ... 3 lines matching cause stack trace ...
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at cjsLoader (node:internal/modules/esm/translators:356:17)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:305:7)
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24) {
  [cause]: Error: Cannot find module '@rollup/rollup-linux-arm64-gnu'
  Require stack:
  - /builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js
      at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
      at Module._load (node:internal/modules/cjs/loader:985:27)
      at Module.require (node:internal/modules/cjs/loader:1235:19)
      at require (node:internal/modules/helpers:176:18)
      at requireWithFriendlyError (/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js:69:10)
      at Object.<anonymous> (/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js:96:76)
      at Module._compile (node:internal/modules/cjs/loader:1376:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
      at Module.load (node:internal/modules/cjs/loader:1207:32)
      at Module._load (node:internal/modules/cjs/loader:1023:12) {
    code: 'MODULE_NOT_FOUND',
    requireStack: [
      '/builds/flt/dragonfly_frontend/node_modules/rollup/dist/native.js'
    ]
  }
}
Node.js v20.11.0
```

我尝试了重新生成 `package-lock.json` 再将代码推送云端，但仍然报上面的错误。

最后我在 `.gitlab-ci.yaml` 文件里，将 `npm ci` 改成了

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

之后，不再报上面的错误了。

这之后，我再将 `.gitlab-ci.yaml` 的安装依赖命令改回 `npm ci` 也不会再报上面的错误了。

简单地来说，就是 `package-lock.json` 不对，所以 `npm ci` 安装不好。
