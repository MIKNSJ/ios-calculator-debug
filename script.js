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

    if (key.id == "key_decimal" && !enableDecimal) {
        enableDecimal = true;
        //num+=key.innerText;
        num = num.concat(key.innerText);
        output.innerText = num;
        key_clear.innerText = "C";
    }

    if (key.id == "key_absolute") {
        if (num.length == 1 && num[0] == "0") {
            if (!enableAbsoluteZero) {
                output.innerText = "-" + num;
                enableAbsoluteZero = true;
            } else {
                output.innerText = num;
                enableAbsoluteZero = false;
            }
        } else {
            var textToInt = Number(num);
            textToInt*=-1;
            num = textToInt.toString();
            output.innerText = num;
            key_clear.innerText = "C";
        }
    }

    if (key.id == "key_percent") {
        var textToInt = Number(num);
        textToInt/=100;
        num = textToInt.toString();
        output.innerText = num;

        if (num.length == 1 && num[0] == "0") {
            key_clear.innerText = "AC";
        } else {
            key_clear.innerText = "C";
        }
    }

    if (key.classList.contains("operation")) {
        if (!enableOperator) {
            if (!keepResult) {
                //input = input + "(" + num + ")";
                input = input.concat("(", num, ")");
            }

            keepResult = false;

            if (key.id == "key_multiply") {
                // input+="*";
                input = input.concat("*");
            }

            if (key.id == "key_divide") {
                // input+="/";
                input = input.concat("/");
            } 
            
            if (key.id == "key_add") {
                //input+="+";
                input = input.concat("+");
            }

            if (key.id == "key_subtract") {
                //input+="-";
                input = input.concat("-");
            }

            enableOperator = true;

            if (key.id == "key_equal") {
                var result = eval(input);

                if (result != undefined) {
                    input = new String(result);
                    output.innerText = result;
                    keepResult = true;
                    enableOperator = false;
                }
            } else {
                output.innerText = "0";
            }
        }

        enableDecimal = false;
        num = "0";
    }

    if (output.innerText.length > 10) {
        var textToInt = Number(output.innerText);
        textToInt = textToInt.toExponential(3);
        var new_num = textToInt.toString();
        output.innerText = new_num;
    }

    /*console.log("num: " + num);
    console.log("input: " + input);
    console.log("output: " + output.innerText);
    console.log("input length: " + input.length);
    console.log("last input item: " + input[input.length - 1]);
    console.log("font-size: " + window.getComputedStyle(document.getElementById("calc_output_text")).fontSize);*/
}
