// step:1 set event handler
document.getElementById('login_btn').addEventListener('click', function (event) {
    // step:2 prevent default (reloading Browser)
    event.preventDefault();
    console.log('Login Clicked with input data');

    // step:3 get the user phone Number
    const PhoneNumber = document.getElementById('input_number').value;
    const PinNumber = document.getElementById('input_pin').value;

    //step:4  validation User Data --Temporary usecase login--
    if (PhoneNumber === '01995516880' && PinNumber === '36990') {
        console.log(' ------Login Successfully------');
        window.location.href = '/home.html'
    }
    else {
        alert('---- Wrong User Data. Try Again ---');
    }

});