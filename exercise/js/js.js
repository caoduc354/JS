"use strict";

var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click",function(e){

    var currentString = input.innerHTML;
    var lasString = currentString[currentString.length -1];
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    }else if (resultDisplayed === true && lasString === "+"||lasString === "-"|| lasString === "x"||lasString === "/" ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    }else{
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i=0; i<operator.length;i++){
  operator[i].addEventListener("click", function(e){
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length -1];

    if (lastChar === "+" || lastChar === "-"||lastChar ==="x"||lastChar==="/") {
      var newString = currentString.substring(0,currentString.length-1)+e.target.innerHTML;
      input.innerHTML = newString;
    }else if (currentString == 0 ) {
      alert("Ban phai nhap 1 so")
    }else{
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\x|\//g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }

  var multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});


clear.addEventListener("click",function(){
  input.innerHTML ='';
});
