'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  hash(key) {
    // with the key, find every ASCII value for each i in the string
    return (
      (key.split('').reduce((prev, curr) => {
        return prev + curr.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );

    // add up all the ascii values
    // multiply by a prime number
    // modulo against the size of your hashmap
    // return the index
  }

  set(key, value) {
    // calculate the has of key
    let hash = this.hash(key);
    // console.log('hash', hash)
    // check if there is a value
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // assume there is a LL
    // create my entry
    let entry = { [key]: value }; // Zork:3 -> 'zork':3 // value of Node
    // add to LL
    this.map[hash].add(entry);
  }
  
  get(key) {
    // returns back the hash of the key
    let hash = this.hash(key);

    // returns false if no hash key
    if (!this.map[hash]) return false;

    // grabbing head inside of the linked list
    let current = this.map[hash].head;

    while (current) {
      if (Object.keys(current.value)[0] === key) {
        return current.value;
      }
      current = current.next;
    }
  }

  contains(key) {
    // returns back the hash of the key
    let hash = this.hash(key);

    // returns false if no hash key
    if(this.map[hash]) {
      return true
    } else {
      return false
    } 
  }
}

module.exports = Hashmap;

let myhash = new Hashmap(1024);
myhash.set('John', 'Boss');
myhash.set('Jonh', 'Boss2');
myhash.set('Cathy', 'The Real Boss');
myhash.set('Zach', 'Kid 1');
myhash.set('Allie', 'Kid 2');
myhash.set('Rosie', 'Dog');
myhash.set('Cat', 'TA');
myhash.set('Justin', 'Student');
myhash.set('Jason', 'Student');
myhash.set('Ben', 'Student');
myhash.set('Timea', 'Student');
myhash.set('Jen', 'Student');
myhash.set('Khalil', 'Student');
myhash.set('Michael', 'Student');
myhash.set('Ovi', 'Student');

// console.log('myhash:', myhash);
// console.log('Results from Get', myhash.get('Jonh'));
// console.log('Results true from Contains', myhash.contains('John'))
// console.log('Results false from Contains', myhash.contains('John2'))




// myhash.map.forEach((data, i) => {
//   console.log(i, data && data.values());
// });

// // let string1 = 'Zork';
// // let string2 = 'Lemi'
// // console.log('Zork ->', asciiLator(string1))
// // console.log('Lemi ->', asciiLator(string2))

// let key = 'lemi';
// // let entry = { [key]: 2 }
// // console.log(entry);
// // let size = 100;
// // let arr = new Array(size);
// // console.log(arr[89]);
// console.log(
//   ((key.charCodeAt(0) +
//     key.charCodeAt(1) +
//     key.charCodeAt(2) +
//     key.charCodeAt(3)) *
//     599) %
//     1024
// );
