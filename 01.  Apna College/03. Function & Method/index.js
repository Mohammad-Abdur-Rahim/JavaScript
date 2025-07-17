// function countVowel(name) {
//   let count = 0;
//   for (let data of name) {
//     if (
//       data === "a" ||
//       data === "e" ||
//       data === "i" ||
//       data === "o" ||
//       data === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const output = countVowel("rahim");
// console.log(`Vowel Number Is : ${output}`);

const countVowel=(str)=>{
   let count = 0;
  for (let data of str) {
    if (
      data === "a" ||
      data === "e" ||
      data === "i" ||
      data === "o" ||
      data === "u"
    ) {
      count++;
    }
  }
  return count;
}
const output = countVowel("rahim");
console.log(`Vowel Number Is : ${output}`);