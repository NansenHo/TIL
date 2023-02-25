// 这道题要求要有 线性时间复杂度
// 即时间复杂度不能高于 O(n)
// 而且还要求不能使用额外的空间

var singleNumber = function(nums) {
  let result = 0
  nums.forEach(num => {
      // 结合律
      // 恒等律
      result ^= num
  })
  return result
};