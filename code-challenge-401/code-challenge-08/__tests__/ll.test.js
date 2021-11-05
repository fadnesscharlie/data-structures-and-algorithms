"use strict";

const LL = require("../lib/ll.js");

describe("Linked List", () => {
  it("constructor()", () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('should return the values from a linked list', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(300);
    ll.append(500);
    ll.append(700);
    ll.append(900);
    
    let ll2 = new LL();
    ll2.append(200);
    ll2.append(400);
    ll2.append(600);
    ll2.append(800);

    let ll3 = new LL();
    let zipped = ll3.zipLists(ll, ll2);
    console.log('zipped list',zipped)
    expect(ll3.zipLists(ll, ll2)).toBeDefined();
    expect(zipped.next.next.data).toEqual(300);
  })
})

