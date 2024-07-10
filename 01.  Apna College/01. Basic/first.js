// JavaScript  -----------  Loops & String use ...  ------------------------
//For in loops use only (String,Array)****
const student = {
    name: "md",
    id: 221,
    age: 22,
    cgpa: 3.19,
    isPass: true,
};
for (let i in student){
    console.log("key:",i,student[i]);
}