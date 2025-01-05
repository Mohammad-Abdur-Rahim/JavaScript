// Spread js
const max =Math.max(10,20,11,22,33,44,99);
const number =[11,23,211,45,76,99];
const arrayMax =Math.max(...number)
console.log(max);
console.log(arrayMax);
// use spread operator to copy array value :

const n1=[1,2,3,4,5];
const n2 = [...n1];
n2.push(99);
console.log(n1);
console.log(n2);