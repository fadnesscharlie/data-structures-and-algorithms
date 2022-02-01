'use strict';

let Hash = require('./hash.js')
let HashTable1 = new Hash(1024) 
let HashTable2 = new Hash(1024) 

function leftJoin (HashTable1, HashTable2) {
  
  let results = [];

  let test = HashTable1.map.map(ele => {
    // console.log('ele:', Object.keys(ele.head.value));
    results.push(Object.keys(ele.head.value), Object.values(ele.head.value)[0])

    let HT2Value = HashTable2.get(Object.keys(ele.head.value))
    console.log('HT2Value:', HT2Value);
    if(HT2Value) {results.push(HT2Value)
    } else { results.push('Null')} 
    

  })

  // console.log('test:', test);
  console.log('results:', results);
  console.log('HashTable1:', HashTable1.map.map(ele => Object.keys(ele.head.value)));
  console.log('HashTable2:', HashTable2.map.map(ele => Object.keys(ele.head.value)));
  // console.log('HashTable2:', HashTable2);
  
  // use get to grab data from hashtable1

  // if true push into array
  // get from hashtable2
  // if true, push values into array as well
  // else push null into array



  // return results array

}

HashTable1.set('John', 'Boss');
HashTable1.set('Jonh', 'Boss2');
HashTable1.set('Cathy', 'The Real Boss');
HashTable1.set('Zach', 'Kid 1');
HashTable1.set('Allie', 'Kid 2');
HashTable1.set('Rosie', 'Dog');
HashTable1.set('Cat', 'TA');
HashTable1.set('Justin', 'Student');
HashTable1.set('Jason', 'Student');
HashTable1.set('Ben', 'Student');
HashTable1.set('Timea', 'Student');
HashTable1.set('Jen', 'Student');
HashTable1.set('Khalil', 'Student');
HashTable1.set('Michael', 'Student');
HashTable1.set('Ovi', 'Student');

HashTable2.set('John', 'Boss');
HashTable2.set('Jonh1', 'Boss2');
HashTable2.set('Cathy', 'The Real Boss');
HashTable2.set('Zach', 'Kid 1');
HashTable2.set('Allie', 'Kid 2');
HashTable2.set('Rosie1', 'Dog');
HashTable2.set('Cat1', 'TA');
HashTable2.set('Justin', 'Student');
HashTable2.set('Jason', 'Student');
HashTable2.set('Ben', 'Student');
HashTable2.set('Timea', 'Student');
HashTable2.set('Jen', 'Student');
HashTable2.set('Khalil', 'Student');
HashTable2.set('Michael', 'Student');
HashTable2.set('Ovi', 'Student');



console.log(leftJoin(HashTable1, HashTable2));
