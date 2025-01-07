
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
   const ul =document.getElementById('uesrList');
   for(const users of data){
    console.log(users);
    const li = document.createElement('li');
    li.innerText = users.name;
    ul.appendChild(li);
   }
}