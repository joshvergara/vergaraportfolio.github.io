"use strict";

function hasdata(element) {
    //make sure there is data in this element
    if (element.value == "") {
        return false;
    }
    return true;
}

function nodata(element) {
    //make sure there is nothing entered in this element
    if (element.value !== "") {
        window.alert("fill in one box")
        return false;
    }
    return true;
}

function celToFar() {
    
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    if (hasdata(celsius) == true && nodata(fahrenheit) == true) { 
        var cel = Number(celsius.value);
        var conversion = cel * 9/5 + 32;
        document.getElementById("answer").innerHTML = cel + " degrees Celsius is " + conversion + " degrees Fahrenheit";
    }
}

function farToCel() {
    
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    if (hasdata(fahrenheit) == true && nodata(celsius) == true) { 
        var far = Number(fahrenheit.value);
        var conversion = (far - 32) * 5/9 ;
        document.getElementById("answer").innerHTML = far + " degrees Fahrenheit is " + conversion + " degrees Celsius";
    }
}

function reset() {
    //clear the elements on the page
    document.getElementById("celsius").value = " ";
    document.getElementById("fahrenheit").value = " ";
    document.getElementById("answer").innerHTML = " ";
}