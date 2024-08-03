var num = "";
var input = "";

function clickedButton(key) {
    var output = document.getElementById("calc_output_text");
    
    num+=key.innerText;
    output.textContent = num.trim();
}
