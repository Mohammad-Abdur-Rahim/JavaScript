
document.getElementById('ul_Container').addEventListener('click', function(){
    console.log('Ul clicked')
});
document.getElementById('sec_container').addEventListener('click', function(){
    console.log('Section clicked')
});

document.getElementById('two').addEventListener('click', function(event){
   event.stopPropagation();
   console.log('list clicked 1')
}); 
document.getElementById('two').addEventListener('click', function(event){
  
    console.log('list clicked 2')
 });
