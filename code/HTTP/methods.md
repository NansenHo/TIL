# methods

## 上传文件应该使用 PUT

流行使用 POST 上传文件是因为当年的 Web 没有太多 API 的支持，只能用表单来上传文件，所以后来大家也习惯了使用 POST。

但现在既然支持了这么多 API ，用 PUT 方法上传文件也可以实现，而且语义上更合适。

1. PUT 方法的特点是传输的实体部分是一个无结构的二进制数据。

2. POST 方法则倾向于结构化的数据。

**上传文件这个行为本身就是无结构数据的传输（文件是一个整体，文件的内容与传输行为无关），所以使用 PUT 更合适**。

当然，上传文件这个行为不光是把文件丢到服务器上而已，可能还需要传递一些文件的相关信息，比如文件在客户端的文件名之类的，这在使用POST方法时很容易实现。其实使用 PUT 方法也不存在什么问题，这些额外信息完全可以用自定义的 HTTP 请求头来传输。

现代浏览器对文件操作的支持已经很丰富了，可以直接从 FILE 控件的 files 属性上获取到用户选中的文件对象，然后通过 XHR 对象的 send 方法发送到服务器，这非常方便。而且服务器端省去了对 multipart/form-data 的解析，实现起来更加容易。

使用 PUT 方法上传文件也存在一些需要解决的问题。根据 PUT 的语义，我们需要知道文件上传之后的 URL（这个 URL 在文件上传前访问的话是 404 状态码），而不是像POST方法一样，把所有的上传都提交到同一个URL上。另外则是安全性的问题，并不是所有人都有上传的权限，比如某个资源属于某个用户，只有这个特定用户可以操作，这实现起来就有点麻烦（其实 POST 方法如果要实现这个的话也挺麻烦的，只是 POST 的麻烦被掩盖了）。对于这些问题，我觉得使用文件 MD5 作为 URL 就很容易解决。文件上传前在前端就可以计算出 MD5，就可以得到上传后的 URL，上传后文件也不会被篡改，权限问题也随之解决了。

PUT 方法就像后端已经给你挖好了一个坑，然后给了你一个 url ，说坑在这里，然后你把 file 的二进制内容往坑里面一放就可以了。

其实对于 PUT 方法上传文件，我想到的远不止以上这些。只是我的语言比较贫乏，没办法把一堆关系松散的概念一下子描述出来。我打算先试着把这玩意儿先实现出来，证明一些想法的正确性后再做进一步说明。

> 上传文件：
> 文件上传功能，有的时候需要在客户端用 js 计算文件的 md5
> ajax 再将算出来的文件的 md5 值发回服务器与数据库里面的记录比对
> 有一样的说明别人上传过，就不用传物理文件了，在数据库逻辑表中加个字段就 ok 