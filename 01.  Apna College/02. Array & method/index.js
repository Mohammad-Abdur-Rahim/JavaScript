// Array sum and average question solve
let  marks =[85,97,44,37,76,60];
let sum =0;
const item = marks.length;
for(let mark of marks){
    sum+=mark;
    
}
const avg = sum / item
console.log("Total Sum : ",sum);
console.log(`Average marks of the class : ${avg}`);