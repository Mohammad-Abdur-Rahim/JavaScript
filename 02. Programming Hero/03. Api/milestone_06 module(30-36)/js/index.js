const student ={
    name : 'Md  Abdur Rahim',
    age : 23,
    roll : 5915,
    result :'B+',
    isWebDeveloper : true
};
//object Destructuring 
const {roll,age}=student;
// const {age:boyose}=student;  different name use kore Destructuring

// console.log(student.roll);
console.log(roll);



//ARRAY Destructuring -----------------------
const number =[33,44];
const [a,b]=number;