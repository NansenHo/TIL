const num = 19144.88;

// 给金额数字添加分隔逗号，不保留小数
num.toLocaleString(); // 184,000

// 保留两位小数
num.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}); // '19,144.88'

num.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }); // '￥19,145'
num.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
  currencyDisplay: "code",
}); // 'JPY 19,145'
num.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
  currencyDisplay: "name",
}); // '19,145円'

num.toLocaleString("zh", { style: "currency", currency: "CNY" }); // '¥19,144.88'

num.toLocaleString("en-US", { style: "currency", currency: "USD" }); // '$19,144.88'
