# 滥用 useLayoutEffect 和 useState

## 先看看烂代码

前两天发现同事写了这样的一段代码：

```ts
import Head from "next/head";
import { useState, useLayoutEffect, useEffect } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/auth-state";
import MapDetailIndex from "@/features/map-details/index/MapDetailsIndex";

function Index() {
  const [contents, setContents] = useState(<></>);
  const router = useRouter();
  const isLoggedIn = useAuthStore((state: any) => state.isAuthenticated);

  useLayoutEffect(() => {
    if (isLoggedIn) {
      setContents(<MapDetailIndex key={router.asPath} />);
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (router.asPath !== "/map/details/st-sapporo/") {
      router.replace("/");
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>{contents}</main>
    </>
  );
}
```

同事想通过 `isLoggedIn` 这个外部状态来控制 `<MapDetailIndex key={router.asPath} />` 的显示和隐藏。

这个时候直接使用 `{isLoggedIn ? <MapDetailIndex key={router.asPath} /> : null}` 即可。

但她绕了一大圈，先用一个 `state` 来包裹想显示的内容，接着用 `useLayoutEffect` 来根据 `isLoggedIn` 更新这个 `state`。

## 调整之后的代码

```ts
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/auth-state";
import MapDetailIndex from "@/features/map-details/index/MapDetailsIndex";

function Index() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state: any) => state.isAuthenticated);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else if (router.asPath !== "/map/details/st-sapporo/") {
      // 札幌以外の拠点はデータがないので、この処理を追加しました。
      router.replace("/");
    }
  }, [isLoggedIn, router.asPath]);

  return (
    <>
      <Head>
        <title>拠点詳細 - DragonFly Web</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>{isLoggedIn ? <MapDetailIndex key={router.asPath} /> : null}</main>
    </>
  );
}

export default Index;
```

## `useLayoutEffect` 和 `useEffect` 的区别

- [useLayoutEffect 官方文档](https://zh-hans.react.dev/reference/react/useLayoutEffect)
- [useEffect 官方文档](https://zh-hans.react.dev/reference/react/useEffect)

`useEffect(setup, dependencies)` 是当组件被添加到 DOM 的时候，运行 setup 函数。
`useLayoutEffect(setup, dependencies)` 是在将组件首次添加到 DOM 之前，运行 setup 函数。

> `useLayoutEffect` 可能会影响性能。尽可能使用 `useEffect`。
>
> `useLayoutEffect` 内部的代码和所有计划的状态更新阻塞了浏览器重新绘制屏幕。
> 如果过度使用，这会使你的应用程序变慢。
> 如果可能的话，尽量选择 `useEffect`。

## `useLayoutEffect` 的使用场景举例

如果希望在浏览器**重新绘制屏幕之前**被执行/被计算完成，那就使用 `useLayoutEffect`。

比如，根据后端返回的状态来更换屏幕上的默认 icon，如果使用 `useEffect`，用户则可能看到 icon 切换的过程。

比如，根据用户鼠标的位置信息，来确定一个 tip 组件的位置，如果使用 `useEffect`，用户则可能看到 tip 组件在移动。

很明显，在该场景下，只是需要进行路由跳转，完全不需要在重新绘制屏幕前被执行，直接使用 `useEffect` 即可。
