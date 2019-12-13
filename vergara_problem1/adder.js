"use strict";

//window.alert("hello");
function hasdata(element) {
    //make sure there is data in this element
    if (element.value == "") {
        window.alert("missing input");
        return false;
    }
    return true;
}


//Addition
function add() {
    
    document.getElementById("symbol").innerHTML = "&nbsp;&nbsp; + &nbsp;&nbsp;"
    //create variables to make it easier to access the two textboxes
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    
    //make sure both boxes have input
    if (hasdata(num1) == true && hasdata(num2) == true) {
        var n1 = Number(num1.value);
        
        var n2 = Number(num2.value); 
        
        var sum = n1 + n2;
        document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + sum;
    }
}




//Subtraction
function subtract() {
    
    document.getElementById("symbol").innerHTML = "&nbsp;&nbsp; - &nbsp;&nbsp;" 
    //create variables to make it easier to access the two textboxes
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    
    //make sure both boxes have input
    if (hasdata(num1) == true && hasdata(num2) == true) {
        var n1 = Number(num1.value);
        
        var n2 = Number(num2.value); 
        
        var difference = n1 - n2;
        document.getElementById("answer").innerHTML = n1 + " - " + n2 + " = " + difference;
    }
}




//Multiplication
function multiply() {
    
    document.getElementById("symbol").innerHTML = "&nbsp;&nbsp; x &nbsp;&nbsp;" 
    //create variables to make it easier to access the two textboxes
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    
    //make sure both boxes have input
    if (hasdata(num1) == true && hasdata(num2) == true) {
        var n1 = Number(num1.value);
        
        var n2 = Number(num2.value); 
        
        var product = n1 * n2;
        document.getElementById("answer").innerHTML = n1 + " x " + n2 + " = " + product;
    }
}


//Division
function divide() {
    
    document.getElementById("symbol").innerHTML = "&nbsp;&nbsp; / &nbsp;&nbsp;" 
    //create variables to make it easier to access the two textboxes
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    
    //make sure both boxes have input
    if (hasdata(num1) == true && hasdata(num2) == true) {
        var n1 = Number(num1.value);
        
        var n2 = Number(num2.value); 
        
        var quotient = n1 / n2;
        document.getElementById("answer").innerHTML = n1 + " / " + n2 + " = " + quotient;
    }
}

function reset() {
    //clear the elements on the page
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer").innerHTML = "";
}
