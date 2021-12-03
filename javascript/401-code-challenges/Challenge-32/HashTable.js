'use strict'

const LinkedList = require('./LinkedList.js')

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {

    let sum = 0;

    for (let i = 0; i < key.length; i ++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size; 
  }

  add(key, value) {
 
    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket) {
      bucket.append(payload);
    } 
    else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  contains(key) {
    let index = this.hash(key);

    let bucket = this.map[index];

    if(bucket){
      return true
    }
    return false
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if(!bucket){
      return null
    }
    if(bucket){
      let current = bucket.head;
      while(current){
        if(current.value[key]){
          return current.value[key];
        }
        current = current.next
        if(!current){
          return null
        }
      }
    }
    else{
      return null
    }
  }
}

module.exports = HashTable