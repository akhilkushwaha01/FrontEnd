var input = document.getElementById("name");

var bracket1 = document.getElementById("button(");
var bracket2 = document.getElementById("button)");
var buttonC = document.getElementById("buttonC");
var buttonPer = document.getElementById("button%");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var buttonX = document.getElementById("buttonX");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var buttonMinus = document.getElementById("button-");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var buttonPlus = document.getElementById("button+");
var button0 = document.getElementById("button0");
var buttonDot = document.getElementById("button.");
var buttonDiv = document.getElementById("button/");
var buttonEqual = document.getElementById("button=");

bracket1.addEventListener("click", function() {
    input.value += "(";
}
);

bracket2.addEventListener("click", function() {
    input.value += ")";
}
);

buttonC.addEventListener("click", function() {
    input.value = "";
}
);

buttonPer.addEventListener("click", function() {
    input.value += "%";
}
);

button7.addEventListener("click", function() {
    input.value += "7";
}
);

button8.addEventListener("click", function() {
    input.value += "8";
}
);

button9.addEventListener("click", function() {
    input.value += "9";
}
);

buttonX.addEventListener("click", function() {
    input.value += "*";
}
);

button4.addEventListener("click", function() {
    input.value += "4";
}
);

button5.addEventListener("click", function() {
    input.value += "5";
}
);

button6.addEventListener("click", function() {
    input.value += "6";
}
);

buttonMinus.addEventListener("click", function() {
    input.value += "-";
}
);

button1.addEventListener("click", function() {
    input.value += "1";
}
);

button2.addEventListener("click", function() {
    input.value += "2";
}
);

button3.addEventListener("click", function() {
    input.value += "3";
}
);

buttonPlus.addEventListener("click", function() {
    input.value += "+";
}
);

button0.addEventListener("click", function() {
    input.value += "0";
}
);

buttonDot.addEventListener("click", function() {
    input.value += ".";
}
);

buttonDiv.addEventListener("click", function() {
    input.value += "/";
}
);

buttonEqual.addEventListener("click", function() {
    var text = input.value;

    var result = eval(text);

    input.value = result;
}
);