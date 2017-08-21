



//nowDate displays current date
var presentDate = new Date().toISOString();
document.getElementById("presentDateString").innerHTML = presentDate.substring(0, presentDate.length-14);

//nowDate displays current date
var currentDate = new Date("2000-09-04").toISOString();
document.getElementById("currentDateString").innerHTML = currentDate.substring(0, currentDate.length-14);

//nextDate displays date of next adventure
var nextDate = new Date("2017-09-01").toISOString();
document.getElementById("nextDateString").innerHTML = nextDate.substring(0, nextDate.length-14);