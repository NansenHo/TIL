# mock `Image` 类

## SUT

比如我们写了下面的 Hook 用来在加载图片出现问题时，展示另外一张图片。

```ts
// useFetchErrorImage.ts
import { useState, useEffect } from "react";

const useFetchImageError = (imageUrl: string): string => {
  const [errorImageUrl, setErrorImageUrl] = useState<string>("");

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onerror = () => {
      setErrorImageUrl("/images/cam-error.svg");
    };

    return () => {
      image.onerror = null;
      setErrorImageUrl("");
    };
  }, [imageUrl]);

  return errorImageUrl;
};

export default useFetchImageError;
```

## 单测分析

那我们应该如何测试这个 Hook 呢

首先思考有什么是需要 mock 的，那就只有全局变量 `Image` 是需要的。

然后，我们需要测试 `onerror` 事件是否成功将图片 URL 设置成了 `"/images/cam-error.svg"`，

其次，还要测试 `useEffect` 的清除副作用函数是否正常工作。

## 测试代码

下面是完整的测试代码：

```ts
// useFetchErrorImage.spec.ts
import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import useFetchImageError from "../useFetchImageError";

class MockImage {
  onerror: (() => void) | null = null;

  constructor() {
    setTimeout(() => {
      if (this.onerror) {
        this.onerror();
      }
    }, 0);
  }

  set src(_: string) {
    setTimeout(() => {
      if (this.onerror) {
        this.onerror();
      }
    }, 0);
  }
}

vi.stubGlobal("Image", MockImage);

describe("useFetchImageError", () => {
  it("should return error image URL when image fails to load", async () => {
    const { result } = renderHook(() => useFetchImageError("test.jpg"));

    await waitFor(() => {
      expect(result.current).toBe("/images/cam-error.svg");
    });
  });

  it("should clear error handler on component unmount", async () => {
    const { result, unmount } = renderHook(() =>
      useFetchImageError("test.jpg")
    );

    await waitFor(() => {
      expect(result.current).toBe("/images/cam-error.svg");
    });

    unmount();

    const imageInstance = new MockImage();
    expect(imageInstance.onerror).toBeNull();
  });
});
```

接着我们来分析里面的具体的代码。

### mock `Image`

这个 MockImage 类在创建实例或设置 `src` 属性时，会立即调用 `onerror` 回调函数（如果设置了的话）。

这样就可以在测试环境中模拟图片加载错误的行为。

```ts
class MockImage {
  onerror: (() => void) | null = null;

  constructor() {
    setTimeout(() => {
      if (this.onerror) {
        this.onerror();
      }
    }, 0);
  }

  set src(_: string) {
    setTimeout(() => {
      if (this.onerror) {
        this.onerror();
      }
    }, 0);
  }
}

vi.stubGlobal("Image", MockImage);
```

### `waitFor`

为了获取异步代码的结果，我们需要用 [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor)。

```ts
import { renderHook, waitFor } from "@testing-library/react";

await waitFor(() => {
  expect(result.current).toBe("/images/cam-error.svg");
});
```

### `unmount`

`unmount` 方法用于模拟组件的卸载（即从 React 树中移除），从而我们可以测试到 `useEffect` 的清除副作用函数是否正常工作。

```ts
it("should clear error handler on component unmount", async () => {
  const { result, unmount } = renderHook(() => useFetchImageError("test.jpg"));

  await waitFor(() => {
    expect(result.current).toBe("/images/cam-error.svg");
    console.log(result.current); // 打印结果是 "/images/cam-error.svg"
  });

  unmount();

  const imageInstance = new MockImage();
  expect(imageInstance.onerror).toBeNull();
});
```

我发现其实代码写成下面这样，测试报告显示就已经 100% 通过了。

```ts
it("should clear error handler on component unmount", async () => {
  const { result, unmount } = renderHook(() => useFetchImageError("test.jpg"));

  await waitFor(() => {
    expect(result.current).toBe("/images/cam-error.svg");
    console.log(result.current); // 打印结果是 "/images/cam-error.svg"
  });

  unmount();
});
```

但清楚副作用还没有进行验证啊，为什么测试报告就 100% 通过了呢？

```ts
// 副作用部分代码
return () => {
  image.onerror = null;
  setErrorImageUrl("");
};
```

而且我也不知道如何验证 `image.onerror = null`，这个 `image` 没有被返回。

`setErrorImageUrl("")` 之后按道理来说被返回的 `errorImageUrl` 应该是 `""` 了。

但我在 `unmount` 之后打印出来的也仍然是 `"/images/cam-error.svg"`。

```ts
it("should clear error handler on component unmount", async () => {
  const { result, unmount } = renderHook(() => useFetchImageError("test.jpg"));

  await waitFor(() => {
    expect(result.current).toBe("/images/cam-error.svg");
    console.log(result.current); // 打印结果是 "/images/cam-error.svg"
  });

  unmount();

  await waitFor(() => {
    console.log(result.current); // 打印结果是 "/images/cam-error.svg"
  });
  console.log(result.current); // 打印结果是 "/images/cam-error.svg"
  const imageInstance = new MockImage();
  expect(imageInstance.onerror).toBeNull();
});
```
