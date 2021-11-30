'use strict';

class BFS {
  constructor(root = null) {
    this.root = root
  }

  breadthFS () {
    if(!this.root) return null;

    let queue = [this.root];
    let results = [];

    while (queue.length) {
      let shiftedQueue = queue.shift(results[0]);
      if(shiftedQueue.left) {
        queue.push(shiftedQueue.left)
      }
      if(shiftedQueue.right) {
        queue.push(shiftedQueue.right)
      }
      results.push(shiftedQueue.value)
    }
    return results;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value,
    this.left = left,
    this.right = right
  }
}

module.exports = {
  BFS, 
  Node
}
