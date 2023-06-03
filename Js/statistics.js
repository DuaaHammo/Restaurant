"use strict";

var data = [];

function getData() {
    var dataString = localStorage.getItem("food");
    data = JSON.parse(dataString);
    if (data != null) {
        for (var i = 0; i < data.length; i++) {
            render(data[i]);
        }
    }
}

var table = document.getElementById("table");

function render(obj) {
    var row = document.createElement('tr');

    var idnum = document.createElement('td');
    idnum.textContent = obj.foodId;
    row.appendChild(idnum);

    var name = document.createElement('td');
    name.textContent = obj.foodName;
    row.appendChild(name);

    var typee = document.createElement('td');
    typee.textContent = obj.type;
    row.appendChild(typee);

    var pricee = document.createElement('td');
    pricee.textContent = obj.price;
    row.appendChild(pricee);

    table.appendChild(row);
}

getData();
