'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if(!this.top) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  pop() {
    if (this.top === null) {
      throw new Error('Stack is empty');
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp;
    }
  }

  peek() {
    // check if empty
    if(this.isEmpty()) {
      return null;
    }
    console.log('peeking: ',this.top)
    return this.top;
  }

  isEmpty() {
    if(!this.top) {
      console.log('true')
      return true;
    } else {
      console.log('false')
      return false;
    }
  }

}

module.exports = Stack;
