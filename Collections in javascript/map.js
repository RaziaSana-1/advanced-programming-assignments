// keyed collection
// in javascript there are two types of keyed collections: Set and Map

//  MAP and it's methods:
        // set( key-name, value)
        // get( key-name, value)
        // has( key-name, value)
        // delete( key-name, value)
        // clear()

// creating a Map
let myMap = new Map();
// set method
myMap.set("one",1);
myMap.set("two",2);
myMap.set("three",3);
myMap.set("Four","four");
myMap.set("five","five");
console.log(myMap);
// get method
console.log("the value is ");
console.log(myMap.get("Four"));
// has method
console.log(myMap.has("three"));
console.log(myMap.has("teen"));
// delete method
myMap.delete("four");
console.log(myMap);
// clear method
myMap.clear();
console.log(myMap);
