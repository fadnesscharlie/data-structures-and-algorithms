'use strict';

class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class Stack {
  
  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    // unshift adds it to the beginning or top
    this.storage.unshift(value); // Try not to use build in methods
    this.top = value;
  }

  pop() {
    // Temp varaible
    // Reassign top
    // reassign tempy.next to empty
    // return
    let temp = this.storage.shift(); // Try not to use build in methods
    this.top = this.storage[0]
    return temp
  }

  peek() {
    // check if empty
    if(this.isEmpty()) {
      return null;
    }
    console.log('Length: ', this.storage.length)
    return this.top;
  }

  isEmpty() {
    if(!this.storage.value) {
      console.log('Storage in isEmpty()----',this.storage)
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Stack;
