import{BotonDesplegableController} from "./BotonDesplegableController.js"

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
	
	addItem(label)
	{
		let item = document.createElement('div');
		item.classList.add('w3-bar-item', 'w3-button');		
		this.container.appendChild(item);
		item.innerText = label;
		return item;
	}

	show()
	{
		//alert('Testeando..');
		let x = this.container;
	  if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-theme";
	  } else { 
		x.className = x.className.replace("w3-show", "");
		x.previousElementSibling.className = 
		x.previousElementSibling.className.replace(" w3-theme", "");
	  }
	}
	
	connectedCallback()
	{
		this.addEventListener('click', () => this.innerController.onclick() );
	}
	
	disconnectedCallback()
	{
		
	}
	
}
customElements.define("x-botondesplegable", BotonDesplegable);
export{BotonDesplegable};