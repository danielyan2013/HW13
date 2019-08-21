// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")


function displayData(data) {
   tbody.text("")
   data.forEach(function(sighting){
       new_tr = tbody.append("tr")
       Object.entries(sighting).forEach(function([key, value]){
           new_td = new_tr.append("td").text(value)
       })
   })
}

displayData(tableData)

var dateInput = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInput.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime === dateInput.property("value"))
    displayData(new_table);
}


dateInput.on("change", clickSelect)