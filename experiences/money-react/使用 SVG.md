# 使用 SVG

1.  运行 `yarn effet`
2.  设置 SVG loader
3.  把 icon 的 SVG 代码放到项目源目录中中单独文件存放
4.  在需要使用 SVG 的地方引入即可

    ```JavaScript
    import tags from "../icons/tags.SVG";
    import book from "../icons/book.SVG";
    import logs from "../icons/logs.SVG";
    console.log(tags, book, logs) // 为什么要 console.log
    ```

5. 引入之后，具体这样使用

    ```html
    <SVG className="icon">
        <use xlinkHref="#id" />
    </SVG>
    ```

    类名要用 `className` 来写；
    `xlinkHref` 里面是写 `id` ，注意加 `#` 。 


## loader 解析

我们的 SVG 这样写好后，会先被 SVGo-loader 解析，然后交由 SVG-sprite-loader 解析。
最终，loaders 会将每个 SVG 变成一个 symbol 标签，之后放到同一个 SVG 标签里，再把这个 SVG 标签放到页面里，


为什么一定要 `console.log(tags, book, logs)`？

虽然我们在 <use /> 标签里使用到了 import 进来的 SVG icons，但是 import 那里并不知道 xlinkHref="#id" 这里是使用到了他那里引入的变量。

create-react-app 生成的 react 项目是 TreeShaking 的，而引入的变量由于没有被用到，所以会被自动忽略，就等于我们没有引入过。所以需要用 console.log() 来使用一下引入的变量。

解决方法：我们也可以将 import 换成 require('')，require 不参与 TreeShaking 。

> TreeShaking 解释：字面是 摇树 的意思。摇一摇树的话，已经死掉的叶子、断掉的枝桠就会掉下来，所以对应着代
码里没用到的部分会被删除掉。


用 require 来代替 import

require("../icons/tags.SVG");
require("../icons/book.SVG");
require("../icons/logs.SVG");

这里只是重复了三次好像还好，但是如果是要引入 100 个 SVG 呢。

所以我们这里需要做一下优化。