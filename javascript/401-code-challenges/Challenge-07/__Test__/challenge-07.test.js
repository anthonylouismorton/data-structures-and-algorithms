'use strict'

const LinkedList = require('../linked-list-kth.js')
const Node = require('../node.js')

describe('Where k is greater than the length of the linked list', () => {
   it('Should return exception', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    
    expect(list.kthFromEnd(3)).toEqual('Exception');
  });
});

describe('Where k and the length of the list are the same', () => {
  it('Should return exception', () => {
   let list = new LinkedList();
   list.head = new Node(1)
   list.head.next = new Node(2)
   
   expect(list.kthFromEnd(2)).toEqual('Exception');
 });
});

describe('Where k is not a positive integer', () => {
  it('you must enter a positive number', () => {
   let list = new LinkedList();
   list.head = new Node(1)
   list.head.next = new Node(2)
   
   expect(list.kthFromEnd(-1)).toEqual('you must enter a positive number');
 });
});

describe('Where the linked list is of a size 1', () => {
  it('you must enter a positive number', () => {
   let list = new LinkedList();
   list.head = new Node(1)
   expect(list.kthFromEnd(0)).toEqual(1);
 });
});

describe('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  it('you must enter a positive number', () => {
   let list = new LinkedList();
   list.head = new Node(1)
   list.head.next = new Node(2)
   list.head.next.next = new Node(3)
   expect(list.kthFromEnd(1)).toEqual(2);
 });
});
