
class CalculatorController //lo que el usuario espera que pase cuando interactua con la GUI
{
    constructor( calculatorView, calculatorModel )
	{
		this.view = calculatorView;
		this.model = calculatorModel;
	}

    //funciones del controlador. 
    onclickbutton0()
    {
        this.view.display.value += '0';
    }

    onclickbutton1()
    {
        this.view.display.value += '1';
    }

    onclickbutton2()
    {
        this.view.display.value += '2';
    }

    onclickbutton3()
    {
        this.view.display.value += '3';
    }

    onclickbutton4()
    {
        this.view.display.value += '4';
    }

    onclickbutton5()
    {
        this.view.display.value += '5';
    }

    onclickbutton6()
    {
        this.view.display.value += '6';
    }

    onclickbutton7()
    {
        this.view.display.value += '7';
    }

    onclickbutton8()
    {
        this.view.display.value += '8';
    }

    onclickbutton9()
    {
        this.view.display.value += '9';
    }

    onclickbuttonAdd()
    {
        this.view.display.value += '+';
    }

    onclickbuttonSubstract()
    {
        this.view.display.value += '-';
    }

    onclickbuttonMuilt()
    {
        this.view.display.value += '*';
    }

    onclickbuttonDiv()
    {
        this.view.display.value += '/';
    }

    onclickbuttonSqrt()
    {
        this.view.display.value += 'sqrt(';
    }

    onclickbuttonPow()
    {
        this.view.display.value += 'pow(';
    }

    onclickbuttonOpen()
    {
        this.view.display.value += '(';
    }

    onclickbuttonClose()
    {
        this.view.display.value += ')';
    }

    onclickbuttonDecimal()
    {
        this.view.display.value += '.';
    }

    onclickbuttonComa()
    {
        this.view.display.value += ',';
    }

    onclickbuttonAC()
    {
        this.view.display.value = '';
    }

    onclickbuttonC()
    {
        this.view.display.value = view.display.value.substr(0, display.value.length -1)
    }

    onclickbuttonEcual()
    {
        let display = document.getElementById("display");
	    let currentValue = display.value;
	    //alert("current: "+currentValue);
	    //alert("evaluated: "+math.evaluate(currentValue));
	    display.value = math.evaluate(currentValue);
    }
}