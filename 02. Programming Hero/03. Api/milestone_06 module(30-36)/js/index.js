const student ={
    name : 'Md Abdur Rahim',
    age : 23,
    roll : 5915,
    result :'B+',
    isWebDeveloper : true
};
// keys and values
console.log(Object.keys(student));
console.log(Object.values(student));



console.log(Object.entries(student));  // array of array value return korbe
// delete object keys
delete student.result;
console.log(student);
//freeze object function when use no value will change 
Object.freeze(student);