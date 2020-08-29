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

// Click the "FilterTable" button
var clickFilter = d3.select("#filter-btn");

//Click event of datetime filter
clickFilter.on("click", function() {
    // Remove existing table
    d3.select("tbody").html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // assign the value from the input to variable for each filter
    var selectedDate = d3.select("#datetime").property("value");
    var selectedCity = d3.select("#city").property("value").toLowerCase();
    var selectedState = d3.select("#state").property("value").toLowerCase();
    var selectedCountry = d3.select("#country").property("value").toLowerCase();
    var selectedShape = d3.select("#shape").property("value").toLowerCase();


    // which filter to use using if conditions 
    var filteredData = tableData.filter(col => 
        col.datetime === selectedDate ||
        col.city === selectedCity ||
        col.state === selectedState ||
        col.country === selectedCountry ||
        col.state === selectedShape);

/*    
    if (selectedDate) {
        filteredData = tableData.filter(col => col.datetime === selectedDate);
        }
    if (selectedCity) {
        filteredData = tableData.filter(col => col.city === selectedCity);
        }
    if (selectedState) {
        filteredData = tableData.filter(col => col.state === selectedState);
        }
    if (selectedCountry) {
        filteredData = tableData.filter(col => col.country === selectedCountry);
        }
    if (selectedShape) {
        filteredData = tableData.filter(col => col.shape === selectedShape);
        }
*/

    filteredData.forEach((item) => {
        var row = tbody.append('tr');
        
        Object.entries(item).forEach(([key, value]) => {
        var tData = row.append('td');
        tData.text(value);
        });
    });
});
