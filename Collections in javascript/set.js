// Set object is a collection of values only and these values are uniqe.
// set metods: set methods are pretty simillar to Map methods, and you can easily add and remove values
         // add(value)
         // delet(value)
         // has(value)
         // clear(value)

// creating a Set
let myset = new Set();
// add method
myset.add(10);
myset.add(20);
myset.add(30);
myset.add(20);
myset.add("one");
myset.add("two");
myset.add("three");
myset.add("two");
console.log(myset);
// delete method
myset.delete("one");
console.log(myset);
// has metod
console.log(myset.has("one"));
// clear method
myset.clear();
console.log(myset);
