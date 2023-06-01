"use strict";

var id = 0;
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

// Calculate Price
function generateFoodPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

Food.prototype.calculatePrice = function (min, max) {
    this.price = generateFoodPrice(min, max);
    console.log(this.price);
    
};

// Render
Food.prototype.render = function () {
    let row = foodTable.insertRow();
    let idCell = row.insertCell();
    let nameCell = row.insertCell();
    let typeCell = row.insertCell();
    let priceCell = row.insertCell();

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
    let price = event.target.price.value;
    const foodNew = new Food(name, type, price);
    foodNew.calculatePrice(1000, 9999);
    foodNew.render();
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", submit);
});
