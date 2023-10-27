# 1. Two Sum | Easy

## 使用 `map`

使用 `map` 来存储 `partner number` 和数组中确定存在的匹配的数字的下标。

这样，在遍历到数组中存在和 `partner number` 一样的数时，就可以直接拿当前下标，以及 `map` 中存储的下标组成数组并返回了。

- 时间复杂度: $O(n)$

- 空间复杂度: $O(n)$

  在最坏的情况下，`map` 会存储数组中的所有元素。

```js
const twoSum = function (nums, target) {
  // p: i
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let p = target - nums[i];
    if (nums[i] in map) {
      // 查询对象的复杂度是 O(1)
      return [i, map[nums[i]]];
    } else {
      map[p] = i;
    }
  }
  return [];
};

// TEST
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3, 3], 8));
```

## 使用 `lastIndexOf`

使用 `lastIndexOf` 可以避免拿到当前索引，比使用 `indexOf` 更适合。

- 时间复杂度 $O(n^2)$

  - 外部有一个 `for` 循环，会遍历整个数组，时间复杂度为 $O(n)$

  - 每次外部循环，都会调用 `lastIndexOf()` 方法，这个方法在最坏的情况下，会遍历整个数组来查找下标，所以时间复杂度也是 $O(n)$

  因此，总的时间复杂度为 $O(n) * O(n) = O(n^2)$

- 空间复杂度 $O(1)$

```js
// lastIndexOf
var twoSum = function (nums, target) {
  let j;
  for (let i = 0; i < nums.length; i++) {
    j = nums.lastIndexOf(target - nums[i]);
    if (j >= 0 && i !== j) {
      return [i, j];
    }
  }
  return [];
};

// TEST
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3, 3], 8));
```

## 双层循化暴力解

- 时间复杂度：$O(n^2)$

  时间复杂度很高，需要优化。

- 空间复杂度：$O(1)$

  因为只有 `i` 和 `j` 这两个额外变量，而它们都只是 `number` 变量，无论数字修改多少次，其所占空间没有本质区别。

  空间复杂度很低很优秀。

```js
var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && nums[i] !== nums[j]) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
  return [];
};

// TEST
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3, 3], 8));
```
