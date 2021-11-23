"use strict";

const sortedInsertion = require('../sortedInsertion.js');

describe("It can successfully sort an array)", () => {

  it('returns an array sorted in numerical order', () => {
    let newArray = sortedInsertion([8,4,23,42,16,15])
    expect(newArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('returns an array sorted in numerical order even when containing a negative number', () => {
    let newArray2 = sortedInsertion([20,18,12,8,5,-2])
    expect(newArray2).toEqual([-2,5,8,12,18,20]);
  });

  it('returns an array of one number', () => {
    let newArray = sortedInsertion([8])
    expect(newArray).toEqual([8]);
  });


  it('returns an array sorted in numerical order', () => {
    
    expect(sortedInsertion([])).toEqual("you cannot sort an empty array");
  });



});


