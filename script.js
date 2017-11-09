let activeNumber = 0;
let calculatorKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/" , "*", "="]
for (i = 0; i<calculatorKeys.length; i++){
  document.write("<button class='calcButton' id=" + calculatorKeys[i] + ">" + calculatorKeys[i] + "</button>")
}
document.getElementById("calculatorKeys").innerText = activeNumber;
