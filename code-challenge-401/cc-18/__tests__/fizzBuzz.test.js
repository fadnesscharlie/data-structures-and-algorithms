'use strict';

let { Node } = require('../lib/fizzBuzz.js')
let { Tree } = require('../lib/fizzBuzz.js')

let tree = new Tree();

// let node = new Node();

// let tree;
beforeAll(() => {
  tree.root = new Node(15)
  tree.root.right = new Node(3)
  tree.root.right.right = new Node(5)
  tree.root.right.left = new Node(18);
  tree.root.left = new Node(55);
  tree.root.left.right = new Node(10);
  tree.root.left.left = new Node(46)
  tree.fizzBuzz();
})

/*
           TREE
            15
          /    \
        55      3
        / \     / \
      46  10   18   5


        TREE RESULTS
          FizzBuzz
        /          \
    Buzz            Fizz
   /   \           /    \
 Null  Buzz     Fizz    Buzz
*/

describe('FizzBuzz', () => {
  it('should return FizzBuzz', () => {
    let result = 'FizzBuzz'
    expect(tree.root.value).toBe(result)
  })

  it('should return Fizz', () => {
    let result = 'Fizz'
    expect(tree.root.right.left.value).toBe(result)
  })

  it('should return Buzz', () => {
    let result = 'Buzz'
    expect(tree.root.left.right.value).toBe(result)
  })
})
