//console.log("app.js loaded");
//console.log(data);

// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the table
var table = d3.select("ufo_table");

table.attr("class", "table table-striped");

var tbody = d3.select("tbody");

// create UFO table function

function ufo_table (data) {
    // select the table
    var table = d3.select("ufo_table");

    table.attr("class", "table table-striped");

    var tbody = d3.select("tbody");
    tbody.html("");

    // loop through UFO Data
    data.forEach(function(data) {
    
    //verify we're working with correct data
        //console.log(data);
    // add new row for each UFO
        var row = tbody.append("tr");

        Object.entries(data).forEach(function([key, value]){
            //console.log(`key = ${key}, value = ${value}`);
            var cell = row.append("td");
            cell.text(value);
        });

    });
}

ufo_table(tableData);

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.selectAll("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.selectAll("#datetime");

// This function is triggered when the button is clicked
    function handleClick() {
        console.log("A button was clicked!");

   // We can use d3 to see the object that dispatched the event
   console.log(d3.event.target);
 }

// // We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
// function to filter data - need table as a function - clear table of all other info when filtering - create another table

