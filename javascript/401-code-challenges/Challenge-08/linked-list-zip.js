'use strict'

const Node = require('./node.js')

'use strict'

class LinkedList{
  constructor(){
   this.head = null
  }
 
  merge(list1, list2) {
    let listCur1 = list1.head;
    let listCur2 = list2.head;
    while (listCur1) {
      const temp = listCur1.next;
      listCur1.next = listCur2;
      listCur2 = temp; 
      listCur1 = listCur1.next;
    }
    return list1;
  };
 
}

module.exports = LinkedList