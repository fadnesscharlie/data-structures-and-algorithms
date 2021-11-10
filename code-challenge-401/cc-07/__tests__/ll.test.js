"use strict";

const LL = require("../lib/ll.js");

describe("Linked List", () => {
  it("constructor()", () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('should return null if kth value is not in the list', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    expect(ll.kthFromEnd(10)).toBeNull();
  })

  it('should return the value is the list is the same as k', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    expect(ll.kthFromEnd(0)).toEqual(100);
    expect(ll.kthFromEnd(1)).toEqual(200);
  })

  it('should be true if list is size of 1', () => {
    let ll = new LL;
    ll.append(100);
    expect(ll.kthFromEnd(0)).toBeDefined();
  })

  it('should return the value if k is less than list size', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    expect(ll.kthFromEnd(2)).toBeDefined();
  })
});
