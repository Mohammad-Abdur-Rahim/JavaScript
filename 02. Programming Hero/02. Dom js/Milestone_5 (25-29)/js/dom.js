const section = document.querySelectorAll('section');
// console.log(section);
for (const sec of section){

sec.style.border = '2px solid black';
sec.style.borderRadius = '5px';
sec.style.padding = '10px';
sec.style.backgroundColor='lightgray'

}

// const skillContainer =document.getElementById('skill-Container');
// skillContainer.style.backgroundColor='yellow';

const skillContainer =document.getElementById('skill-Container');
skillContainer.classList.add('text-center');