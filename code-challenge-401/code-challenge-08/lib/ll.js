"use strict";

const Node = require("./node.js");
const LL = require("../../ll-info-master.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  zipLinkedList = (current, list2) => {
    // let current;
    current = this.head;
    // // Create catch if no list
    // console.log('Current',current)
    // console.log('ListsTwo',list2)
    while (current.next) {
      // console.log('inside first if',current.next)
      // if (current.next) {
      //   this.append(current.data);
      //   current = current.next;
      // }
      if (current.next) {
        console.log("list2 value", list2);
        this.insertAfter(current.data, list2.data);
        list2 = list2.next;
      }
      // expends the list
      current = current.next;
    }
    // console.log('final list',current)
  };
  
  zip = (l1, l2) => {
    let l3, tail, pred;
    // initialize l3
    l3 = new Node("");
    tail = l3;
    while (l1 || l2) {
      if (l1 !== null) tail.val += l1.val;
      if (l2 !== null) tail.val += l2.val;
      console.log("here l1 ---", l1);
      console.log("here l2 ---", l2);
  
      tail.next = new Node("");
      pred = tail;
      tail = tail.next;
      console.log("here Tail ---", tail);
  
      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
    }
  
    pred.next = null; // Doing tail = null here doesn't work. Why?
  
    return l3;
  };
  
  append = (data) => {
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
  
  zipLists = (list1,list2) => {
  
    let zippedList = new LL();
    let c1 = list1.head;
    let c2 = list2.head;
    let next1;
    let next2;
    zippedList.append(c1.data);
    zippedList.append(c2.data);
  
    while(c1.next&&c2.next !== null){
      next1 = c1.next; // Holding the data for the list
      next2 = c2.next;
      c1.next = c2; // attach list2 data to list 1's head
      c2.next = next1; // attach list 1's data to list 2's
      c1 = next1;
      c2 = next2;
      zippedList.append(c1.data);
      zippedList.append(c2.data);
    }
  
    return zippedList.head;
  };
}

module.exports = LinkedList;

const listOne = new LL();
const listTwo = new LL();
const listThree = new LL();

listOne.append(100);
listOne.append(300);
listOne.append(500);
listOne.append(700);

listTwo.append(200);
listTwo.append(400);
listTwo.append(600);
listTwo.append(800);

console.log("----------------------");
// console.log(this.zipLists(listOne,listTwo));
// console.log("zip --- ", zip(listOne, listTwo));
// ll.printListData();
// zipLinkedList(listOne, listTwo);
