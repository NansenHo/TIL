function simplifyPath(path: string): string {
  const arr:string[] = path.split('/')
  let stack:string[] = []
  let ele:string
  for (let i=0; i<arr.length; i++) {
    ele = arr[i]
    if (ele === '' || ele === '.') {

    } else if (ele === '..') {
      stack.pop()
    } else {
      stack.push(ele)
    }
  }
  return ('/' + stack.join('/'))
};

console.log(simplifyPath('/a/c/..//./d/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))