// Q-03 company store 
let companies =["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(`1. Remove the first company : ${companies}`)
companies.splice(1,1,"ola");
console.log(`2. Remove Uber Add ola : ${companies}`)
companies.push("Amazon");
console.log(`3. Add Amazon : ${companies}`);