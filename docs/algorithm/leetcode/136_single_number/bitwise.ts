// 这道题要求要有 线性时间复杂度
// 即时间复杂度不能高于 O(n)
// 而且还要求不能使用额外的空间

function singleNumber(nums: number[]): number {
  // 异或
  // a ^ a = 0 归零律
  // a ^ a ^ b = b 自反律
  // a ^ 0 = 0 恒等律
  if (nums.length === 1) { return nums[0] }
  let result: number = 0
  nums.forEach((num: number) => {
      result = result ^ num
  })
  return result
};