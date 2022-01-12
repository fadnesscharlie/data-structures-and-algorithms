'use strict';

function repeatedWord (string) {

  // Make sure the argument is a string
  if(typeof string !== 'string') return false 
  
  let splitString = string.split(' ');

  // store all the words in an array
  let arr = []

  // Store duplicate words to return back
  let duplicateWords = []

  splitString.forEach(word => {
    if(arr.includes(word)) {
      duplicateWords.push(word)
    }
    arr.push(word)
  })
  if(duplicateWords.length) { 
    return duplicateWords
  } else return false
}

// let sentence = 'There was a sentence that had a world which is amazing and had cool a things'
// let sentence2 = 'no words are the same'
// let sentence3 = {
//   ok: 'ok'
// }

// console.log('false:',repeatedWord(sentence3))
// console.log('split string',repeatedWord(sentence))
// console.log('split string false',repeatedWord(sentence2))

module.exports = repeatedWord
