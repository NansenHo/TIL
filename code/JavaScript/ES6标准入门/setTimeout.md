# window.setTimeout 

[setTimeout MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)

## setTimeout 是什么

`WindowOrWorkerGlobalScope` Mixin 的 `setTimeout()` 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。

### 接受参数

接受以下参数：

1. **function / code**（必选）
   第一个参数可以是一个函数，也可以是一个字符串。在 delay 结束后，会执行函数 / 编译并执行字符串。
   但不推荐使用字符串，因为和 eval() 函数一样具有安全风险。
2. **delay**（可选）
   延迟的毫秒数。如果省略该参数，那 delay 取默认值 0（意味着”尽快/马上执行“）。
   不管是省略/不省略，实际的延迟时间都可能比设定的 delay 值更长。
3. **arg1, ... argN**（可选）
   附加参数，一旦定时器到期，它们会被作为参数传给 function 。
   
### 返回值

**返回值 timeoutID 是一个正整数，表示定时器的编号**。

返回值可以传给 `clearTimeout()` 来取消定时器。

## 实际延时比设定值更久的原因

setTimeout 的最小延时是 4ms 或者大于 4ms 。
