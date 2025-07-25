const employee= {
    name : "Rakib Khan",
    age : 24,
    isGood : true,
    salary : 34000,
    calTax(){
        console.log("Tax rate is 10 %");
    },

};
const  sakil = {
    age: 22,
    salary : 50000,
};
//Prototype set
sakil.__proto__ =employee;