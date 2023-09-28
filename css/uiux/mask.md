# 点击某按钮后，为整个页面添加遮罩

想实现，用户点击付款，然后用户跳转到新页面去付款。于是当前页面跟着盖上遮罩，让用户无法操作该页面，并在这遮罩上添加一个“支付完成”按钮，用户点击该按钮，遮罩和该按钮都会去掉。

```javascript
    createMask() {
      if (document.querySelector('#mask')) {
        return
      }
      let mask = document.createElement('div');
      let finish = document.createElement('button');
      mask.id = 'mask';
      mask.className = 'mask';
      mask.style = 'left: 0; top: 0; bottom:0; right:0; position: fixed; z-index: 				200; background: rgba(0,0,0,0.6);';
      finish.id = 'finish';
      finish.className = 'finish';
      finish.style = 'position: absolute; z-index: 300; top: 50%; right: 50%; 						margin-top: -25px; margin-right: -91px; padding: 1em 2em; font-size: 14px; 				 border: none; border-radius: 4px; color: #fff; background-color: #409eff';
      finish.innerHTML = '支払い終わりました';
      document.body.appendChild(mask);
      document.body.appendChild(finish);
      document.documentElement.classList.add('htmlMask');
      finish.addEventListener('click', this.deleteMask);
    },

    deleteMask() {
      let mask = document.querySelector('#mask');
      let finish = finish = document.querySelector('#finish');
      mask.parentNode.removeChild(mask);
      document.documentElement.classList.remove('htmlMask');
      finish.parentNode.removeChild(finish); 
    },
```

以上代码是写在 Vue methods 里面的，createMask 函数绑定到增加遮罩的点击事件上。

以上代码有几个知识点需要注意：

1. mask 的 style 写法

2. finish 按钮的 style 写法
   `top: 50%; right: 50%; margin-top: -25px; margin-right: -91px;` 这里使用了负 margin 以让按钮垂直水平居中。

3. 文档对象模型 DOM

   - `let mask = document.createElement('tagName')` 创建一个新的元素；[Document.createElement]([Document.createElement() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement))

   - `document.body.appendChild(mask)` 将一个节点附加到指定父节点的子节点列表的末尾处。
     如果将被插入的节点已经存在于当前文档的文档树中，那么 `appendChild()` 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）；

     [Node.appendChild]([Node.appendChild - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild))

   - 尽量使用 `document.querySelector()` 和 `document.querySeletorAll()` 来获取元素；
     不推荐用 `document.getElementById()` 和 `document.getElementByTagName()` 和 `document.getElementByClassName()` 来获取元素。

   - `mask.parentNode` 返回指定的节点，即 mask 节点在 DOM 树中的父节点。[Node.parentNode]([Node.parentNode - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentNode))

   - `mask.parentNode.removeChild(mask)` 删除 mask 节点自己。`Node.removeChild()` 方法从 DOM 中删除一个子节点。返回删除的节点。

   - `document.documentElement.classList` 返回一个元素的类属性的实时 [`DOMTokenList`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList) 集合。我们可以对这个集合做 `.add('className')` 和 `.remove('className')` 等操作。[Element.classList]([Element.classList - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList))
