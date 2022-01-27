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
/*
let score =  0
function add(){
    score += 3;
    return score;
}

function sub(){
    score -=1;
    return score;
}


let user = add()
user = sub()
console.log(user)
*/
let num_1 = 12
let num_2 = 3
let result = document.getElementById("rsl-el")
const add = ()=>{
        result.textContent = 0
        result.textContent += num_1 + num_2;
}
const sub = ()=>{
    result.textContent = 0
    result.textContent = num_1 - num_2;
}
const div= ()=>{
    result.textContent = 0
    result.textContent = num_1 / num_2;
}
const mul = ()=>{
    result.textContent = 0
    result.textContent = num_1  * num_2;
}