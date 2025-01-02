// ------------ most case use 1st ---------------
function makeRed(){
    document.body.style.backgroundColor ='red';
}
// ---- 2nd
const blue_button = document.getElementById('blue_button');
blue_button.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor ='Blue';
}
// ---- 3rd
const orange_button = document.getElementById('orange_button');
orange_button.onclick = function bg_orange(){
    document.body.style.backgroundColor ='orange';
}
// ---- 4th
const pink_button = document.getElementById('pink_button');
pink_button.addEventListener('click',function bg_pink(){
    document.body.style.backgroundColor ='pink';
})
// ---- 5th  important *******
document.getElementById('black_button').addEventListener('click',function (){
    document.body.style.backgroundColor ='black';
})