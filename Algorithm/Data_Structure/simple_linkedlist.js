// 实现一个简单的链表

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.length = 0
  }
  append(val){
    let p = this.head
    let node = new Node(val)
    if(this.head){
      while (p.next) {p = p.next}
      p.next = node
    }else{
      this.head = node
    }
    this.length++
  }
  print(){
    let p = this.head
    let text = ''
    if(p){
      do {
        text += (p.val + '=>')
        p = p.next
      } while (p.next)
      text += p.val
      console.log(text)
    }else{
      console.log('empty linkedlist')
    }
  }
}

let _linkedList = new LinkedList()
_linkedList.append(1)
_linkedList.append(2)
_linkedList.append(3)
_linkedList.append(4)
_linkedList.print() // 1=>2=>3=>4

console.log(_linkedList.length) // 4