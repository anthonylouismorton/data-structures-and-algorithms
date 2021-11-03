"use strict";

class Brackets {
  validateBrackets(str) {
    let count = 0
    let stack = [];
    let bracketChars = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    let library = ["(", ")", "[", "]", "{", "}"];

    for (let i = 0; i < str.length; i++) {
      const index = str[i];
      if (!library.includes(index)) {
        console.log("do nothing!");
      } else if (index === "(" || index === "[" || index === "{") {
        stack.push(index);
        count+= 1
      } else {
        let compare = stack.pop();
        if (index !== bracketChars[compare]) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    if(count === 0){
      return false;
    }
    return true;
  }
}

module.exports = Brackets;
