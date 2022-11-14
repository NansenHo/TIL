# Build A Tree Array From A Flat Array

```js
const entries = [
  {
    id: 1,
    parentId: 0
  },
  {
    id: 2,
    parentId: 1
  },
  {
    id: 3,
    parentId: 2
  }
]

const arrayToTree = (arr, parent = 0) => 
  arr.filter(item => item.parentId === parent)
  .map(child => ({ ...child, children: arrayToTree(arr, child.id) }))

arrayToTree(entries)
```