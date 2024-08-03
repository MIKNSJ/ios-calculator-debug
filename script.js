var num = "0";
var input = "";
var enableDecimal = false;
var enableAbsoluteZero = false;
var enableOperator = false;
var keepResult = false;

function clickedButton(key) {
    var output = document.getElementById("calc_output_text");
    var key_clear = document.getElementById("key_clear");
    
    num+=key.innerText;
    output.innerText = num;
}
