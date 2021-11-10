'use strict';

let Node = require('../../Master-Files/node.js')

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(animal) {
    let node = {pet: new Node(animal)}
    if(!this.first) {
      this.first = node;
    } else {
      let newAnimal = this.first;
      while(newAnimal.pet.next) {
        newAnimal = newAnimal.pet.next;
      }
      newAnimal.pet.next = node;
      this.size++;
    }
  }

  dequeue(pref) {
    if (!this.first) {
    return
    }
    let temp = this.first;
    // console.log('inside deqeue1',temp.pet)
    // console.log('inside deqeue2',temp.pet.next.pet.next)
    // console.log('inside deqeue3',temp.pet.next.pet.next.pet.next)
    if(pref) {




      // NEED TO SET PREVIOUS!
      let previous;






      // let tempPet = temp.pet
      while(temp.pet) {
        // console.log('hi', temp.pet)
        // console.log('pet', temp.pet)
        // console.log('petdata', temp.pet.data)
        console.log(`inside if: ${pref} === ${temp.pet.data}`)
        if(pref === temp.pet.data) {
          // console.log('temp', temp.pet)
          // console.log('temp', temp.pet.next.pet)
          console.log('############################')
          temp.pet = temp.pet.next.pet;
          this.size--;
          return temp;

          // console.log('pet after if', temp.pet)
        }
        console.log('temp first', temp.pet)
        temp.pet = temp.pet.next.pet;
        console.log('temp second', temp.pet)
      }
    } else  {
      this.first = this.first.pet.next;
      this.size--;
    }
    return temp;
  }
}

let animal = new Queue();

animal.enqueue('dog')
animal.enqueue('cat')
animal.enqueue('bird')
animal.enqueue('bird1')
// animal.enqueue('bird2')
console.log('ALL ANIMALS BEFORE',JSON.stringify(animal, null, 2))
// console.log('queue2',animal.first.pet)
// console.log('queue3',animal.first.pet.data)
// console.log('dequeue1',animal.dequeue('dog'));
// console.log('dequeue1',animal.dequeue('dog'));
console.log('dequeue1',animal.dequeue('bird'));
// console.log('dequeue2',animal.dequeue());
console.log('ALL ANIMALS AFTER',animal)
// console.log('dequeue2',animal.dequeue());
// console.log('dequeue2',animal.dequeue());
// console.log('dequeue2',animal.dequeue());
// console.log('dequeue2',animal.dequeue());
// console.log('dequeue3',animal.dequeue());

module.exports = Queue;
