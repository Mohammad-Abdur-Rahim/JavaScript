document.getElementById('cashMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const amountNumberCashOut = document.getElementById('amountNumberCashOut').value;
    const pinNumberCashOut = document.getElementById('pinNumberCashOut').value;
    console.log(amountNumberCashOut, pinNumberCashOut);

    if (pinNumberCashOut === '36990') {
        const oldBalance = document.getElementById('oldBalance').innerText;
        console.log("Old Balance is :", oldBalance);
        // different balance 
        const finalBalance = parseInt(oldBalance) - parseInt(amountNumberCashOut);

        document.getElementById('oldBalance').innerText = finalBalance;
    }
    else {
        alert('wrong pin')
    }


});