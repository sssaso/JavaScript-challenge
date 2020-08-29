// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// load whole data into web
tableData.forEach((item) => {
    var row = tbody.append('tr');
    Object.entries(item).forEach(([key, value]) => {
        var tData = row.append('td');
        tData.text(value);
    });
});

// Select the "FilterTable" button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {
    // Remove existing table
    d3.select("tbody").html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Get the value from the input
    var dateFilter = d3.select("#datetime").property("value");
    // Filter for date
    var filteredData = tableData.filter(item2 => 
        item2.datetime === dateFilter);

    filteredData.forEach((item3) => {
    var row = tbody.append('tr');

    Object.entries(item3).forEach(([key, value]) => {
        var tData = row.append('td');
        tData.text(value);
    });
});

});
