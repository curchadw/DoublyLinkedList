//pop()---romiving from end
//push()---adding to the end
//shift()----adding to the beginning
//unshift()----removing from the beginning


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
      let node = new Node(val)
      
      if (!this.head || !this.tail){
       this.head = node
       this.tail = node
      //  this.size++
       this.length = 1
      }else{
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
      }
    }
  
  
  pop() {

    let node = this.tail
    
    if(this.length === 1){
      this.head = null
      this.tail = null
      this.length--
    }

    if(this.tail){
      this.tail = this.tail.prev
      this.tail.next = null
      this.length--
      // this.tail.prev.next = null
    }

    return this
  }
  
  shift() {
    if(!this.head){
      return null
    }else{
      this.head = this.head.next
      this.head.prev = null
    }

    
    }

    unshift(val) {
      const node = new Node(val)

      if(!this.head){
        this.head = node
        this.tail = node
      }else{
        this.head.prev = node
        node.next = this.head
        this.head = node
      }
    }
  
   
   print(){
      let curr = this.head

      while(curr) {
        console.log(curr.value)

        curr = curr.next
      }

      
      
    }
}

// Tests
const list = new DoubleLinkedList();
list.push("Huskies");
list.push("are");
list.push("the");
list.push("best!");

list.print()
// console.log(list.tail)
// list.shift();
list.pop();
console.log(list.print());


