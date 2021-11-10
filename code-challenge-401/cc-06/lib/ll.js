"use strict";

const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Print List data
  printListData() {
    let current = this.head;

    while (current) {
      console.log("print Data: ", current.data);
      console.log(this.size);
      current = current.next;
    }
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

  insert(value) {
    if (value) {
      // Create it
      let node = new Node(value);

      if (!this.head) {
        this.head = node;
        return this;
      }

      // Point it
      node.next = this.head;

      // Change head to this node
      this.head = node;
    } else console.log("Please add a value");
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

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current;

    if (!this.head) {
      this.head = node;
      return this;
    }

    // Set current to first
    current = this.head;

    while (current.next) {
      // console.log('Insert After: ',current.data)

      if (value === current.data) {
        current.next = node;
        node = current.next;
        this.size++;
        return;
      }

      current = current.next;
    }
    // return;
  }
}

const ll = new LinkedList();
ll.append(100);
ll.append(200);
ll.append(300);
ll.append(400);
ll.append(500);
//            value, newValue
ll.insertBefore(400, 800);
ll.insertAfter(200, 800);
ll.append(600);

// console.log(ll)
// console.log('----------------------')
ll.printListData();

module.exports = LinkedList;
