'use strict';

const { BFS } = require('../lib/BFS.js');
const { Queues } = require('../lib/BFS.js');
const { Node } = require('../lib/BFS.js')

let queues = new Queues();
let bfs = new BFS();

let newNode = new Node(5);
let tree = newNode

beforeAll(() => {
  tree.right = new Node(7)
  tree.left = new Node(4)
  tree.right.left = new Node(65);
  tree.right.right = new Node(8);
  tree.right.right.left = new Node(100)
  tree.left.left = new Node(86);
  tree.left.left.left = new Node(900);
  tree.left.left.right = new Node(34)
})

describe('BFS', () => {
  describe('enqueues the first node', () => {
    it('should return back the value of the first node in the queue', () => {
      queues.enqueue(5)
      expect(queues.first.value).toBe(5)
      queues.dequeue();
      expect(queues.first).toBeUndefined();
    })
  })

  describe('Check to see if BFS is working', () => {
    it('should return an array of our values', () => {
      let resultArray = [5, 4, 7, 86, 65, 8, 900, 34, 100]
      // console.log('tree here',tree)
      expect(bfs.breadthFS(tree)).toBe(resultArray)

    })
  })
})
