# `require` keyword

If you omit `./` or `/` at the beginning, it will not look for a local file.

But it will always look for a global module named http.

```ts
const http = require("http");
```
