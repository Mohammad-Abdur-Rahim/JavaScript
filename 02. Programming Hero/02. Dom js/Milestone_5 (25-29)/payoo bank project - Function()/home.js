document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // step 2
    const amountNumber = document.getElementById('amountNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    console.log(amountNumber, pinNumber);
    if (pinNumber === '36990') {
        const oldBalance = document.getElementById('oldBalance').innerText;
        console.log("Old Balance is :", oldBalance);
        // add valance and update ------------ 
        const newBalance = parseInt(oldBalance) + parseInt(amountNumber);
        console.log('Update Balance is :', newBalance);
        // final update balance ----------
        document.getElementById('oldBalance').innerText = newBalance;

    }
    else {
        alert('----Wrong Password-----')

    }

});