$(function() {
  var d =new Date();
  var curmonth = d.getMonth()+1;
  var curDate = d.getFullYear()+"-"+curmonth+"-"+d.getDate();
  //alert(curDate);
  $(".this-day[data-date="+curDate+"]").addClass("table-success");


  
});

var d =new Date();
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var ramdanDays = [
  "01", "02", "03",
  "04", "05", "06", "07",
  "08", "09", "10",
  "11", "12", "13", "14", "15", "16", "17",
  "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27",
  "28", "29", "30"
];
var curmonth = d.getMonth();
var days = d.getDate()-1;
var curDate = d.getDate()+"-"+monthNames[curmonth]+"-"+d.getFullYear();
var rdays = ramdanDays[days+17];


swal({
  title: "Ramadan Mubarak!",
  text: "Today is " + curDate + " & "+ rdays + " Ramadan",
  icon: "success",
  button: "Thanks!",
});
document.addEventListener('contextmenu', event => event.preventDefault());

