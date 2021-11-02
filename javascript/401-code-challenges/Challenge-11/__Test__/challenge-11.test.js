'use strict'

const Node = require('../node.js');
const PseudoQueue = require('../PseudoQueue.js');
const Stack = require('../Stack.js')

describe('Testing PsuedoQueue method)', () => {
   it('Can successfully enqueue in a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.stack1.top.value).toEqual(3);
  });

  it('Cannot enqueue a value of null', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.enqueue()).toEqual("Cannot push value of null");
  });

  it('Can successfully dequeue multiple values in a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
  });

  it('Cannot dequeue an empty queue', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue.dequeue()).toEqual('this queue is empty');
  });

  it('Can successfully dequeue, then enqueue, then dequeue again', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.enqueue(4);
    expect(newQueue.stack1.top.value).toEqual(4);
    expect(newQueue.dequeue()).toEqual(2);

  });


});





