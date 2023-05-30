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

var foodTable = document.getElementById("foodTable");

// Calculate Price
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Food.prototype.calculatePrice = function (min, max) {
    this.price = generateRandom(min, max);
    console.log(this.price);
};

// Render
Food.prototype.render = function () {
    let foodRow = document.createElement("tr");

    let foodIdCell = document.createElement('td');
    foodIdCell.textContent = this.foodId;
    foodRow.appendChild(foodIdCell);

    let foodNameCell = document.createElement('td');
    foodNameCell.textContent = this.foodName;
    foodRow.appendChild(foodNameCell);

    let typeCell = document.createElement('td');
    typeCell.textContent = this.type;
    foodRow.appendChild(typeCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = this.price;
    foodRow.appendChild(priceCell);

    foodTable.appendChild(foodRow);
};

let form = document.getElementById("form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    let name = event.target.foodName.value;
    let type = event.target.typeOfFood.value;
    let price = event.target.price.value;
    const foodNew = new Food(name, type, price);
    foodNew.calculatePrice(1000, 9999);
    foodNew.render();
    event.target.reset();
}





//"use strict";
// var id = 0;
// var allFood = [];

// // Constructor
// function Food(foodName, type, price) {
//     this.foodId = ++id;
//     this.foodName = foodName;
//     this.type = type;
//     this.price = price;
//     allFood.push(this);
// }
// var foodTable = document.getElementById("foodTable");

// // Calculate Price
// function generateFoodId() {
//     let min = 1000;
//     let max = 999;
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let form = document.getElementById("form")
// form.addEventListener("submit", subb)

// Food.prototype.calculatePrice = function (min, max) {
//     this.price = generateRandom(min, max);
//     console.log(this.price);
// };


// // Render
// Food.prototype.render = function () {
//     let a = document.createElement("a");
//     a.appendChild(a);

//     let foodId = document.createElement('id');
//     fid.textContent = this.id;
//     a.appendChild(fid);

//     let foodName = document.createElement('foodName')
//     fName.textContent = this.foodName
//     a.appendChild(fName)

//     let type = document.createElement('type')
//     type.textContent = this.type
//     a.appendChild(type)

//     let price = document.createElement("price")
//     parseInt.textContent = this.price
//     a.appendChild(price)


// }




// function subb(event) {
//     event.preventDefault();
//     let name = event.target.foodName.value;
//     let type = event.target.typeOfFood.value;
//     let price = event.target.price.value;
//     const foodNew = new Food(name, type, price);
//     foodNew.calculatePrice(1000, 9999);
//     foodNew.render();
//     event.target.reset();
// }
