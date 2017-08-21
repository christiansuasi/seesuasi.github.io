
//nowDate displays current date
var nowDate = new Date().toISOString();
document.getElementById("nowDateString").innerHTML = nowDate.substring(0, nowDate.length-14);

//nextDate displays date of next adventure
var nextDate = new Date("2017-09-01").toISOString();
document.getElementById("nextDateString").innerHTML = nextDate.substring(0, nextDate.length-14);