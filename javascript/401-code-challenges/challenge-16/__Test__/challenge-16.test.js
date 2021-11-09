"use strict";

const BinaryTree = require("../BinaryTree.js");
const Node = require('../Node.js');

describe("Testing Binary Search Tree and Binary Tree)", () => {

  it("Can successfully find a max value on the right branch of the tree", () => {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(20);
    binaryTree.root.left.left = new Node(12);
    binaryTree.root.left.right = new Node(13);
    binaryTree.root.right = new Node(2);
    binaryTree.root.right.right = new Node(20);
    expect(binaryTree.findMaximumValue()).toEqual(20);

  });

  it("Can successfully find a max value on the left branch of the tree", () => {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(20);
    binaryTree.root.left.left = new Node(12);
    binaryTree.root.left.right = new Node(13);
    binaryTree.root.right = new Node(2);
    binaryTree.root.right.right = new Node(20);
    binaryTree.root.left.left.left = new Node(100);
    expect(binaryTree.findMaximumValue()).toEqual(100);

  });

  it("Can successfully find a max value on the left branch of the tree", () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.findMaximumValue()).toEqual("Cannot find maximum of a null value");

  });
;

});
