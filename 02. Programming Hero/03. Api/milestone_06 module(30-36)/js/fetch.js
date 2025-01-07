// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function function1(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> response.json())
    .then(data => console.log(data))
}
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    console.log(data)
}