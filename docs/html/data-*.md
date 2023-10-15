# `data-*` Attribute

注意如果存储的是包含键值对的对象，那我们要注意 data-* 属性的单双引号，否则可能出现 undefined 的情况。

```html
<style>
    .demo {
        /* CSS 读 data-* 的值 */
    }
</style>

<div class="demo" data-obj=''></div>

<script>
    let demo = document.querySelector('.demo');
    // JS 读 data-* 的值
    console.log(demo.dataset.obj);
</script>
```