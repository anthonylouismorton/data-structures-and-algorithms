'use strict'

const Node = require('./node.js')

'use strict'

class LinkedList{
  constructor(){
   this.head = null
  }
 
  kthFromEnd(k) {
    let length = 0;
    let current = this.head;
    let temp = this.head;
    if(k >= 0) {
      while(current != null){
        current = current.next
        length++
        }
        if(length <= k){
          return 'Exception'
        }
        for (let i = 0; i < length - k - 1; i++){
          temp = temp.next;
          
        }
        return temp.value;
    }
    return 'you must enter a positive number'
  };
}

module.exports = LinkedList