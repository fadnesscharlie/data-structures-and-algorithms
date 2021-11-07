'use strict';

const Queues = require('../lib/stack-queue-pseudo.js');


describe('Enqueuing and Dequeuing', () => {
  it('should add multiple items to a queue', () => {
    let q = new Queues();
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    console.log('first',q)
    // let answer = {head: [1, 2, 3]}
    expect(q.stack1.top.next.next.value).toEqual(3)
  })

  it('should remove the first item in our queue', ()=> {
    let q = new Queues();
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);

    q.dequeue();
    expect(q.stack1.top.next.value).toEqual(3)
    q.dequeue();
    expect(q.stack1.top.value).toEqual(3)
  })
})
