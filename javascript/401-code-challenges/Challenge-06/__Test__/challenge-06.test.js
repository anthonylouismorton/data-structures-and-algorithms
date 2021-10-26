'use strict'

const LinkedList = require('../Linked-list-insertion.js')
const Node = require('../node.js')

describe('LinkedList-insertion test', () => {
   it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.append(10)

    expect(list.head.next.next.value).toBe(10);
  });
  it("Can successfully add multiple nodes to the end of a linked list", () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.append(10)
    list.append(12)
    expect(list.head.next.next.value).toBe(10);
    expect(list.head.next.next.next.value).toBe(12);
  });
  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.head.next.next.next = new Node(4)
    list.insertBefore(2, 5);
    expect(list.head.next.value).toBe(5);
    expect(list.head.next.next.value).toBe(2);
  });

  it("Can successfully insert a node before the first node of a linked list", () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.head.next.next.next = new Node(4)
    list.insertBefore(1, 5);
    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(1);
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.insertAfter(2, 5);
    expect(list.head.next.next.value).toBe(5);
    expect(list.head.next.next.next.value).toBe(3);
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.insertAfter(3, 5);
    list.insertAfter(5, 6);
    expect(list.head.next.next.next.value).toBe(5);
    expect(list.head.next.next.next.next.value).toBe(6);
  });

});
