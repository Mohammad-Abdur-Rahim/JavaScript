// JavaScript simple coding problem 

// Feet To Inch Formula 

function feetToInch(inch){
    const feet = parseInt( inch / 12) ;
    const inchRemaining = inch % 12 ;
    const result = feet + "Feet" + inchRemaining + "Inch" ;
    return result;

};
const inch = 125;
const output = feetToInch(inch);
console.log(output);

// easy method -------------------------------
// function feetToInch(inch){
//     const feet = inch /12 ;
//     return feet.toFixed(2);
// };
// const inch = 125;
// const output = feetToInch(inch);
// console.log(output);


