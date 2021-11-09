"use strict";

const BinaryTree = require("../BinaryTree.js");
const BinarySearchTree = require('../BinarySearchTree');
const Node = require('../Node.js');

describe("Testing Binary Search Tree and Binary Tree)", () => {
  it("Can successfully instantiate an empty tree", () => {
    let binaryTree = new BinaryTree();
    let binarySearchTree = new BinarySearchTree();
    expect(binaryTree.root).toBeNull();
    expect(binarySearchTree.root).toBeNull();
    
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    let binaryTree = new BinaryTree();
    let binarySearchTree = new BinarySearchTree();
    binaryTree.root = new Node(1);
    binarySearchTree.add(1);
    expect(binaryTree.root.value).toEqual(1);
    expect(binarySearchTree.root.value).toEqual(1);
    
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(1);
    binarySearchTree.add(11);
    expect(binarySearchTree.root.right.value).toEqual(11);
    expect(binarySearchTree.root.left.value).toEqual(1);
    expect(binarySearchTree.root.value).toEqual(10);
    
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(10);
    binaryTree.root.left = new Node(1);
    binaryTree.root.right = new Node(11);
    binaryTree.root.left.left = new Node(2);
    binaryTree.root.left.right = new Node(3);
    expect(binaryTree.preOrder(binaryTree.root)).toEqual([10, 1, 2, 3, 11]);
    
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(10);
    binaryTree.root.left = new Node(1);
    binaryTree.root.right = new Node(11);
    binaryTree.root.left.left = new Node(2);
    binaryTree.root.left.right = new Node(3);
    expect(binaryTree.inOrder(binaryTree.root)).toEqual([2, 1, 3, 10, 11]);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(10);
    binaryTree.root.left = new Node(1);
    binaryTree.root.right = new Node(11);
    binaryTree.root.left.left = new Node(2);
    binaryTree.root.left.right = new Node(3);
    expect(binaryTree.postOrder(binaryTree.root)).toEqual([2, 3, 1, 11, 10]);
  });

  it("Can successfully find a value in a tree", () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(1);
    binarySearchTree.add(11);
    expect(binarySearchTree.contains(10)).toEqual(true);
  });

  it("Can successfully return false if a tree doesn't contain a value", () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(1);
    binarySearchTree.add(11);
    expect(binarySearchTree.contains(8)).toEqual(false);
  });

});
