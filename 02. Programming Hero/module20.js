// String Reverse ----

const letters ="Bangladesh";
  //1 way 
// let reverse ='';
// for(const letter of letters) {
//     reverse = letter+reverse;
// }
// console.log(reverse);

// 2d way 
let reverse ='';
for(let i=0; i<letters.length; i++) {
    const letter = letters[i];
    reverse = letter+reverse;
}
console.log(reverse);
