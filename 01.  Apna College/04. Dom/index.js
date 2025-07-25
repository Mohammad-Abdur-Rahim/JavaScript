// Q1: create new button . give it text click menubar, bg of red text color wgite


let el = document.createElement("button");
el.innerText = "Click Me!";
el.style.backgroundColor ="red";
el.style.color ="White";

document.querySelector("body").prepend(el);


// let test = document.querySelector("div");
// test.append(el)