'use  strict';

let Node = require('../../Master-Files/node.js')

class Queues {
  constructor() {
    // this.queue = {};
    this.first = 0;  
    // this.tail = 0;
    this.size = 0;
  }

  enqueue(data) {
    let node = new Node(data)
    if(!this.first) {
      this.first = node;
    } else {
      let new1 = this.first;
      while(new1.next) {
        new1 = new1.next;
      }
      new1.next = node;
    }


    // this.queue[this.tail++] = node
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

  peek() {
    if (!this.first) {
      return;
    }
    return this.first.data;
  }

  isEmpty() {
    if(!this.first) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queues;
