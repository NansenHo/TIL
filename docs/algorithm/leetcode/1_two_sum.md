# 1. Two Sum | Easy

```js
// lastIndexOf
var twoSum = function (nums, target) {
  let j;
  for (let i = 0; i < nums.length; i++) {
    j = nums.lastIndexOf(target - nums[i]);
    // 使用 lastIndexOf 避免拿到的是当前索引
    if (j >= 0 && i !== j) {
      console.log([i, j]);
      return [i, j];
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);
```

```js
// 时间复杂度优化到 O(n)

var twoSum = function (nums, target) {
  let partner_num, partner_index;
  for (let i = 0; i < nums.length; i++) {
    partner_num = target - nums[i];
    partner_index = nums.indexOf(partner_num);
    if (nums.includes(partner_num) && i !== partner_index) {
      console.log([i, partner_index]);
      return [i, partner_index];
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);
```

```js
// - 时间复杂度: $O(n)$
// - 空间复杂度: $O(1)$

var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let current_num = nums[i];
    let partner_num = target - current_num;
    if (current_num in obj) {
      // 查询对象的复杂度是 O(1)
      return [i, obj[current_num]];
    } else {
      obj[partner_num] = i;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);
```

```js
// 双层循环暴力解

// 时间复杂度：O(n^2)
//   时间复杂度很高，需要优化。
// 空间复杂度：O(1)
//   因为只有 i 和 j 这两个额外变量，
//   而它们都只是 number 变量，无论数字修改多少次，
//   其所占空间没有本质区别。
//   空间复杂度很低很优秀。

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
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);
```
