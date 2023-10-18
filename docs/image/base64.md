# Base64

## What’s Base64

Base64 is a group of similar **binary-to-text encoding**(A binary-to-text encoding is encoding of data in plain text.) schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.

Base64（基底64）是一种基于64个可打印字符来表示二进制数据的表示方法。

## Why use Base64

之所以使用 Base64，优势在于可以发起更少的 HTTP 下载请求，在文件较小的情况下可以通过减少握手延迟而加快加载速度。

比较适合用于小图标，大一点的图片就免了

## Base64 的弊端

1. 会阻塞页面。
图片编码到 HTML/CSS 中，会造成后者体积明显增加，影响网页的打开速度。
如果用 [外链图片](https://www.zhihu.com/search?q=%E5%A4%96%E9%93%BE%E5%9B%BE%E7%89%87&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A60967533%7D)的话，图片可以在页面渲染完成后继续加载，不会造成阻塞。
2. base64 编码后比原图要大。