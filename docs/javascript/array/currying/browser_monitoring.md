# Currying - Achieve functionality across different compatibilities

You can achieve functionality across different compatibilities using a single function.

`addEventListener` and `attachEvent`:

```js
const eventListener = (function () {
  if (window.addEventListener) {
    return function (
      element,
      type,
      listener,
      options,
      useCapture,
      wantsUntrusted
    ) {
      element.addEventListener(
        type,
        function (e) {
          // put `event` in
          listener.call(element, e);
        },
        options,
        useCapture,
        wantsUntrusted
      );
    };
  } else if (window.attachEvent) {
    // IE 只支持事件冒泡。
    return function (element, event, pDisp) {
      element.attachEvent("on" + event, function (e) {
        pDisp.call(element, e);
      });
    };
  }
})();
```
