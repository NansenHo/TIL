# 20. Valid Parentheses | Easy

```ts
function isValid(s: string): boolean {
  let stack: string[] = [];
  // hash table 构建不同括号对应关系
  type Table = {
    [key: string]: string;
  };
  const obj: Table = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let ele;
  for (let i = 0; i < s.length; i++) {
    ele = s[i];
    if (s[i] in obj) {
      // 是左括号
      stack.push(ele);
    } else {
      // 是右括号
      const p: string = stack.pop() || "";
      if (ele !== obj[p]) {
        return false;
      }
    }
  }
  // 为了避免输入只有左边的情况，如 '{[('
  return !stack.length;
}

console.log(isValid("{}()"));
console.log(isValid("{})"));
console.log(isValid("[{()}]"));
console.log(isValid("[{(}]"));
console.log(isValid("}})"));
```
