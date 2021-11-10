'use strict';

const Queues = require('../stacks-and-queues/queues.js');


describe('Enqueuing and Dequeuing', () => {
  it('should add multiple items to a queue', () => {
    let q = new Queues();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    // let answer = {head: [1, 2, 3]}
    expect(q.first.next.next.data).toEqual(3)
  })

  it('should remove the first item in our queue', ()=> {
    let q = new Queues();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue();
    expect(q.first.next.data).toEqual(3)
    q.dequeue();
    expect(q.first.data).toEqual(3)
  })

  it('Should peek at the data', () => {
    let q = new Queues();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.peek()).toEqual(1)
  })

  it('Should return nothing if no queue',  () => {
    let q = new Queues();
    expect(q.dequeue()).toBeFalsy();
    expect(q.peek()).toBeFalsy();
  })

  it('should return true or false using empty()', () => {
    let q = new Queues();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(1);
    expect(q.isEmpty()).toBeFalsy();
  })
})
