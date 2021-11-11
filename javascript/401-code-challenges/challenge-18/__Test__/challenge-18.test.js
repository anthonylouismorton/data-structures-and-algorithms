"use strict";

const kAryTree = require("../k-arytree.js");
const Node = require('../Node.js');

describe("It can sucessfully convert a tree to fizzbuzz values)", () => {

  it('works properly if the value is divisible by 3: replaces the value with “Fizz”', () => {
    const KaryTree = new kAryTree();
    const funTree = new kAryTree();
    KaryTree.root = new Node(10);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(5));
    KaryTree.root.children[0].children.push(new Node(9));
    KaryTree.root.children[1].children.push(new Node(12));
    KaryTree.root.children[1].children.push(new Node(18));
    KaryTree.root.children[2].children.push(new Node(99));
    KaryTree.root.children[2].children.push(new Node(150));
    KaryTree.root.children[2].children.push(new Node(22));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('Fizz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('Fizz');
    expect(KaryTree.root.children[0].children[1].value).toBe('Fizz');
    expect(KaryTree.root.children[1].children[1].value).toBe('Fizz');
  });

  it('works properly if the value is divisible by 5: replaces the value with “Buzz”', () => {
    const KaryTree = new kAryTree();
    const funTree = new kAryTree();
    KaryTree.root = new Node(3);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(3));
    KaryTree.root.children[0].children.push(new Node(10));
    KaryTree.root.children[1].children.push(new Node(20));
    KaryTree.root.children[1].children.push(new Node(25));
    KaryTree.root.children[2].children.push(new Node(35));
    KaryTree.root.children[2].children.push(new Node(40));
    KaryTree.root.children[2].children.push(new Node(50));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('Buzz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('Buzz');
    expect(KaryTree.root.children[0].children[1].value).toBe('Buzz');
    expect(KaryTree.root.children[1].children[1].value).toBe('Buzz');
  });

  it('works properly if the value is divisible by 15: replaces the value with “FizzBuzz”', () => {
    const KaryTree = new kAryTree();
    const funTree = new kAryTree();
    KaryTree.root = new Node(3);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(3));
    KaryTree.root.children[0].children.push(new Node(15));
    KaryTree.root.children[1].children.push(new Node(30));
    KaryTree.root.children[1].children.push(new Node(45));
    KaryTree.root.children[2].children.push(new Node(60));
    KaryTree.root.children[2].children.push(new Node(75));
    KaryTree.root.children[2].children.push(new Node(90));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('FizzBuzz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('FizzBuzz');
    expect(KaryTree.root.children[0].children[1].value).toBe('FizzBuzz');
    expect(KaryTree.root.children[1].children[1].value).toBe('FizzBuzz');
  });

  it('works properly if the value is divisible by 15: replaces the value with “FizzBuzz”', () => {
    const KaryTree = new kAryTree();
    const funTree = new kAryTree();
    KaryTree.root = new Node(10);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(3));
    KaryTree.root.children[0].children.push(new Node(4));
    KaryTree.root.children[1].children.push(new Node(8));
    KaryTree.root.children[1].children.push(new Node(14));
    KaryTree.root.children[2].children.push(new Node(60));
    KaryTree.root.children[2].children.push(new Node(75));
    KaryTree.root.children[2].children.push(new Node(90));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe("10");
    expect(KaryTree.root.children[0].children[0].value).not.toBe('3');
    expect(KaryTree.root.children[0].children[1].value).toBe('4');
    expect(KaryTree.root.children[1].children[1].value).toBe('14');
  });

  it('returns error if you call fizzbuzz on empty tree', () => {
    const KaryTree = new kAryTree();
    const funTree = new kAryTree();
    expect(funTree.fizzBuzzTree(KaryTree)).toEqual("there is no tree dumb dumb");
  });

});


