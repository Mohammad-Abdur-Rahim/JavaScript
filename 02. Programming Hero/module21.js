
function evenNumberOnly(numbers){
const evenNumber =[];
    for(const number of numbers){
        if(number % 2 === 0){
            evenNumber.push(number)
        }
}
return evenNumber;  

// const oddNumber =[];
//     for(const number of numbers){
//         if(number % 2 === 0){
//             oddNumber.push(number)
//         }
// }
// return oddNumber;  

}


const num = [10,21,30,41,50,9,7];
const output = evenNumberOnly(num);
console.log("output of numbers :",output);


