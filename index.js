let welEl =document.getElementById("wel-el");
welEl.textContent = ("Welcome to que management system");

let count = 0;
let countEl = document.getElementById("count-el")
const increment = () => {
    count += 1;
    countEl.textContent = count;
}

let saveEL = document.getElementById("save-el");
const save = () =>{
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    count = 0
}