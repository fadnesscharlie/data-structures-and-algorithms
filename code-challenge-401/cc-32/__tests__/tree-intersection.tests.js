'use strict';

let treeIntersection = require('../lib/tree-intersection.js')

const binaryTree = {
  root: {
      value: 1,
      right: {
          value: 3,
          right: {
              value: 5
          },
          left: {
              value: 4
          }
      },
      left: {
          value: 2,
          left: {
              value: 6
          }
      }
  }
}
const binaryTree2 = {
  root: {
      value: 1,
      right: {
          value: 73,
          right: {
              value: 5
          },
          left: {
              value: 54
          }
      },
      left: {
          value: 61,
          left: {
              value: 6
          }
      }
  }
}

let treeResults = treeIntersection(binaryTree, binaryTree2)

describe('Hash', () => {
  describe('Get', () => {
    it('Get should return results', () => {
      let results = [ 1, 6, 61, 54, 5, 1 ]
      expect(treeResults).toEqual(results)
      
    })
  })
  describe('Falsy', () => {
    it('should return true or false', () => {
      let results = []
      let random;
      expect(treeResults).not.toEqual(results)
      expect(treeIntersection(binaryTree, random)).toBeFalsy();
    })
  })
})


