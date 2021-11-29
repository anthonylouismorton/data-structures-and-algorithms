"use strict";

const HashTable = require('../HashTable.js');

describe("Can successfully implement a HashTable", () => {

  it('Can add key/value to the hashtable', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')

    expect(myHashTable.map[855]).toEqual({"head": {"next": null, "value": {"anthony": "student"}}})
    
  });

  it('Can determine if a key exists within a hash table', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')

    expect(myHashTable.contains('anthony')).toEqual(true)
    expect(myHashTable.contains('Anthony')).toEqual(false)
    
  });

  it('Can retrieve a value based on a key', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')

    expect(myHashTable.get('anthony')).toEqual('student')
    
    
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')

    expect(myHashTable.get('cat')).toEqual(null)
    expect(myHashTable.get('ynohtna')).toEqual(null)
    
  });

  it('Successfully handles a collision within the hashtable', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')
    myHashTable.add('ynohtna', 'fake person')
    expect(myHashTable.map[855].head.value).toEqual({"anthony": "student"})
    expect(myHashTable.map[855].head.next.value).toEqual({"ynohtna": "fake person"})
    
    
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')
    myHashTable.add('ynohtna', 'fake person')

    expect(myHashTable.get('ynohtna')).toEqual("fake person")
    
    
  });

  it('Successfully hash a key to an in-range value', () => {
    let myHashTable = new HashTable(1024);
    myHashTable.add('anthony', 'student')

    expect(myHashTable.hash('anthony')).toEqual(855)
    
    
  });

});


