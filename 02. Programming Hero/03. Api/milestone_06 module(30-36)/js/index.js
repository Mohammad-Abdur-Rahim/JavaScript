// Map ==> Methods  ----------
const number =[10,20,3,44,55];


// const  doubleIt =(n)=> n*2;

// const output = number.map(doubleIt);
const output = number.map((n)=> n*2);
console.log(output);

const friends =['rakib','roni','asif','munna'];
// for(const f of friends){
//     console.log(f.length)
// }
const length = friends.map(friends=>friends.length);
console.log(length);