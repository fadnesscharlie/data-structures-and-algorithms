"use strict";

// const stack = require('../../code-challenge-10/stacks-and-queues/stack.js')
// const queue = require('../../code-challenge-10/stacks-and-queues/queues.js');
const Stack = require("./stack.js");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (!this.stack1.top.value) {
      console.log('stack1', this.stack1.top.value)
      let top = this.stack1.pop();
      this.stack2.push(top.value);
      console.log('first while')
    }
    let result = this.stack1.pop();

    // while (!this.stack2.isEmpty()) {
    //   console.log('here')
    //   let top2 = this.stack2.pop();
    //   this.stack2.push(top2);
    // }
    return result.value;
  }
}

let myPseudoQueue = new PseudoQueue();

myPseudoQueue.enqueue(10);
myPseudoQueue.enqueue(15);
myPseudoQueue.enqueue(20);
console.log('first', myPseudoQueue)
console.log(myPseudoQueue.dequeue());
console.log(myPseudoQueue.dequeue());
console.log(myPseudoQueue.dequeue());
console.log('Second', myPseudoQueue)
// console.log('third', myPseudoQueue)
