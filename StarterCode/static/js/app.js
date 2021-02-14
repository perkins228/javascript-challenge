// from data.js
let tableData = data;

let dateTime = tableData.map(i => i.datetime);
let city = tableData.map(i => i.city);
let state = tableData.map(i => i.state);
let country = tableData.map(i => i.country);
let shape = tableData.map(i => i.shape);
let time = tableData.map(i => i.durationMinutes);
let comments = tableData.map(i => i.comments);

d3.select('#filter-btn').on('click', insertTable);
d3.select('form').on('submit', insertTable)


function insertTable() {
    d3.event.preventDefault();
    let submitDate = d3.select('#datetime').node().value;
    console.log(submitDate)
}
