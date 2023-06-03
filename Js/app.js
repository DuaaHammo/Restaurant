"use strict";

var id = 1000;
var allFood = [];

// Constructor
function Food(foodName, type, price) {
    this.foodId = ++id;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    allFood.push(this);
}

var foodTable = document.getElementById("table");



console.log(this.price);

// Render
Food.prototype.render = function () {
    let row = foodTable.insertRow();
    let idCell = row.insertCell();
    let nameCell = row.insertCell();
    let typeCell = row.insertCell();
    let priceCell = row.insertCell()

    idCell.textContent = this.foodId;
    nameCell.textContent = this.foodName;
    typeCell.textContent = this.type;
    priceCell.textContent = this.price;
};

// Event handler
function submit(event) {
    event.preventDefault();
    let name = event.target.foodName.value;
    let type = event.target.typeOfFood.value;
    
    let price = parseFloat(event.target.price.value) || 0.0; 
    
      const foodNew = new Food(name, type, price);
    foodNew.render();
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", submit);
});


//json