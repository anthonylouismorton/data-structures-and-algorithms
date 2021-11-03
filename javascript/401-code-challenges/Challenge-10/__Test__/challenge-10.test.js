'use strict'

const Stack = require('../Stack');
const Queue = require('../Queue.js');
const Node = require('../node.js');

describe('Testing Stack and Queue methods)', () => {
   it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack).toEqual({"top": null, "top": {"next": null, "value": 1}});
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack).toEqual({"top": null, "top": {"next": {"next": {"next": null, "value": 1}, "value": 2}, "value": 3}});
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.peek();
    expect(stack.top.value).toEqual(3);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBeNull();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual("Stack is empty");
    expect(stack.peek()).toEqual("Stack is empty");
  });

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1)
    expect(queue.front.value).toEqual(1);
  });
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.dequeue()
    expect(queue.front.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.peek()
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.front).toBeNull();
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual("Queue is empty");
    expect(queue.peek()).toEqual("Queue is empty");
  });


});



