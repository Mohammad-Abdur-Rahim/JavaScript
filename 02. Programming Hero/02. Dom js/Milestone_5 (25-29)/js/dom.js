document.getElementById('update').addEventListener('click', function(){
    const input_Text = document.getElementById('input_Text')
    const input_value = input_Text.value;

    const defaultChange = document.getElementById('default');
    defaultChange.innerText = input_value;
    // important  to clear input field text
    input_Text.value='';

    
})