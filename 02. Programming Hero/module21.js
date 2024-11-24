function sumArrays(arrays){

    let sum =0;
for(const array of arrays){
console.log(array);
 sum = sum + array;
}
return sum;

}

const num = [10,20,30,40,50];
const sumArray = sumArrays(num);
console.log("sum of numbers :",sumArray);


// const numArray = [10,20,30,40,50];
// let sum=0;
// for(const array of numArray){
//     console.log("sum of numbers :",array);
//     sum+=array ;
// }
// console.log(sum);
