window.onload = function familyTime() {
  setInterval(updateNow, 1000);

  // call all time functions
  setInterval(wlgTime, 1000);

  // bneTime();
  // actTime();
  // sfoTime();
};

var now;

function updateNow() {
  now = new Date();
}

// set arrays to be used by all functions
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function wlgTime() {

  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("wlgTime").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("wlgDate").innerHTML =
    days[now.getDay()] +
    " " +
    now.getDate() +
    " " +
    months[now.getMonth()] +
    " " +
    now.getFullYear();

  return;
}

function bneTime() {

}


/*
  var utc_offset = now.getTimezoneOffset();
  // console.log("UTC offset:" + utc_offset);
  //now.setMinutes(now.getMinutes() + utc_offset);
  console.log("UTC: " + now);
  // includes UTC time into now object

  

  var sfTime_offset = 7 * 60;
  var sfTime = now.setMinutes(now.getMinutes() - sfTime_offset);
  var sfDate = new Date(0);
  sfDate.setUTCSeconds(sfTime);
  console.log("San Francisco: " + sfDate);


};
*/
