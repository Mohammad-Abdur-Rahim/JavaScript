let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

// Game Section -------------
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let turn0 = true; //2 Players (x/0)
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box Clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const disableBoxs =()=>{
  for(let box of boxs){
    box.disabled=true;
  }
}

let Message = document.querySelector("#msg");
const showWinner=(winner)=>{
  Message.innerText =`Winner is : ${winner}`;
  disableBoxs();
}
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};