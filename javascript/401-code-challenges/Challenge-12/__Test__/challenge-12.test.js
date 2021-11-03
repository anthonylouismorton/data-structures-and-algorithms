'use strict'

const AnimalShelter = require('../AnimalShelter.js');
const Stack = require('../Stack.js')

describe('Testing PsuedoQueue method)', () => {
   it('Can successfully enqueue a cat', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    expect(newQueue.catStack.top.value).toEqual('cat');
  });

  it('Can enqueue two cats', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    expect(newQueue.catStack.top.next.value).toEqual('cat');
  });

  it('can dequeue a cat', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.dequeue('cat');
    expect(newQueue.catStack.top).toBeNull();
  });
  it('can dequeue multiple cats', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    newQueue.enqueue('cat');
    newQueue.dequeue('cat');
    newQueue.dequeue('cat');
    expect(newQueue.catStack.top).toBeNull();
    expect(newQueue.animalQueueStack.top.value).toEqual('cat');

  });

  it('Can successfully enqueue a dog', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    expect(newQueue.dogStack.top.value).toEqual('dog');
  });

  it('Can enqueue two dogs', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.enqueue('dog');
    expect(newQueue.dogStack.top.next.value).toEqual('dog');
  });

  it('can dequeue a dog', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('dog');
    newQueue.dequeue('dog');
    expect(newQueue.dogStack.top).toBeNull();
  });

  it('Cannot enqueue animals other than dogs and cats', () => {
    const newQueue = new AnimalShelter();
    // newQueue.enqueue('dog');

    expect(newQueue.enqueue('rabbit')).toEqual("we do not accept that animal at our shelter");
  });

  it('Can successfully enqueue a dog and cat', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat');
    newQueue.enqueue('dog');
    expect(newQueue.catStack.top.value).toEqual('cat');
    expect(newQueue.dogStack.top.value).toEqual('dog');
  });

  it('Cannot dequeue an empty queue', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat')
    newQueue.dequeue('cat')
    expect(newQueue.dequeue('cat')).toEqual("this queue is empty");
  });

  it('Cannot dequeue an incorrect preference', () => {
    const newQueue = new AnimalShelter();
    newQueue.enqueue('cat')
    expect(newQueue.dequeue('rabbit')).toBeNull();
  });

  // it('Can dequeue a mixture of dogs and cats', () => {
  //   const newQueue = new AnimalShelter();
  //   newQueue.enqueue('cat')
  //   newQueue.enqueue('cat')
  //   newQueue.enqueue('dog')
  //   newQueue.enqueue('dog')
  //   newQueue.enqueue('cat')
  //   newQueue.enqueue('dog')
  //   newQueue.dequeue('cat')
  //   expect(newQueue.animalQueueStack).toEqual({"top": {"next": {"next": null, "value": "cat"}, "value": "cat"}})
  //   newQueue.dequeue('dog')
  //   expect(newQueue.animalQueueStack.top).toEqual(null)
  //   expect(newQueue.catStack.top.value).toEqual('cat')
  //   expect(newQueue.dogStack).toEqual()
  //   newQueue.dequeue('cat')

  //   ;
  //   expect(newQueue.dogStack).toEqual();
  });

});





