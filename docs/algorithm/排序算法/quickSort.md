# 快速排序

时间复杂度：$O(nlogn)$

```js
const list = [1, 200, 78, 809, 478, 234, 232, 21, 34, 543, 89, 295, 238, 684];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const flag = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
}

console.log(quickSort(list));
```

## 原地快排
