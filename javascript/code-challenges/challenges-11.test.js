'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.

For example:
{
  name: 'bob',
  age: 32
}

Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */

function transformToLis(obj){
  var newArr = [];
  Object.entries(obj).forEach(arr => {
    arr[0] === 'name' ? newArr.push(`<li>name: ${arr[1]}</li>`) : newArr.push(`<li>age: ${arr[1]}</li>`);
  });
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

const count = (target, input) => {
  let count = 0;
  input.flat().filter(x => x === target ? count++ : count)
  return count
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...
  let total = 0;
  input.forEach(arr => {
    arr.forEach((number) =>{
      total += number;
    })
  });
  return total;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  let filtered = input.map(arr => arr.filtered(number => number % 5 === 0 && typeof(number) === 'number'));
  let newArr = [];
  for (let i = 0; i < filtered.length; i++){
    newArr.push([]);
    for (let j = 0; j <= filtered.length; j++){
      if (filtered[i][j]) {
        newArr[i].push(Math.pow(2, filtered[i][j]));
      }
    }
  }
  return newArr;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  // Solution code here...

  var newArr =[];
  data.forEach((person, i, arr) => {
    if(person.gender === 'male' || (person.gender ==='female')){
      if(i === arr.length - 1){
        newArr.push(`${person.name}`);
      } else {
        newArr.push(`${person.name} and `);
      }
    }
  });

  return newArr.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the character who is the shortest in height.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  let selectedCharacter = data.reduce((a, b) => Number(a.height) < Number(b.height) ? a : b, 0)
  return selectedCharacter.name
  }

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return a list of key value pairs inside of li tags', () => {
    expect(transformToLis({name: 'bob', age: 32})[0]).toStrictEqual(`<li>name: bob</li>`);
    expect(transformToLis({name: 'bob', age: 32})[1]).toStrictEqual(`<li>age: 32</li>`);
    expect(transformToLis({})).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 6', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
