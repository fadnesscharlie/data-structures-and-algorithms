'use strict';

const BinaryTree = require('../util/btMax.js');
const Node = require('../util/node');

let tree = new BinaryTree();


describe('Binary Tree', () => {
  describe('Add a node', () => {
    it('should add a node in the correct place', () => {
      tree.add(10);
      expect(tree.root.value).toEqual(10)
      tree.add(50);
      expect(tree.root.right.value).toEqual(50)
      tree.add(25);
      expect(tree.root.right.left.value).toEqual(25)
      tree.add(3);
      tree.add(34);
      tree.add(24);
      tree.add(7);
      expect(tree.root.left.right.value).toEqual(7)
      tree.add(23);
      tree.add(9);
    })
  })

  describe('Find Max Node in BT', () => {
    it('should return the max node in a tree', () => {
      let maxValue = tree.findMax();
      expect(maxValue).toEqual(50);
    })
  })
})
