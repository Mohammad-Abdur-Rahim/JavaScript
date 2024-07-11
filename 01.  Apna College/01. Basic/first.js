//  String Question solve ------Generate username based user input------

// let userName =prompt("Enter Your Full Name");

// let userNameLength =userName.length;


// console.log(`@${userName.concat(userNameLength)}`); 
//My solve now apna college solve start

let fullName = prompt("Enter Your Full Name");
let userName = "@"+fullName+fullName.length;
console.log(userName);