let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

// Game Section -------------
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

let turn0 = true; //2 Players (x/0)
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box Clicked");
    if(turn0){
      box.innerText = "0";
      turn0 = false;
    }else{
      box.innerText ="X";
      turn0 =true;
    }
    box.disabled =true;
  });
});
