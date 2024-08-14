# Convert Number to Percentage

[toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

```js
const num = 0.9833;

num.toLocaleString("en", { style: "percent" }); // 98%
num.toLocaleString("en", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}); // 98.33%
```
