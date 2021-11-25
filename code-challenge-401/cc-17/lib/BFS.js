'use strict';

class Queues {
  constructor() {
    this.first = 0;  
    this.size = 0;
  }

  enqueue(data) {
    let node = new Node(data)
    
    if(!this.first) {
      this.first = node;
      this.size++;
    } else {
      let new1 = this.first;
      while(new1.next) {
        new1 = new1.next;
      }
      new1.next = node;
      this.size++;
    }
  }

  dequeue() {
    if (!this.first) {
      return;
    }

    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

class BFS {
  constructor() {
    this.root = null
  }

  breadthFS (tree) {
    if(!this.root) {
      return null;
    }
    console.log('tree inside of BFS',tree)
    const queues = new Queues();

    let results = [];

    queues.enqueue(tree.root);

    while (queues.size !== 0) {
      console.log('first in queue', queues.first)
      if(queues.first.left) {
        queues.enqueue(queues.first.left)
      }
      if(queues.first.right) {
        queues.enqueue(queues.first.right)
      }

      results.push(queues.value.value)
      queues.dequeue();
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
  Queues, 
  Node
}
