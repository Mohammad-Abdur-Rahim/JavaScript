let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = true;

modeBtn.addEventListener("click", () => {
  currMode = !currMode;
  body.classList.toggle("light", currMode);
  body.classList.toggle("dark", !currMode);
  console.log(currMode ? "light" : "dark");
});
