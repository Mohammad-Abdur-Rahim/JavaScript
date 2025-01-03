function getInputValueById(id){
    const inputElement = document.getElementById(id).value;
    const inputValue = parseFloat(inputElement);
    return inputValue;
};
function getElementValueById (id){
    const inputElement = document.getElementById(id).innerText;
    const finalValue = parseFloat(inputElement);
    return finalValue;
}

//Toggle button addMoney-----
function addMoneyTogle(id){
    //hide all section
    document.getElementById('addMoneyConatiner').classList.add('hidden');
    document.getElementById('cashOutConatiner').classList.add('hidden');
    document.getElementById('transactionContainer').classList.add('hidden');
    //show the section
    document.getElementById(id).classList.remove('hidden');

 
}