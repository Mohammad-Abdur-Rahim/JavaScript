let btn = document.querySelector("button");

btn.addEventListener('click',()=>{
    console.log("handler 1");
});
btn.addEventListener('click',()=>{
    console.log("handler 2");
});


//best format usecase...................
const handle3 =()=>{
    console.log("handler 3");
};

btn.addEventListener('click',(handle3));
btn.removeEventListener('click',handle3);
