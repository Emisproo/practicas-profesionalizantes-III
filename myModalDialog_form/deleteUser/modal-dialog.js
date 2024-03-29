class ModalDialog extends HTMLElement
{
	constructor()
	{
		super();

		this.classList.add("w3-modal", "w3-center");
		this.innerContent = document.createElement('div');
		this.innerContent.classList.add( "w3-container", "w3-container", "we-opacity", "w3-center");

		/*this.confirmButton = document.createElement('button');
		this.confirmButton.innerText = 'Confirm';
		this.confirmButton.classList.add("w3-button","w3-black");

		this.cancelButton = document.createElement('button');
		this.cancelButton.innerText = 'Cancel';
		this.cancelButton.classList.add("w3-button","w3-black");*/
	}

	connectedCallback()
	{
		/*this.appendChild(this.innerContent);
		this.appendChild(this.confirmButton);
		this.appendChild(this.cancelButton);

		this.confirmButton.addEventListener('click', ()=>this.hide() );
		this.cancelButton.addEventListener('click', ()=>this.hide() );*/

	}

	disconnectCallback()
	{
		//to-do
	}

	show()
	{
		this.style.display = 'block';
	}

	hide()
	{
		this.style.display = 'none';
	}
}

customElements.define('x-modal-dialog', ModalDialog );

export { ModalDialog };
