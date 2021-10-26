'use strict'

const Node = require('./node.js')

'use strict'

class LinkedList{
  constructor(){
   this.head = null
  }
  append(value){
    let current = this.head;
    let newNode = new Node(value);
    while(current.next){
      current = current.next;
    }
    current.next = newNode
  }
  insertBefore(value, newValue) {
    if (this.head) {
      let current = this.head;
      let previous = null;
      while (current) {
        if (current.value === value) {
          let newNode = new Node(newValue);
            if (previous) {
            previous.next = newNode;
            newNode.next = current;
            } 
            else {
              this.head = newNode;
              newNode.next = current;
            }
        }
        previous = current;
        current = current.next;
      }
    }
  }


    insertAfter(value, newValue) {
      if (this.head) {
        let current = this.head;
        while (current) {
          if (current.value === value) {
            let after = current.next
            let newNode = new Node(newValue);
              current.next = newNode;
              newNode.next = after
            }
            current = current.next;
        }
      }
    }
  
}

module.exports = LinkedList