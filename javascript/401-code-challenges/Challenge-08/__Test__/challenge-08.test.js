'use strict'

const LinkedList = require('../linked-list-zip.js')
const Node = require('../node.js')

describe('Where two linked lists should be zipped together (one node after another)', () => {
   it('Should return a zipped linked list given two linked lists', () => {
    let list1 = new LinkedList();
    list1.head = new Node(1)
    list1.head.next = new Node(3)
    list1.head.next.next = new Node(5)

    let list2 = new LinkedList();
    list2.head = new Node(2)
    list2.head.next = new Node(4)
    list2.head.next.next = new Node(6)

    let newList = new LinkedList();
    
    expect(newList.merge(list1, list2)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": {"next": null, "value": 6}, "value": 5}, "value": 4}, "value": 3}, "value": 2}, "value": 1}});
  });

});



