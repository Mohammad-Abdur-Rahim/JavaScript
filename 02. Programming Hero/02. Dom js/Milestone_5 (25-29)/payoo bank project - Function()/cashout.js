document.getElementById('cashMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    //step: 2
    const cashOutMoney = getInputValueById('amountNumberCashOut');
    const pinNumber = getInputValueById('pinNumber');
   //step: 3
   if(pinNumber == 36990){
    const oldBalance =  getElementValueById('oldBalance');
    const finalBalance = oldBalance - cashOutMoney;
    document.getElementById('oldBalance').innerText=finalBalance;

   }
   else{
    alert('Wrong PIN Number');
   }

});