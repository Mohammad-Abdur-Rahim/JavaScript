// Qustion 2: Create 3 div same class name "box" Access all and add unique text---

let items = document.querySelectorAll(".box");
let idx=1;
for (item of items){
    // console.log(item);
    item.innerText =`New Unbique Item Box ${idx}`;
    idx++;
}

