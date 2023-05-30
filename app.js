"use strict";
var id = 0;

function generateId() {
return ++id;
}

//Constructor
function Food (foodId,foodName,type,price){
    this.foodId=foodId
    this.foodName=foodName
    this.type=type
    this.price=price
};
//calculate Price
function genrateRandom(min, mix ){
    return Math.floor(Math.random()*(max - min + 1 )+ min)
};

Food.prototype.calaulatePrice = function (main,max){
this.price = genrateRandom(min,max);
console.log(this.price)
};

