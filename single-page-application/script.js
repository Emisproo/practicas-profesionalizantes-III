let forms = document.getElementById("forms");
let buttonAC = document.getElementById("buttonAC");
let buttonC = document.getElementById("buttonC");
let buttonComa = document.getElementById("buttonComa");

let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let buttonOpen = document.getElementById("buttonOpen"); 
let buttonClose = document.getElementById("buttonClose");

let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let buttonSqrt = document.getElementById("buttonSqrt");
let buttonPow = document.getElementById("buttonPow");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let buttonMult = document.getElementById("buttonMult");
let buttonDiv = document.getElementById("buttonDiv");

let button0 = document.getElementById("button0");
let buttonDecimal = document.getElementById("buttonDecimal");
let buttonEqual = document.getElementById("buttonEqual");
let buttonAdd = document.getElementById("buttonAdd");
let buttonSubtract = document.getElementById("buttonSubtract");

function onclickButtonAC()
{
	document.getElementById("answer").value = ""
};

function onclickButtonC()
{
	document.getElementById("answer").value = forms.answer.value.substr(0, forms.answer.value.length -1)
};

function onclickButtonComa()
{
	document.getElementById("answer").value += ","
};

function onclickButton7()
{
	document.getElementById("answer").value += 7
};

function onclickButton8()
{
	document.getElementById("answer").value += 8
};

function onclickButton9()
{
	document.getElementById("answer").value += 9
};

function onclickButtonOpen()
{
	document.getElementById("answer").value += "("
};

function onclickButtonClose()
{
	document.getElementById("answer").value += ")"
};

function onclickButton4()
{
	document.getElementById("answer").value += 4
};

function onclickButton5()
{
	document.getElementById("answer").value += 5
};

function onclickButton6()
{
	document.getElementById("answer").value += 6
};

function onclickButtonSquareRoot()
{
	document.getElementById("answer").value += 'sqrt('
};

function onclickButtonSubtract()
{
	document.getElementById("answer").value += ''
};

function onclickButton1()
{
	document.getElementById("answer").value += 1
};
function onclickButton2()
{
	document.getElementById("answer").value += 2
};

function onclickButton3()
{
	document.getElementById("answer").value += 3
};

function onclickButtonMult()
{
	document.getElementById("answer").value += '*'
};

function onclickButtonDiv()
{
	document.getElementById("answer").value += '/'
};

function onclickButton0()
{
	document.getElementById("answer").value += '0'
};

function onclickButtonDecimal()
{
	document.getElementById("answer").value += '.'
};
function onclickButtonEqual()
{
	//ANTES: document.getElementById("answer").value = eval(forms.answer.value);
	let display = document.getElementById("answer");
	let currentValue = display.value;
	//alert("current: "+currentValue);
	//alert("evaluated: "+math.evaluate(currentValue));
	display.value = math.evaluate(currentValue);
};

function onclickButtonAdd()
{
	document.getElementById("answer").value += '+'
};

function onclickButtonPow()
{
	document.getElementById("answer").value += 'pow('
};

buttonAC.addEventListener("click", onclickButtonAC );
buttonC.addEventListener("click", onclickButtonC );
buttonComa.addEventListener("click", onclickButtonComa );
button7.addEventListener("click", onclickButton7 );
button8.addEventListener("click", onclickButton8 );
button9.addEventListener("click", onclickButton9 );
buttonOpen.addEventListener("click", onclickButtonOpen );
buttonClose.addEventListener("click", onclickButtonClose );
button4.addEventListener("click", onclickButton4 );
button5.addEventListener("click", onclickButton5 );
button6.addEventListener("click", onclickButton6 );
buttonSqrt.addEventListener("click", onclickButtonSquareRoot );
buttonPow.addEventListener("click", onclickButtonPow );
button1.addEventListener("click", onclickButton1 );
button2.addEventListener("click", onclickButton2 );
button3.addEventListener("click", onclickButton3 );
buttonMult.addEventListener("click", onclickButtonMult );
buttonDiv.addEventListener("click", onclickButtonDiv );
button0.addEventListener("click", onclickButton0 );
buttonDecimal.addEventListener("click", onclickButtonDecimal );
buttonEqual.addEventListener("click", onclickButtonEqual );
buttonAdd.addEventListener("click", onclickButtonAdd );
buttonSubtract.addEventListener("click", onclickButtonSubtract );
