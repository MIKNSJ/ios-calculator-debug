var num = "0";
var input = "";
var enableDecimal = false;
var enableAbsoluteZero = false;
var enableOperator = false;
var keepResult = false;

function clickedButton(key) {
    var output = document.getElementById("calc_output_text");
    var key_clear = document.getElementById("key_clear");

    if (key == key_clear) {
        num = "0";
        input = "";
        output.innerText = "0";
        key_clear.innerText = "AC";
        enableDecimal = false;
        enableAbsoluteZero = false;
        enableOperator = false;
        keepResult = false;
    }
    
    if (key.classList.contains("number")) {
        if (num.length == 1 && num[0] == "0") {
            num = "";
        }

        //num+=key.innerText;
        num = num.concat(key.innerText);
        output.innerText = num;

        if (enableAbsoluteZero) {
            var textToInt = Number(num);
            textToInt*=-1;
            num = textToInt.toString();
            output.innerText = num;
            enableAbsoluteZero = false;
        }

        enableOperator = false;

        if (num.length == 1 && num[0] == "0") {
            key_clear.innerText = "AC";
        } else {
            key_clear.innerText = "C";
        }
    }
}
