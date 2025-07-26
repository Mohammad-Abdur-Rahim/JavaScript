// call back Fn passed arg to another function

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallBack){
    sumcallBack(a,b);
}
calculator(10,20,sum);