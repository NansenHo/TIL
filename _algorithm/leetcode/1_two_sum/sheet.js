// - 时间复杂度: $O(n)$
// - 空间复杂度: $O(1)$

var twoSum = function(nums, target) {
  let obj = {}
  for (let i=0; i<nums.length; i++) {
    let current_num = nums[i]
    let partner_num = target - current_num
    if (current_num in obj) {
    // 查询对象的复杂度是 O(1)
      return [i, obj[current_num]]
    } else {
      obj[partner_num] = i
    }
  }
};

twoSum([2,7,11,15], 9)
twoSum([3,3], 6)
twoSum([3,2,4], 6)