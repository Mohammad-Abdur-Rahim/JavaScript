document.getElementById('cashMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    //step: 2
    const cashOutMoney = getInputValueById('amountNumberCashOut');
    const pinNumber = getInputValueById('pinNumberCashOut');
     // Validation
     if(isNaN(cashOutMoney)){
        alert('Please enter valid amount');
        return;
    }
   //step: 3
   if(pinNumber === 2222){
    const oldBalance =  getElementValueById('oldBalance');
    const finalBalance = oldBalance - cashOutMoney;
    document.getElementById('oldBalance').innerText=finalBalance;
    //add to transaction History with function
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `<h4 class="text-2xl font-bold">Cash Out </h4>
    <p>${cashOutMoney} withdraw. New Balance ${finalBalance}</p>`
    document.getElementById('transactionContainer').appendChild(div);

   }
   else{
    alert('Wrong PIN CASHOUT');
   }

});