import { DeleteForm } from './control-access-frontend/Delete_form';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let DeleteForm = new DeleteForm();
	
	let myModalDialog = new ModalDialog();

	let buttonDelete = document.createElement('button');
	buttonDelete.innerText = 'Delete User';

	myModalDialog.innerContent.appendChild(DeleteForm);
	
	buttonDelete.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonDelete);
}

window.addEventListener('load', main );