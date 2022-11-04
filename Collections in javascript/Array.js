// In javascript we have tree types of collections:
//      1. indexed collection
//         2. keyed collections
//         3. DOM collections
//    java scrift has two types of indexed b collections :
//         1. Array
//         2. Type Array

// Array
// array methods: push,pop,sort,reverse,shift,unshift,join,cocat,slice,splice
const myarray=['tomato','onion','cabbage'];
console.log(myarray);
myarray.push('cucumber','lemon');
console.log(myarray);
myarray.pop('lemon');
console.log(myarray);
myarray.sort();
console.log(myarray);
myarray.splice(2,1,'egg');
console.log(myarray);
const abc=myarray.slice(0,1);
const Arrayjoin=myarray.join("*");
console.log(Arrayjoin);
console.log('************************************************************');
console.log('************************************************************');
const myarray2=[200,250,456,879];
console.log(myarray2);
let reversarray=myarray2.reverse();
console.log(reversarray);
myarray2.unshift(1000);
console.log(myarray2);
myarray2.shift();
console.log(myarray2);
console.log('************************************************************');
console.log('************************************************************');
let finalarray=myarray.concat(myarray2);
console.log(finalarray);
delete myarray2[1];
console.log(myarray2);







