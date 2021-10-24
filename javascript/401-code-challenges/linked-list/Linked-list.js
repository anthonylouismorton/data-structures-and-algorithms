'use strict'

const Node = require('./node.js')

class LinkedList{
  constructor(){
   this.head = null
  }
  insert(value){
    let oldHead = this.head
    let newHead = new Node(value);
    newHead.next = oldHead;
    this.head = newHead
  }
  includes(value) {
    let current = this.head
    while(current){
      console.log('in while')
      if(current.value === value){
        console.log('ok')
        console.log(current)
        return true;
      }
    current = current.next;
  }
  return false;
}
  toString() {
    let current = this.head
    let response = '';
    while(current){
      response += `${current.value} -> `
      current = current.next
    }
    response += 'NULL'
    return response;
  }
}

module.exports = LinkedList