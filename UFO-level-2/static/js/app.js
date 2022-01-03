//console.log("app.js loaded");
//console.log(data);

// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the table
var table = d3.select("ufo_table");

table.attr("class", "table table-striped");

var tbody = d3.select("tbody");

// loop through UFO Data
data.forEach(function(data) {
    
    //verify we're working with correct data
    console.log(data);
    // add new row for each UFO
    var row = tbody.append("tr");

    Object.entries(data).forEach(function([key, value]){
        console.log(`key = ${key}, value = ${value}`);
    });

});