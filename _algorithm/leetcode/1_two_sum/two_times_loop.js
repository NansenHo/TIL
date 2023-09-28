// 双层循环暴力解

// 时间复杂度：O(n^2)
//   时间复杂度很高，需要优化。
// 空间复杂度：O(1)
//   因为只有 i 和 j 这两个额外变量，
//   而它们都只是 number 变量，无论数字修改多少次，
//   其所占空间没有本质区别。
//   空间复杂度很低很优秀。

var nums = [2,7,11,15]
var target = 9
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
      for (let j=0; j<nums.length; j++) {
        if (nums[i] + nums[j] === target && nums[i] !== nums[j]) {
          console.log([i, j])
           return [i, j]
        }
      }
    }
};

twoSum([2,7,11,15], 9)
twoSum([3,3], 6)
twoSum([3,2,4], 6)