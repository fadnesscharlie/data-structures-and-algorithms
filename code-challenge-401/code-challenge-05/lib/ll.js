'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // append to the end
  append(value) {


    let node = new Node(value)

    // what if the list is empty?
    if(!this.head) {
      this.head = node;
      return this;
    }

    if(value){
      // if there are nodes
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
  
      currentNode.next = node
      return this;
    } else console.log('Please add a value')

  }

  insert(value) {

    if(value) {
      // Create it
      let node = new Node(value);
  
      if(!this.head) {
        this.head = node;
        return this;
      }
  
      // Point it
      node.next = this.head
      
      // Change head to this node
      this.head = node;
    } else console.log('Please add a value');
  }

  includes(value) {

    if(!this.head) {
      return false;
    }

    if(value){
      let currentNode = this.head;
      while(currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        else {
          currentNode = currentNode.next
        }
      }
      return false;
    }
  }

  toString() {

    if(!this.head) {
      return false;
    }

    let valuesString = '';

    let currentNode = this.head;
    while (currentNode !== null) {
        valuesString += `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next
    }
    valuesString += 'NULL'
    // valuesString.join(' -> ')

    return valuesString;
  }
}

module.exports = LinkedList;
