//  JavaScript ----Array ----
//practice question 1-- array mark of student . find average mark of students

let marks =[85,97,44,37,76,60];
let len = marks.length
let sum=0;
for (mark of marks){
sum += mark;
}
console.log(`Sum of Array : ${sum}`);
let average = sum/len;
console.log(`Average of Array : ${average}`);