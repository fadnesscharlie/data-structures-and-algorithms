'use strict';

const Node = require('../code-challenge-08/lib/node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      // console.log('append: ',current.data)
    }

    this.size++;
  }

  kthFromEnd(k) {
    let current = this.head;
    let count = 0;
    let kthIndex = this.size - k;
    kthIndex--;
    let negative = Math.sign(k)

    // If numbers are 0 or positive
    if (negative === 1 || negative === 0) {
      while(current) {
  
        // if k and length are the same
        if (current.next === null && kthIndex === count) {
          return console.log(`Last Value: ${k} ${current.data}`)
        }

        if (kthIndex === count) {
          console.log(`kth Value: ${k} ${current.data}`)
        }
        count++;
        current = current.next;
      }
    } else {
      return console.log('Please enter a valid number')
    }
    return null;
  }

  insertMiddleBefore(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    if (value) {
      let previous;
      let current = this.head;
      if (this.size === 0) {
        return;
      }
      let middle = Math.floor(this.size);
      if (middle % 2 === 1) {
        middle++;
      }
      let middleNow = middle / 2;
      for (let i = 0; i < middleNow; i++) {
        if (i === middleNow - 1) {
          node.next = current;
          previous.next = node;
        }
        previous = current;
        current = current.next;
      }
    }
  }

  insertMiddleAfter(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    if (value) {
      let current = this.head;
      if (this.size === 0) {
        return;
      }
      let middle = Math.floor(this.size);
      if (middle % 2 === 1) {
        middle++;
      }
      let middleNow = middle / 2;
      for (let i = 0; i < middleNow; i++) {
        if (i === middleNow - 1) {
          current.next = node;
          node = current.next;
        }
        current = current.next;
      }
    }
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current, previous;

    if (!this.head) {
      this.head = node;
      return this;
    }

    // Set current to first
    current = this.head;

    while (current.next) {
      // console.log('Insert Before: ',current.data)

      if (value === current.data) {
        node.next = current;
        previous.next = node;
        this.size++;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data)
    let current;

    // If empty, make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index){

    // If index is out of range
    if(index > 0 && index > this.size) {
      return;
    }

    // If first index
    if(index === 0) {
      // this.insertFirst(data)
      this.head - new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    // ---- Insert 500 at index 2 ----
    // REFERENCE ---> 100, 200, 300, 400, 500

    while (count < index) {
      // previous = 200
      // current = head
      previous = current; // node before index
      count++; // how many nodes did it go through
      // current.next = 300
      current = current.next; // Node after index
    }

    // set the head to node
    // link node.next to next linked list
    // current = 300
    // node = 500
    node.next = current; 

    // previous = 200
    // node = 500
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if(count === index) {
        console.log(current.data)
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remote at index
  remoteAt(index) {
    if( index > 0 && index > this.size) {
      return
    }

    let current = this.head
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      // Move the head to the next node
      this.head = current.next
    } else {
      while (count < index) {
        count++; // goes through
        previous = current; // Set the last to this
        current = current.next; // set this node to the next instead
      }
      previous.next = current.next
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print List data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data)
      current = current.next;
    }
  }
}

module.exports = LinkedList;
