# 136. Single Number | Easy

## 异或

异或，英文为 exclusive OR，缩写成 xor。

主要用来**判断两个值是否不同**。

异或的数学符号为“⊕”，计算机符号为“xor”。

### 运算法则

1. 归零律
   $a ⊕ a = 0$
   一个值与自身的计算总是为 `false`

2. 恒等律
   $a ⊕ 0 = a$
   一个值与 0 的计算总是等于其本身

3. 交换律
   $a ⊕ b = b ⊕ a$

4. 结合律
   $a ⊕ b ⊕ c = (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c)$

5. 自反
   $a ⊕ b ⊕ a = b$

6. $d = a ⊕ b ⊕ c$
   可以推出：
   $a = d ⊕ b ⊕ c$

```js
// 这道题要求要有 线性时间复杂度
// 即时间复杂度不能高于 O(n)
// 而且还要求不能使用额外的空间

function singleNumber(nums: number[]): number {
  // 异或
  // a ^ a = 0 归零律
  // a ^ a ^ b = b 自反律
  // a ^ 0 = 0 恒等律
  if (nums.length === 1) {
    return nums[0];
  }
  let result: number = 0;
  nums.forEach((num: number) => {
    result = result ^ num;
  });
  return result;
}
```
