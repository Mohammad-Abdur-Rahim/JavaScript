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
