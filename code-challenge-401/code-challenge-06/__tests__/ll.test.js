"use strict";

const LL = require("../lib/ll.js");

describe("Linked List", () => {
  it("constructor()", () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it("will insert before a value", () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    ll.insertBefore(400, 800)
    expect(ll.head.next.next.next.data).toEqual(800)
  });

  it('will insert after a value', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    ll.insertAfter(400, 800)
    expect(ll.head.next.next.next.next.data).toEqual(800)
  })

  it('will append to the end', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    
    expect(ll.head.next.data).toEqual(200)
  })
  it('will append to the middle', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    ll.insertMiddleBefore(800)
    expect(ll.head.next.next.data).toEqual(800)
  })
  it('will append to the middle', () => {
    let ll = new LL();
    ll.append(100);
    ll.append(200);
    ll.append(300);
    ll.append(400);
    ll.append(500);
    ll.insertMiddleAfter(800)
    expect(ll.head.next.next.next.data).toEqual(800)
  })
});
