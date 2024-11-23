//Reverse Array Without Function
// numbers.reverse();

const numbers =[1,2,3,4,5,6,7,8,9,10];
const rev_num =[];
for(const num of numbers){
// console.log(num);
rev_num.unshift(num);
}
console.log(rev_num);