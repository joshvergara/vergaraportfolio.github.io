"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Josh Vergara
   Date: 11/16/19  
   
   Filename: tc_cart.js
	
*/

//create a variable for the order total with a base value of 0 
var orderTotal = 0;

//start the HTML code for the shopping cart table
var cartHTML = "<table> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//runs a for loop to create a line of the shopping cart table for every value of i
for (var i = 0; i < item.length; i++ ) {
    //adds HTML code for the item image
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    
    //adds HTML code for the item description price and quantity
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
    
    //calculate the cost of the item, taking into account the quantity purchased
    var itemCost = itemPrice[i] * itemQty[i];
    
    //add HTML code for the total item cost
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    
    //add the cost of the item to the orderTotal variable
    orderTotal += itemCost;
}

//add the remaining HTML code to complete the shopping cart table
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

//apply the cartHTML value to the inner HTML of the div element with id cart
document.getElementById("cart").innerHTML = cartHTML;