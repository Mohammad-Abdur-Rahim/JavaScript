document.getElementById('addMoneyBtn').addEventListener('click',function (e){
    e.preventDefault();
    // step : 2
    const addMoney = getInputValueById('amountNumber');
    const pinNumber = getInputValueById('pinNumber');
       // step : 3
    if(pinNumber == 36990){
      const oldBalance =  getElementValueById('oldBalance');
     const finalValance =oldBalance + addMoney;
     document.getElementById('oldBalance').innerText=finalValance;

    }
    else{
        alert('Wrong Passwords')
    }
    

});
