"use strict";

const Node = require('./Node')

class BinaryTree {
  constructor(){
    this.root = null;
    this.max = 0;
  }

  helperfunction(current){
    if(current.value > this.max){
      this.max = current.value
    }
    if(current.left){
      this.helperfunction(current.left)
    }
    if(current.right){
      this.helperfunction(current.right)
    }
  }
  findMaximumValue(){
    if(this.root === null){
      return 'Cannot find maximum of a null value'
    }
    this.helperfunction(this.root);
    return this.max;

  }

  preOrder(current) {
    //console.log(current.value);
    this.treeValues.push(current.value)
    if (current.left) {
      this.preOrder(current.left);
    }
    if (current.right) {
      this.preOrder(current.right);
    }
    return this.treeValues;
  }
  
  inOrder(current) {  
    if (current.left) {
      this.inOrder(current.left);
    }

    this.treeValues.push(current.value)
    if (current.right) {
      this.inOrder(current.right);
    }
    return this.treeValues;
  }
  
  postOrder(current) {  
    if (current.left) {
      this.postOrder(current.left);
    }
    
    if (current.right) {
      this.postOrder(current.right);
    }
    this.treeValues.push(current.value)
    return this.treeValues;
  }
  
}

module.exports = BinaryTree;
