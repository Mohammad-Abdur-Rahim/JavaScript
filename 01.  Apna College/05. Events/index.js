let btn = document.querySelector("button");
btn.onclick=(event)=>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);
}