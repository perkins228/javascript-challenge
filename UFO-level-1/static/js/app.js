// from data.js
let tableData = data;

function insertTable() {
    d3.event.preventDefault();
    clearTable();
    let submitDate = d3.select('#datetime').node().value;
    d3.select('#datetime').node().value = null;
    let table = d3.select('#ufo-table')
    let tbody = table.select('tbody');
    let trow
    let filteredData = tableData.filter(i => i.datetime === submitDate)
    let dateTime = filteredData.map(i => i.datetime);
    let city = filteredData.map(i => i.city);
    let state = filteredData.map(i => i.state);
    let country = filteredData.map(i => i.country);
    let shape = filteredData.map(i => i.shape);
    let time = filteredData.map(i => i.durationMinutes);
    let comments = filteredData.map(i => i.comments);
    for (let i = 0; i < filteredData.length; i++){
        trow = tbody.append("tr");
        trow.append("td").text(dateTime[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(time[i]);
        trow.append("td").text(comments[i]);

    }

}

function clearTable() {
    tbody.remove();
}


d3.select('#filter-btn').on('click', insertTable);
d3.select('form').on('submit', insertTable)