import { CalculatorView } from './calculator.js';
import { CalculatorModel } from './calculator.js';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let myCalculatorModel = new CalculatorModel();
	let myCalculator = new CalculatorView(myCalculatorModel);
	let myModalDialog = new ModalDialog();

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'openDialog';

	myModalDialog.innerContent.appendChild(myCalculator);
	buttonOpenModal.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);

	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );