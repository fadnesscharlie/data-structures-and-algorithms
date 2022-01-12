'use strict';

let repeatedWord = require('../lib/repeatedWord.js')

let sentence1 = 'There was a sentence that had a world which is amazing and had cool things'
let sentence2 = 'In this sentence, we will describe how a cat is the best cat'
let sentence3 = 'no words are the same'
let sentence4 = { ok: 'ok' }

let sentenceResults1 = [ 'a', 'had']
let sentenceResults2 = [ 'cat']

describe('Hash', () => {
  describe('Return back our duplicate words', () => {
    it('should return our duplicate words', () => {
      expect(repeatedWord(sentence1)).toEqual(sentenceResults1);
      expect(repeatedWord(sentence2)).toEqual(sentenceResults2);
    })
  })
  describe('return back false', () => {
    it('return false for no duplicate words', () => {
      expect(repeatedWord(sentence3)).toBeFalsy();
      expect(repeatedWord(sentence4)).toBeFalsy();
    })
  })
})
