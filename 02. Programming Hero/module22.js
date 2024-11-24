// Calculate the average number of array odd number length

function arrayOddAverage(numberOfArray) {
    const oddNumber = [];
    for (const number of numberOfArray) {
        if (number % 2 === 1) {
            oddNumber.push(number);
        }
    }
    // console.log(oddNumber);
    let sum =0;
    for(const number of oddNumber) {
        sum += number;
    }
    return sum/oddNumber.length;  
}
const numbers = [22, 33, 45, 356, 566, 33, 55, 51];
const output = arrayOddAverage(numbers);
console.log("Average Odd numbers is :", output);
