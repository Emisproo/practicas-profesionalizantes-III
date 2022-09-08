class BotonDesplegable extends HTMLElement
{
	constructor()
	{
		super();
		
		this.button = document.createElement('a');
		this.button.classList.add("w3-bar-item", "w3-button");
		this.button.innerText = 'Dropdown *';
		
		this.container = document.createElement('div');
		this.container.classList.add("w3-hide");
		
		this.appendChild(this.button);
		this.appendChild(this.container);
		
		this.innerController = new BotonDesplegableController(this);
	}
	
	addItem()
	{
		let item = document.createElement('div');
		item.classList.add('w3-bar-item', 'w3-button');		
		this.container.appendChild(item);
		return item;
	}
	
	
	connectedCallback()
	{
		this.addEventListener('click', () => this.innerController.onclick() );
	}
	
	disconnectedCallback()
	{
		
	}
	
}
export{BotonDesplegable};