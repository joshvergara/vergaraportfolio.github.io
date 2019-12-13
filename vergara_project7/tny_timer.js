"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Josh Vergara
   Date: 10/25/19  

*/
showClock();
setInterval("showClock()", 1000);

function showClock() {
    
    /* Store the current date and time */
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();
    
    /* Display the current date and time */
    document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
    
    /* Calculate the days until July 4th */
    var j4Date = nextJuly4(thisDay);
    j4Date.setHours(21);
    var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
    
    /* Calculate the hours left in the current day */
    var hrs = (days - Math.floor(days)) * 24;

    /* Calculate the minutes and seconds left in the current hour */
    var mins = (hrs - Math.floor(hrs)) * 60;
    var secs = (mins - Math.floor(mins)) * 60;
    
    /* Display the time left until the 4th of July */
    document.getElementById("dLeft").textContent = Math.floor(days);
    document.getElementById("hLeft").textContent = Math.floor(hrs);
    document.getElementById("mLeft").textContent = Math.floor(mins);
    document.getElementById("sLeft").textContent = Math.floor(secs);


}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}