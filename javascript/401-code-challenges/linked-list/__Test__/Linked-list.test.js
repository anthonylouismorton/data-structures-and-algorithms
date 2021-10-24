'use strict'

const LinkedList = require('../Linked-list.js')
const Node = require('../node.js')

describe('LinkedList test', () => {
  it('It should instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBe(null);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1)
    expect(list.head.value).toBe(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.head.next.next.next = new Node(4)
    list.insert(10)
    expect(list.head.value).toBe(10);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.insert(10)
    list.insert(11)
    expect(list).toEqual({"head": {"next": {"next": {"next": null, "value": 1}, "value": 10}, "value": 11}});
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.head.next.next.next = new Node(4)
    expect(list.includes(4)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.head = new Node(1)
    list.head.next = new Node(2)
    list.head.next.next = new Node(3)
    list.head.next.next.next = new Node(4)
    expect(list.includes(10)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1)
    list.insert(2)
    list.insert(3)
    expect(list).toEqual({"head": {"next": {"next": {"next": null, "value": 1}, "value": 2}, "value": 3}});
  });

});
