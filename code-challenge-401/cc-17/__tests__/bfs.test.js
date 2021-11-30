'use strict';

const { BFS } = require('../lib/BFS.js');
const { Node } = require('../lib/BFS.js')


let tree = new BFS();
beforeAll(() => {
  tree.root = new Node(5);
  tree.root.right = new Node(7)
  tree.root.left = new Node(4)
  tree.root.right.left = new Node(65);
  tree.root.right.right = new Node(8);
  tree.root.right.right.left = new Node(100)
  tree.root.left.left = new Node(86);
  tree.root.left.left.left = new Node(900);
  tree.root.left.left.right = new Node(34)
})

describe('BFS', () => {
  describe('Check to see if BFS is working', () => {
    it('should return an array of our values', () => {
      let resultArray = [5, 4, 7, 86, 65, 8, 900, 34, 100]
      expect(tree.breadthFS()).toStrictEqual(resultArray)
    })
  })
})
