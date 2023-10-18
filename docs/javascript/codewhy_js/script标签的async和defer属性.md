# script 标签中的 async 和 defer 属性

## 三种情况

### 无任何属性的 script 标签

浏览器解析HTML的时候，如果遇到一个没有任何属性的script标签，就会暂停解析，先发送网络请求获取改js脚本的代码内容，然后让js引擎执行该代码，当代码执行完毕后恢复解析。

如果获取js脚本的网络请求迟迟得不到响应，或者js脚本执行时间过长，都会导致白屏，用户看不到页面内容。

### `<script async>`

当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML。

但一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析。

async 是不可控的，因为 HTML 解析完的时间不确定。你如果在异步js脚本中获取某个DOM元素，有可能获取到也有可能获取不到。

如果存在多个 async 的时候，它们之间的执行顺序也不确定，完全依赖于网络传输结果，谁先到执行谁。

### `<script defer>`

完全不会阻碍HTML的解析，解析完成之后再按照顺序执行脚本。

当浏览器遇到带有 defer属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码。

如果存在多个 defer script 标签，浏览器（IE除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。

## 总结

| script 标签 | JS执行顺序 | 是否阻塞解析HTML |
| --- | --- | --- |
| `<script>` | 在 HTML 中的顺序 | 阻塞 |
| `<script async>` | 网络请求返回顺序 | 可能阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞 |

defer: 推迟。在完成或实现某事的过程中，由于出现超出控制能力之外的情况而推迟。

- [Script Tag - async & defer __ stackoverflow](https://stackoverflow.com/questions/10808109/script-tag-async-defer)
- [async-vs-defer-attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- [html & script 标签中 defer 和 async 的区别](https://zhuanlan.zhihu.com/p/598243249)
