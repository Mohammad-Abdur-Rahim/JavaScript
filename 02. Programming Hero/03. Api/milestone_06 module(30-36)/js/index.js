// Map ==> Methods  ----------
const number =[10,20,3,44,55];
function doubleIt(num){
    console.log(num);
    return num*2;
}

const output = number.map(doubleIt);
console.log(output);