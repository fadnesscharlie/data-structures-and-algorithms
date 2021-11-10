'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {

  it('constructor()',() => {
    let list = new LL();
    expect(list.head).toBeNull();
  })

  it('should append to a linked list', () => {
    let list = new LL();
    let initialValue = 'Haru';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue)
    
    let newValue = 'Krissy';
    list.insert(newValue);
    expect(list.head.next.value).toEqual(initialValue)

    // Makes sure the append does not overrite
    expect(list.head.value).toEqual(newValue)

    // verify
    console.log(list);
  })

  it('will return true when finding a value within the linked list that exists', () => {    
    let list = new LL();    
    let myFirstCar = 'Toyota';    
    list.append(myFirstCar);    
    let newCar = 'Lexus';    
    list.append(newCar);    
    let newestCar = 'Ford';    
    list.append(newestCar);  
    console.log('Linked list',list)  
    expect(list.includes(newCar)).toBe(true);  
    expect(list.includes('Jaguar')).toBe(false);  
  });

  it('will return true when finding a value within the linked list that exists', () => {    
    let list = new LL();    
    let myFirstCar = 'Toyota';    
    list.append(myFirstCar);    
    let newCar = 'Lexus';    
    list.append(newCar);    
    let newestCar = 'Ford';    
    list.append(newestCar);  
    console.log('Linked list',list)  
    expect(list.toString()).toEqual('{ Toyota } -> { Lexus } -> { Ford } -> NULL');  
  });
})
