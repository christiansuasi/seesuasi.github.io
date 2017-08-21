



//currentDate displays current date
var currentDate = new Date().toISOString();
document.getElementById("currentDateString").innerHTML = currentDate.substring(0, currentDate.length-14);
