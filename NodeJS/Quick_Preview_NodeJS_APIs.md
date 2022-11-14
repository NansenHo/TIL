# Quick PreView NodeJS APIs

> **速查文档**
> - [DevDocs - 非常好用的开发者文档库 ](https://devdocs.io/)
> - [API 文档 - Node.js 中文网](http://api.nodejs.cn/) - 当字典一样用

1. Assertion : 断言。用来测试代码的很好用的工具
2. Testing : 测试。
3. Async Hooks : 异步钩子。
4. [Buffer](https://www.jianshu.com/p/4f5f9a3196ca) : 一小段缓存。
5. Child Processes : 子进程。
6. Cluster : 集群。
7. Console : 控制台
8. Crypto : 加密相关。
9. Debugger : 做调试。
10. DNS : Domain Name System 域名系统。
    
    我们可以用 node.js 访问 DNS 。
    
    什么操作系统都可以在终端里用 `nslookup 网址` 命令行查询域名对应的 ip 地址或 ip 地址对应的域名。在 node.js 里要用 `dns.lookup(hostname[, options], callback)` 。
    
    ```jsx
    const dns = require('dns'); // 引用 node.js 的 dns 模块
    const options = {
      family: 6,
      hints: dns.ADDRCONFIG | dns.V4MAPPED,
    };
    dns.lookup('example.com', options, (err, address, family) =>
      console.log('address: %j family: IPv%s', address, family));
    // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
    
    // When options.all is true, the result will be an Array.
    options.all = true;
    dns.lookup('example.com', options, (err, addresses) =>
      console.log('addresses: %j', addresses));
    // addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
    ```
    
11. Errors : node.js 里面所有的错误，里面内容非常多。用到了再看即可。
12. Events : 发布订阅模式（node.js 自带）。
13. File System : 文件系统。对文件/文件目录的增删改查。
    
    fs 的操作往往是一对一对的，同步&异步各一个。比如 `fs.writeFile(file, data[, options], callback)` 和 `fs.writeFileSync(file, data[, options])` 。一般，异步相比同步，更加常用。
    
14. Globals : node.js 里的所有全局变量。
15. HTTP : 有 `http.get(url[, options][, callback])` 和 `http.request(url[, options][, callback])` 两个重要的方法。
16. HTTP/2 : 
17. HTTPS : 
18. Inspector : 
19. i18n : 
20. Net : 
21. OS : 
22. Path : 路径。
23. Performance Hooks : 
24. Process : 当前进程的相关信息。
25. Query Strings : 查询字符串。提供用于解析和格式化 URL 查询字符串的实用工具。
26. Readline : 
27. REPL : 
28. Report : 
29. Stream : 流格式的数据处理。
30. String Decoder : 
31. Timers : `setTimeout()` 和 `setImmediate()` 。
32. TLS/SSL : 
33. Trace Events : 
34. TTY : 
35. UDP/Datagram : 
36. URL : 
37. Utilities : 
38. V8 : 
39. VM : 
40. Worker Threads* : 
41. Zlib :