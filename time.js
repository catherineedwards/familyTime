window.onload = function baseTime() {
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
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("localTime").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("localDate").innerHTML = months[now.getMonth()];
  var t = setTimeout(baseTime, 500);

  var utc_offset = now.getTimezoneOffset();
  // console.log("UTC offset:" + utc_offset);
  //now.setMinutes(now.getMinutes() + utc_offset);
  console.log("UTC: " + now);
  // includes UTC time into now object

  var sfTime_offset = 7 * 60;
  var sfTime = now.setMinutes(now.getMinutes() - sfTime_offset);
  console.log("San Francisco: " + sfTime);

  // San Francisco: UTC-7 hours
  // Brisbane: UTC+10 hours
  // ACT/NSW: UTC+11 hours
  // NZ: UTC+13 hours
};

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
