'use strict'

const  insertionSort = (arr) => {
  if(arr.length === 0){
    return 'you cannot sort an empty array'
  }
  for(let i = 1; i < arr.length; i++){
  
    let temp = arr[i];
    let j = i-1;
    while(j >= 0 && temp < arr[j]){
      arr[j+1] = arr[j]
      j--
      
    }
    arr[j+1] = temp
    
  }
  return arr
}

module.exports = insertionSort