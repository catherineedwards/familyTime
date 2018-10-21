window.onload = function familyTime() {
  setInterval(updateNow, 1000);

  // call all time functions
  setInterval(wlgTime, 1000);
  setInterval(bneTime, 1000);
  setInterval(cbrTime, 1000);
  setInterval(sfoTime, 1000);
};
var now;
var utcTime;
var nzOffset = 13 * 3600000;
var bneOffset = 10 * 3600000;
var cbrOffset = 11 * 3600000;
var sfoOffset = -7 * 3600000;

// sets our variable from which we can calculate timezone offsets

function updateNow() {
  now = new Date();
  utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  // represents our local time in UTC
}

// use this for representing Now in other timezones

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
  var bneTimeNow = new Date(0);
  bneTimeNow.setUTCMilliseconds(utcTime.getTime() + bneOffset);
  console.log(utcTime.getTime() + bneOffset);

  var h = bneTimeNow.getHours();
  var m = bneTimeNow.getMinutes();
  var s = bneTimeNow.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("bneTime").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("bneDate").innerHTML =
    days[bneTimeNow.getDay()] +
    " " +
    bneTimeNow.getDate() +
    " " +
    months[bneTimeNow.getMonth()] +
    " " +
    now.getFullYear();

  return;
}

function cbrTime() {
  var cbrTimeNow = new Date(0);
  cbrTimeNow.setUTCMilliseconds(utcTime.getTime() + cbrOffset);
  console.log(utcTime.getTime() + cbrOffset);

  var h = cbrTimeNow.getHours();
  var m = cbrTimeNow.getMinutes();
  var s = cbrTimeNow.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("cbrTime").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("cbrDate").innerHTML =
    days[cbrTimeNow.getDay()] +
    " " +
    cbrTimeNow.getDate() +
    " " +
    months[cbrTimeNow.getMonth()] +
    " " +
    now.getFullYear();

  return;
}

function sfoTime() {
  var sfoTimeNow = new Date(0);
  sfoTimeNow.setUTCMilliseconds(utcTime.getTime() + sfoOffset);
  console.log(utcTime.getTime() + sfoOffset);

  var h = sfoTimeNow.getHours();
  var m = sfoTimeNow.getMinutes();
  var s = sfoTimeNow.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("sfoTime").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("sfoDate").innerHTML =
    days[sfoTimeNow.getDay()] +
    " " +
    sfoTimeNow.getDate() +
    " " +
    months[sfoTimeNow.getMonth()] +
    " " +
    now.getFullYear();

  return;
}
