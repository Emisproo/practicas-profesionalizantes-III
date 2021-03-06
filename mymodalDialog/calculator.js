class CalculatorModel
{
	constructor()
	{

	}

	calculate(expression)
	{
		return eval(expression);
	}
}

class CalculatorController
{
	constructor(view, model)
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onButton0Click()
	{   	
		this.innerView.display.value += '0';
	}

	onButton1Click()
	{   	
		this.innerView.display.value += '1';
	}

	onButton2Click()
	{   	
		this.innerView.display.value += '2';
	}

	onButtonPlusClick()
	{   	
		this.innerView.display.value += '+';
	}

	onButtonCalculateClick()
	{
	  this.innerView.display.value = this.innerModel.calculate(this.innerView.display.value);
	}
}

class CalculatorView extends HTMLElement
{
	constructor(model)
	{
		super();

		//Acquire model reference
		this.innerModel = model;
		this.innerController = new CalculatorController(this,this.innerModel);

		//Create UI Elements from HTMLDocument
		this.display = document.createElement('input');
		this.display.type = 'text';
		this.display.setAttribute('disabled','');
		this.display.value = '';
		this.display.classList.add('displayResult');

		this.button0 = document.createElement('button');
		this.button0.innerText = '0';
		this.button0.classList.add('numberButton');

		this.button1 = document.createElement('button');
		this.button1.innerText = '1';
		this.button1.classList.add('numberButton');

		this.button2 = document.createElement('button');
		this.button2.innerText = '2';
		this.button2.classList.add('numberButton');

		this.buttonPlus = document.createElement('button');
		this.buttonPlus.innerText = '+';
		this.buttonPlus.classList.add('operatorButton');

		this.buttonCalculate = document.createElement('button');
		this.buttonCalculate.innerText = '=';
		this.buttonCalculate.classList.add('calculateButton');


	}

	connectedCallback()
	{
		//Append to itself
		this.appendChild(this.display);
		this.appendChild(this.button0);
		this.appendChild(this.button1);
		this.appendChild(this.button2);
		this.appendChild(this.buttonPlus);
		this.appendChild(this.buttonCalculate);

		//Attach event-handler functions to each element
		this.button0.addEventListener('click', (event) => this.innerController.onButton0Click(event) );
		this.button1.addEventListener('click', (event) => this.innerController.onButton1Click(event) );
		this.button2.addEventListener('click', (event) => this.innerController.onButton2Click(event) );
		this.buttonPlus.addEventListener('click', (event) => this.innerController.onButtonPlusClick(event) );
		this.buttonCalculate.addEventListener('click', (event) => this.innerController.onButtonCalculateClick(event) );
	}
}


customElements.define('x-calculator-view', CalculatorView);

export { CalculatorView };
export { CalculatorModel };