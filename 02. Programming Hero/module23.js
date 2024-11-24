//Assignment 01--------
// function calculateTax(income, expense) {
//     if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
//         return "Invalid Input";
//     }
//     const Remaining = income - expense;
//     const taxCalculate = Remaining * 0.20;
//     return taxCalculate;
// }

// console.log(calculateTax(10000, 3000)); 

//Assignment 02--------

// function sendNotification(email) {
//     // Check "@"
//     if (email.indexOf('@') === -1 ) {
//         return "Invalid Email";
//     }
//     // Split the email 
//     const parts = email.split('@');
//     const username = parts[0];
//     const domainName = parts[1];
//     return username + " sent you an email from " + domainName;
// }

// // Example Usage
// console.log(sendNotification("zihad@gmail.com")); 
//Assignment 03--------


// function checkDigitsInName(input) {
//     if (typeof input !== 'string') {
//         return "Invalid Input";
//     }
//     for (const num of input) {
      
//         if (!isNaN(num)) {
//             return true; 
//         }
//     }
//     return false;
// }

// // Example Usage:
// console.log(checkDigitsInName("Raj333"));    // Output: true

// 4-------------------------
// function calculateFinalScore(input) {
//     if (typeof input !== 'object') {
//         return "Invalid Input";
//     }
//     // object Destructure 
//     const { name, testScore, schoolGrade, isFamily } = input;
//     if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFamily !== 'boolean') {
//         return "Invalid Input";
//     }
//     // test score and school grade 
//     if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
//         return "Invalid Input";
//     }
//     // final score
//     let finalScore = testScore + schoolGrade;
//     if (isFamily) {
//         finalScore += 20;
//     }
//     return finalScore >= 80;
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFamily : true  }));
// 5----------------------------
function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    if (interviewTimes.some(time => typeof time !== 'number' || time <= 0)) {
        return "Invalid Input";
    }

    let totalInterviewTime = 0;
    for (const interview of interviewTimes) {
        totalInterviewTime +=interview;
    }
    const averageTime = Math.round(totalInterviewTime / interviewTimes.length);
    if (serialNumber <= interviewTimes.length) {
        return 0; 
    }
    const peopleAhead = serialNumber - 1 - interviewTimes.length;  

    const waitingTime = peopleAhead * averageTime;
    return waitingTime;
}

// Example Usage:
console.log(waitingTime([3, 5, 7, 11, 6], 10));  // Output: 24











































































// function woodQuantity(chair,table,bed){
//     perChair = 3;
//     perTable = 10;
//     perBed = 60;
//     const chairTotalWood = chair * perChair ;
//     const tableTotalWood = table * perTable ;
//     const bedTotalWood = bed * perBed ;
//     const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
//     return totalWood;

// }
// const chair = 5;
// const table = 3;
// const bed = 2;
// const output = woodQuantity(chair,table,bed);
// console.log("Total Wood :",output);