class DeleteForm extends HTMLElement
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.DeleteForm = document.createElement('form');
        this.DeleteForm.classList.add("w3-container", "w3-section");
        //this.DeleteForm.action = "/action_page.php";

        this.userNameLabel = document.createElement('label');
        this.userNameLabel.innerText = 'Username';
        this.userNameLabel.style.fontWeight = 'bolder';

        this.userNameInput = document.createElement('input');
        this.userNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.userNameInput.placeholder = "Enter Username to be deleted";
        this.userNameInput.setAttribute('required','true');


        this.DeleteButton = document.createElement('button');
        this.DeleteButton.innerText = 'Delete';
        this.DeleteButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

        

    }

    connectedCallback()
    {
        this.DeleteForm.appendChild(this.userNameLabel);
        this.DeleteForm.appendChild(this.userNameInput);
       
        this.DeleteForm.appendChild(this.DeleteButton);
        
        this.container.appendChild(this.DeleteForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-delete-form', DeleteForm);

export {DeleteForm};