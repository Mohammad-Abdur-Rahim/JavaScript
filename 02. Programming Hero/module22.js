// Remove duplicate value array 
function duplicateCheck(array) {
    const uniqueArray = [];
    for (const number of array) {
        if (uniqueArray.includes(number) === false) {
            uniqueArray.push(number);
        }
    }
    return uniqueArray;

};



const numbers = [22, 33, 45, 566, 45, 50, 50, 356, 566, 33, 55, 51];
const output = duplicateCheck(numbers);
console.log("Check duplicate  :", output);
