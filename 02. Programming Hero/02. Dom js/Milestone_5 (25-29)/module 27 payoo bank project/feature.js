// Toggle button system add/cahout ------------------------ start
document.getElementById('buttonShowCashout').addEventListener('click', function () {
    console.log('Cashout clicked');
    document.getElementById('cashOutConatiner').classList.remove('hidden');
    document.getElementById('addMoneyConatiner').classList.add('hidden');
});

document.getElementById('buttonShowAddMoney').addEventListener('click', function () {
    console.log('add Money clicked');
    document.getElementById('cashOutConatiner').classList.add('hidden');
    document.getElementById('addMoneyConatiner').classList.remove('hidden');
});
// Toggle button system add/cahout ------------------------ end

