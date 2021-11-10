"use strict";

const BinaryTree = require('./BinaryTree');
const Node = require('./Node')

class BinarySearchTree extends BinaryTree {
  
  add(value){
    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
      return;
    }

    let current = this.root;

    while(current){
      if(value === current.value){
        throw 'Value already exists in the tree';
      }
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          break;
        }
        else{
          current = current.left
        }
      }
      else{
        if(current.right === null){
          current.right = newNode;
          break;
        }
        else{
          current = current.right
        }
      }
    }

  }

  contains(value){
    let current = this.root;

    while(current){
      if(current.value === value){
        return true;
      }
      if(value < current.value){
        current = current.left
      }
      else{
        current = current.right
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
