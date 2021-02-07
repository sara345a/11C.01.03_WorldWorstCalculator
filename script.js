"use strict";

//SETTING UP
window.addEventListener("load", start);

//make 'Clear' clickable and call next function 'clickCalculate'
function start() {
    console.log("start");

document.querySelector("#clear").addEventListener("click", clear);   
document.querySelector("#calculate").addEventListener("click", calc);
}
 


//READ NUMBERS
function topInput(){
console.log("topInput");

//read first number and convert from string with 'parseFloat' to a number.
const numberOne = parseFloat(document.querySelector("#value1").value);
return numberOne
}
    

function bottomInput(){
console.log("bottomInput");
    
//read second number and convert from string with 'parseFloat' to a number.
const numberTwo = parseFloat(document.querySelector("#value2").value);
return numberTwo
}
    

//READ CALCULATING
function calc(){
console.log("calc");
//collect our numbers
const inputOne = topInput();
const inputTwo = bottomInput();

const opr = document.querySelector("#operator").value;

//read operator
if (opr == "add"){
calAdd(inputOne, inputTwo);
}
else if (opr == "sub"){
    calSub(inputOne, inputTwo)
}
else if (opr == "mul"){
    calMul(inputOne, inputTwo)
}
else if (opr == "div"){
    calDiv(inputOne, inputTwo)
}
}

//Add numbers from function'calc'

function calAdd(numberOne, numberTwo){
const result = numberOne + numberTwo;
console.log(result);

showResults(result);
}

function calSub(numberOne, numberTwo){
    const result = numberOne - numberTwo;
console.log(result);

showResults(result);
}

function calMul(numberOne, numberTwo){
    const result = numberOne * numberTwo;
console.log(result);

showResults(result);
}

function calDiv(numberOne, numberTwo){
    const result = numberOne / numberTwo;
console.log(result);

showResults(result);
}


//Check if result should be rounded
function checkIfRound(){
//check if 'do round'-box is checked
const checkBox = document.querySelector("#doround").checked;
return checkBox;

}


function showResults(result){
    console.log("showResults");
    if(checkIfRound() == true){
        const decimals = document.querySelector("#decimals").value;
        const intDecimals = parseInt(decimals);
        result = result.toFixed(intDecimals);
    }

//CREATE ELEMENT TO PUT IN 'LI'
let listEl = document.createElement("li");
let createString = document.createTextNode(result.toString());

listEl.appendChild(createString);
document.querySelector("#results").appendChild(listEl);
document.querySelector("#results").scrollTo(0, 10000000);

}

//MAKE IT POSSIBLE TO CLEAR THE CALCULATOR
function clear() {
    document.querySelector("#results").innerHTML = "";
}