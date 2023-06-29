const rands = document.querySelector("#rands");
const dollars = document.querySelector("#dollars");
const answer = document.querySelector(".answer");
const button = document.querySelector("#calculate");
let empty = [];

button.addEventListener("click", () => {
  answer.innerHTML = "";
  if (rands.value == "") {
    let methodForRands = dollars.value * 19.51;
    console.log("This is to calculate rands");
    answer.innerHTML += "R" + methodForRands;
    dollars.value = "";
  } 

  if (dollars.value == "") {
    let methodForDollars = rands.value * 0.051;
    console.log("This is to calculate dollars");
    answer.innerHTML += "$" + methodForDollars;
  }
  if(dollars.value == '' && rands.value == ''){
    alert('Please enter a vlue')
    answer.innerHTML = ''
  }
});
