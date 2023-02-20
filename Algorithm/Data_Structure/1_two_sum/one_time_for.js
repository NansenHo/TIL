// 时间复杂度优化到 O(n)

var twoSum = function(nums, target) {
  let partner_num, partner_index;
  for (let i=0; i<nums.length; i++) {
    partner_num = (target - nums[i])
    partner_index = nums.indexOf(partner_num)
    if (nums.includes(partner_num) && (i !== partner_index)) {
      console.log([i, partner_index])
      return [i, partner_index]
    }
  }
};

twoSum([2,7,11,15], 9)
twoSum([3,3], 6)
twoSum([3,2,4], 6)