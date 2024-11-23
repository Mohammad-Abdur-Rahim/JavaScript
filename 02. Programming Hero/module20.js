// Object study ------------------------------

const persons ={
    name : "Md Abdur Rahim",
    age : 23,
    profession : 'Web Developer',
    salary : 35000,
    married : false
};
// loop access the object 
for (const person in persons){
    console.log(person);
    console.log(persons[person]);
}

