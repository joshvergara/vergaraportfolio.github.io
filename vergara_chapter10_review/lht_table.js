"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Josh Vergara
   Date: 11/16/19  

	
*/

//set the current date
var thisDay = new Date("August 30, 2018");
//create the starting HTML code for the event table
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";
//calculate the date 14 days after the current date 
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);
//for loop to create the event table 
for (var i = 0; i < eventDates.length; i++) {
    //create a variable with the date of the ith value of the eventDates array
    var eventDate = new Date(eventDates[i]);
    
    //create a variable with the day of the eventDate variable
    var eventDay = eventDate.toDateString();
    
    // create a variable with the time of the eventDate variable
    var eventTime = eventDate.toLocaleTimeString();
    
    //test if the date falls within the designated window, then add a row of the table
    if ((thisDay <= eventDate) && (eventDate <= endDate)) {
        tableHTML += "<tr> <td>" + eventDay + " @ " + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
    }
}

//add the closing table tag to the HTML code for the table
tableHTML += "</table>"

//write the HTML code in the tableHTML variable into the div element with the id eventList
document.getElementById("eventList").innerHTML = tableHTML;