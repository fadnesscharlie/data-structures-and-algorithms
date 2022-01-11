'use strict';

let Hashmap = require('../lib/hash.js');

let myhash = new Hashmap(1024)
myhash.set('John', 'Boss');
myhash.set('Jonh', 'Boss2');

describe('Hash', () => {
  describe('Get', () => {
    it('Get should return results', () => {
      let results = {
        John: 'Boss'
      }
      expect(myhash.get('John')).toEqual(results)
      expect(myhash.get('John1')).toBeFalsy();
      
    })
  })
  describe('Contains', () => {
    it('should return true or false', () => {
      expect(myhash.contains('john2')).toBeFalsy();
      expect(myhash.contains('John')).toBeTruthy();
    })
  })
})
