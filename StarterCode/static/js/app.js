// from data.js
let tableData = data;

let dateTime = tableData.map(i => i.datetime);
let city = tableData.map(i => i.city);
let state = tableData.map(i => i.state);
let country = tableData.map(i => i.country);
let shape = tableData.map(i => i.shape);
let time = tableData.map(i => i.durationMinutes);
let comments = tableData.map(i => i.comments)

//log data to test code
console.log(shape)