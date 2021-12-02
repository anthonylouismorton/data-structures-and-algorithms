'use strict'

const repeat = (str) => {
  const words = str.toLowerCase().split(/[ ,.]+/);
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (words.indexOf(word) !== words.lastIndexOf(word)) {
      return word;
    }
  }
  return 'there are no repeating words'
};

module.exports = repeat;