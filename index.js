bt1 = document.getElementById("b1");
bt0 = document.getElementById("b0");
bt2 = document.getElementById("b2");
bt3 = document.getElementById("b3");
bt4 = document.getElementById("b4");
bt5 = document.getElementById("b5");
bt6 = document.getElementById("b6");
bt7 = document.getElementById("b7");
bt8 = document.getElementById("b8");
bt9 = document.getElementById("b9");
dot = document.getElementById("btnd");
clearbtn = document.getElementById("cl");
equal = document.getElementById("eq");
display = document.getElementById("disp");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiple = document.getElementById("mul");
division = document.getElementById("divi");
pl = 0;
min = 0;
div = 0;
mul = 0;
flot1 = 0;
flot2 = 0;

val = 0;
num1 = 0;
num2 = 0;

bt1.addEventListener("click", fun1);
bt2.addEventListener("click", fun2);
bt3.addEventListener("click", fun3);
bt4.addEventListener("click", fun4);
bt5.addEventListener("click", fun5);
bt6.addEventListener("click", fun6);
bt7.addEventListener("click", fun7);
bt8.addEventListener("click", fun8);
bt9.addEventListener("click", fun9);
bt0.addEventListener("click", fun0);
equal.addEventListener("click", funEqual);
plus.addEventListener("click", funPlus);
minus.addEventListener("click", funMinus);
multiple.addEventListener("click", funMul);
division.addEventListener("click", funDiv);
dot.addEventListener("click", funDotPress);
clearbtn.addEventListener("click", funClear);

function funDotPress() {
  if (pl === 0 && min === 0 && div === 0 && mul === 0 && flot1 === 0) {
    flot1 += 1;
    val += ".";
    display.value = val;
  } else if ((pl != 0 || min != 0 || div != 0 || mul != 0) && flot2 === 0) {
    flot2 += 1;
    val += ".";
    display.value = val;
  }
}

function funClear() {
  pl = 0;
  min = 0;
  div = 0;
  mul = 0;
  flot1 = 0;
  flot2 = 0;
  val = 0;
  num1 = 0;
  num2 = 0;
  display.value = val;
}

function funMul() {
  num1 = val;
  val = 0;
  pl = 0;
  min = 0;
  div = 0;
  mul = 1;
  flot2 = 0;
  display.value = val;
}

function funDiv() {
  num1 = val;
  val = 0;
  pl = 0;
  min = 0;
  div = 1;
  mul = 0;
  flot2 = 0;
  display.value = val;
}

function funMinus() {
  num1 = val;
  val = 0;
  pl = 0;
  min = 1;
  div = 0;
  mul = 0;
  flot2 = 0;
  display.value = val;
}

function funPlus() {
  num1 = val;
  val = 0;
  pl = 1;
  min = 0;
  div = 0;
  mul = 0;
  flot2 = 0;
  display.value = val;
}

function fun1() {
  if (val === 0) {
    val = 1;
  } else {
    val = val + "1";
  }
  display.value = val;
}

function fun2() {
  if (val === 0) {
    val = 2;
  } else {
    val = val + "2";
  }
  display.value = val;
}

function fun3() {
  if (val === 0) {
    val = 3;
  } else {
    val = val + "3";
  }
  display.value = val;
}

function fun4() {
  if (val === 0) {
    val = 4;
  } else {
    val = val + "4";
  }
  display.value = val;
}

function fun5() {
  if (val === 0) {
    val = 5;
  } else {
    val = val + "5";
  }
  display.value = val;
}

function fun6() {
  if (val === 0) {
    val = 6;
  } else {
    val = val + "6";
  }
  display.value = val;
}

function fun7() {
  if (val === 0) {
    val = 7;
  } else {
    val = val + "7";
  }
  display.value = val;
}

function fun8() {
  if (val === 0) {
    val = 8;
  } else {
    val = val + "8";
  }
  display.value = val;
}

function fun9() {
  if (val === 0) {
    val = 9;
  } else {
    val = val + "9";
  }
  display.value = val;
}

function fun0() {
  if (val === 0) {
    val = 0;
  } else {
    val = val + "0";
  }
  display.value = val;
}

function funEqual() {
  num2 = val;
  val = 0;
  if (pl === 1) {
    val = parseFloat(num1) + parseFloat(num2);
  } else if (min === 1) {
    val = parseFloat(num1) - parseFloat(num2);
  } else if (div === 1) {
    val = parseFloat(num1) / parseFloat(num2);
  } else {
    val = parseFloat(num1) * parseFloat(num2);
  }
  pl = 0;
  min = 0;
  div = 0;
  mul = 0;
  display.value = val;
}
