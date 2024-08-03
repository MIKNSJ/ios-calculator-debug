var num = "";
var input = "";

function clickedButton(key) {
    var output = document.getElementById("calc_output_text");
    var key_clear = document.getElementById("key_clear");
    
    num+=key.innerText;
    output.innerText = num;
}
