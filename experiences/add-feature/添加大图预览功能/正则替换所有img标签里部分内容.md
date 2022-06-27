# 正则替换 img 元素里部分内容

我接受了一段字符串，我需要将其渲染成 HTML 放进画面里。

然后现在有一个需求，我需要对里面所有宽度大于 880px 的图片 url 后增加参数 `?xxx=880&yyy=0` ，宽度小于 880px 的不管。

```javascript
let data = `<p><strong><span style=\"color: var(--n100);\"><span style=\"font-size: 24px;\">OAモバイル版のダウンロード方法</span></span></strong></p><hr style=\"\"><p>&nbsp;</p><p><span style=\"color: var(--n70);\"><span style=\"font-size: 14px;\">１、直接下のQRコードをスキャンしてダウンロード</span></span></p><p><img align=\"left\" width=\"363\" height=\"539\" src=\"https://oacms.fp.ps.netease.com/file/62904490040ae89117a636f9XkiaLD5P04\" title=\"\" alt=\"\" style=\"clear: both;\" data-id=\"900ebdd0-b0f0-4d4a-b09b-fde631224157\"></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style=\"color: var(--n70);\"><span style=\"font-size: 14px;\">２、直接Webログイン画面右側のQRコードをスキャンして、自動的にモバイル設備でインストールすることができます</span></span></p><p><img align=\"center\" width=\"1919\" height=\"815\" src=\"https://oacms.fp.ps.netease.com/file/629045101d344948798018d9oVq4KLFJ04\" title=\"\" alt=\"\" style=\"clear: both;display: block; margin-left: auto; margin-right: auto;\" data-id=\"c429fbc5-f2fa-4c17-8fe7-03d40524d442\"></p>`;

function smallImg (data) {
  let reg = /<img(.*?)width="(.*?)"(.*?)src="(.*?)"(.*?)\/?>/gi;
  let finalData = data.replace(reg, function(match, p1, p2, p3, p4, p5) {
    // p1 ~ p5 分别对应正则里面第 n 个括号匹配的字符串
    if (parseInt(p2) > 880) {
      let smallImgUrl = `<img width="${p2}" ${p3} src="${p4}?fop=imageView/2/w/880" ${p5} />`;
      return smallImgUrl;
    }
    return match;
  })
  return finalData;
}

smallImg(data);
```

## 参考链接

- [String.prototype.replace() MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)