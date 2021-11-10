"use strict";

const BinaryTree = require("../BinaryTree.js");
const Node = require('../Node.js');

describe("Testing Binary Search Tree and Binary Tree)", () => {

  it("Can successfully traverse a tree breadth first", () => {
    let binaryTree = new BinaryTree();
    let checkTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);
    binaryTree.root.left.left = new Node(4);
    binaryTree.root.left.right = new Node(5);
    binaryTree.root.right.left = new Node(6);
    binaryTree.root.right.right = new Node(7);
    expect(checkTree.breadthFirst(binaryTree)).toEqual([1, 2, 3, 4, 5, 6, 7]);

  });

  it("Can successfully traverse an ubalanced tree", () => {
    let binaryTree = new BinaryTree();
    let checkTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);
    binaryTree.root.left.left = new Node(4);
    binaryTree.root.left.left.left = new Node(5);
    binaryTree.root.left.left.left.right = new Node(6);
    binaryTree.root.right.right = new Node(7);
    binaryTree.root.right.right.right = new Node(8);
    expect(checkTree.breadthFirst(binaryTree)).toEqual([1, 2, 3, 4, 7, 5, 8, 6]);

  });

  it("returns error if the tree is empty", () => {
    let binaryTree = new BinaryTree();
    let checkTree = new BinaryTree();
    expect(checkTree.breadthFirst(binaryTree)).toEqual("cannot traverse an empty tree");

  });

});
