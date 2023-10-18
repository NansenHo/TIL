# 浏览器引擎和 JS 引擎的关系

以 WebKit 为例

```
      WebKit
      +------------------------------------------+
      |                                          |
      |    +---------+    +-----------------+    |
      |    | WebCore |    | JavaScript Core |    |
      |    +---------+    +-----------------+    |
      |                                          |
      |    +------+       +------+               |  
      |    | else |       | else |               |
      |    +------+       +------+               |       
      |                                          |
      +------------------------------------------+
```

WebCore 负责 HTML 解析、布局、渲染等相关工作。

JavaScriptCore 负责解析和执行 JavaScript 代码。

和 WebKit 一样，V8 引擎也是内置在 Blink 引擎内的。

[Chrome浏览器引擎 Blink & V8
](https://cloud.tencent.com/developer/news/721616)