var twoSum = function(nums, target) {
    let j
    for (let i=0; i<nums.length; i++) {
      j = nums.lastIndexOf(target - nums[i])
      // 使用 lastIndexOf 避免拿到的是当前索引
      if (j >= 0 && i !== j) {
        console.log([i, j])
        return [i, j]
      }
    }
};

twoSum([2,7,11,15], 9)
twoSum([3,3], 6)
twoSum([3,2,4], 6)