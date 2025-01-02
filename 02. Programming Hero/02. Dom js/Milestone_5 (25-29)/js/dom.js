document.getElementById('btn').addEventListener('click',function(){
const btnclick = document.getElementById('secure_info');
btnclick.style.display = 'none';
}
);
document.getElementById('text').addEventListener('keyup',function(event){

const newText = event.target.value;
console.log(newText);
const final =document.getElementById('btn')
if(newText === 'delete'){
    final.removeAttribute('disabled');
}

});