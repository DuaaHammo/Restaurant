"use strict";

var id = 1000;
var allFood = [];
let form = document.getElementById("form");

// Constructor
function Food(foodName, type, price) {
    this.foodId = ++id;
    this.foodName = foodName;
    this.type = type;
    this.price = price;

    allFood.push(this)
}

// var foodTable = document.getElementById("table");




// console.log(this.price);

// // Render
// Food.prototype.render = function () {
//     let row = foodTable.insertRow();
//     let idnum = row.insertCell();
//     let namee = row.insertCell();
//     let typee = row.insertCell();
//     let pricee = row.insertCell();

//     idnum.textContent = this.foodId;
//     namee.textContent = this.foodName;
//     typee.textContent = this.type;
//     pricee.textContent = this.price;
// render()
// };

// Event handler
function submit(event) {
    event.preventDefault();

    let name = event.target.foodName.value;
    let type = event.target.typeOfFood.value;
    let price = parseFloat(event.target.price.value) || 0.0;
    const foodNew = new food(name, type, price);

    // foodNew.render();
    // event.target.reset();


    // newFood.render();
    saveData(allFood);

}

//Submit
form.addEventListener("submit", submit);

// document.addEventListener('DOMContentLoaded', function () {
//     let form = document.getElementById("form");
//     form.addEventListener("submit", submit);
// });

//json
function saveData(data) {
    let saveJSON = JSON.stringify(data);
    localStorage.setItem('food', saveJSON );
}

