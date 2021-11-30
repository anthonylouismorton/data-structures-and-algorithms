"use strict";

const quickSort = require('../quickSort.js');

describe("It can successfully sort an array)", () => {

  it('returns an array sorted in numerical order', () => {
    let newArray = [8,4,23,42,16,15]
    expect(quickSort(newArray, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('returns an array sorted in numerical order even when containing a negative number', () => {
    let newArray = [20,18,12,8,5,-2]
    expect(quickSort(newArray, 0, 5)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('returns an array of one number', () => {
    let newArray = [8]
    expect(quickSort(newArray, 0, 0)).toEqual([8]);
  });


  it('returns error if you attempt to sort an empty array', () => {
    
    expect(quickSort([])).toEqual("you cannot sort an empty array");
  });

});


