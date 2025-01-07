
// function post(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayUserPost(data))
// }

const post =async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    data =displayUserPost(data);
}

function displayUserPost(data){
    const postContainer =document.getElementById('post_container');
 for(const post of data){
 const div = document.createElement('div');
 div.innerHTML=`
    <h4 class="text-4xl">User :${post.id}</h4>
    <h5 class="text-orange-300 font-bold">Post :${post.title}</h5>
    <p>Description :${post.body}</p>

 `;
 
 
 postContainer.appendChild(div);
 }
}