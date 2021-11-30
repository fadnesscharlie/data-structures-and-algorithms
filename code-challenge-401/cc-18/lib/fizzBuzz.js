'use strict';

// create our tree class node
class Node {
  constructor(value, left = null, right = null){
    this.value = value,
    this.left = left,
    this.right = right
  }
}

// create an add node
class Tree {
  constructor(root){
    this.root = root
  }
  fizzBuzz() {
    // let results = [];
    let tree = this.root
    let newTree = tree;
    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);

      if((node.value % 3 === 0) & (node.value % 5 === 0)) {
        return node.value = 'FizzBuzz';

      } else if (node.value % 3 === 0) {
        return node.value = 'Fizz';

      } else if (node.value % 5 === 0) {
        return node.value = 'Buzz';

      } else {
        return node.value = `Number ${node.value} is not divisible by 3 or 5`;
      }
      // console.log('done walking?')
    }
    _walk(newTree);
    // console.log('tree', JSON.stringify(newTree, null, 2))
    return newTree;
  }

  kAryFizzBuzz() {
    if(!this.root) return null;

    let tree = this.root

    let queue = [tree];
    let results = [];

    while (queue.length) {

      let shiftedQueue = queue.shift(results[0]);

      if(shiftedQueue.left) {
        queue.push(shiftedQueue.left)
      }
      if(shiftedQueue.right) {
        queue.push(shiftedQueue.right)
      }

      if((shiftedQueue.value % 3 === 0) & (shiftedQueue.value % 5 === 0)) {
        return queue.value = 'FizzBuzz';

      } else if (shiftedQueue.value % 3 === 0) {
        return shiftedQueue.value = 'Fizz';

      } else if (shiftedQueue.value % 5 === 0) {
        return shiftedQueue.value = 'Buzz';
        
      } else {
        return shiftedQueue.value = `Number ${shiftedQueue.value} is not divisible by 3 or 5`;
      }

      // results.push(shiftedQueue.value)
    }
    return results;
  }
}

module.exports = {
  Tree, Node
} 
