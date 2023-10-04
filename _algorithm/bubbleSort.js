const list = [1, 200, 78, 809, 478, 234, 232, 21, 34, 543, 89, 295, 238, 684];

// 虽然我们用 list.length - j 来优化了内层循环，但是外层循环还是要执行 list.length 次，所以时间复杂度还是 O(n^2)。
function bubbleSort(list) {
  for (let j = 0; j < list.length; j++) {
    for (let i = 0; i < list.length - j; i++) {
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
      }
    }
  }
  return list;
}

console.log(bubbleSort(list));
