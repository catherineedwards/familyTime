window.onload = function wlgTime() {
  //prints current time as our base
  var now = new Date();

  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

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
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("wlgTime").innerHTML =
    h +
    ":" +
    m +
    ":"
    + s;
  document.getElementById("wlgDate").innerHTML =
    days[now.getDay()] +
    " " +
    now.getDate() +
    " " +
    months[now.getMonth()] +
    " " +
    now.getFullYear();
  var t = setTimeout(wlgTime, 500);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
};

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

  // San Francisco: UTC-7 hours
  // Brisbane: UTC+10 hours
  // ACT/NSW: UTC+11 hours
  // NZ: UTC+13 hours
};
*/
