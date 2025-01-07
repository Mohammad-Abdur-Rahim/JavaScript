// **** Module 33 API Start ****
const user ={
    id:1,name: 'John',job:'developer'
};
console.log(user);
// stringify use ("" Cotation convert). and (parse convert object)
const stringify = JSON.stringify(user);
console.log(stringify);
const parseObj = JSON.parse(stringify);
console.log(parseObj);

