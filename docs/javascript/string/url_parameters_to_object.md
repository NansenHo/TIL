# URL Parameters to Object

```js
function parseURLParameters(url) {
  const urlParameters = {};

  const [, parameters] = url.split("?");
  parameters.split("&").forEach((p) => {
    const [key, value] = p.split("=");
    urlParameters[key] = decodeURIComponent(value);
  });

  return urlParameters;
}

const url =
  "https://wx.mail.qq.com/home/index?sid=%E6%9C%89%E8%B6%A3%E7%9A%84%E5%B0%8F%E7%8E%A9%E6%84%8F";
console.log(parseURLParameters(url)); // { sid: '有趣的小玩意' }
```
