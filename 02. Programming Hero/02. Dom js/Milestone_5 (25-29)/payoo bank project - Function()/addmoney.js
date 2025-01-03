document.getElementById('addMoneyBtn').addEventListener('click',function (e){
    e.preventDefault();
    // step : 2
    const addMoney = getInputValueById('amountNumber');
    const pinNumber = getInputValueById('pinNumber');
    // Validation
    if(isNaN(addMoney)){
        alert('Please enter valid amount');
        return;
    }
       // step : 3
    if(pinNumber === 1111){
      const oldBalance =  getElementValueById('oldBalance');
     const finalValance =oldBalance + addMoney;
     document.getElementById('oldBalance').innerText=finalValance;
        //transaction history 
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney} Tk . Balance is : ${finalValance}`;
        console.log(p)
        document.getElementById('transactionContainer').appendChild(p);


    }
    else{
        alert('Wrong Passwords : Add Money')
    }
    

});
