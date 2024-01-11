# 手写 JS 数组方法 `reverse`

面试官要求写一个 `reverse` 函数，实现将 `[1, 3, 6, 20, 9]` 翻转成 `[9, 20, 6, 3, 1]`。

## 创建一个新数组来处理

```ts
import { describe, it, expect } from "vitest";

function reverse(nums: number[]) {
  const list: number[] = [];
  let l = nums.length;

  while (l--) {
    list.push(nums[l]);
  }

  return list;
}

describe("reverse", () => {
  it("should reverse array", () => {
    const arr = [1, 3, 6, 20, 9];

    expect(reverse(arr)).toStrictEqual(arr.reverse());
  });
});
```

## 在原数组上进行处理

不创建一个新数组，而是直接交换数组两端的元素即可完成转换。

```ts
import { describe, it, expect } from "vitest";

function reverseArrayInPlace(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];

    left++;
    right--;
  }

  return nums;
}

describe("reverse", () => {
  it("reverseArrayInPlace", () => {
    const arr = [1, 3, 6, 20, 9];

    expect(reverseArrayInPlace(arr)).toStrictEqual(arr.reverse());
  });
});
```

## 共享屏幕写代码的面试技巧

1. 在 VSCode 中写（秀 Vim 操作）

2. 新建一个测试文件中写代码

3. 先写单测，将接口先设计好，再写具体实现代码
