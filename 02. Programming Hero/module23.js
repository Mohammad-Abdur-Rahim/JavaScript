

function maxNumber(num1, num2, num3) {
    if(num1>num2 && num1>num3){
        return "Num 1 is Big";
    
    }
    else if(num2>num1 && num2>num3){
        return "Num 2 is Big";
    
    
    }
    else{
      return "Num 3 is Big";
    
    }
}
const num1 =10;
const num2 =90;
const num3 =890;
const output = maxNumber(num1, num2, num3);
console.log(output);