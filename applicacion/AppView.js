class AppView extends HTMLElement
{
    constructor ()
    {
        super();

        this.navbar = document.createElement("nav");
        this.navbar.classList.add ("w3-sidebar", "w3-bar-block", "w3-collapse", "w3-animate-left", "w3-card"); //style="z-index:3;width:250px;"
        this.navbar.style.zIndex = "3";
        this.navbar.style.width = "250px"

        //detro del nav
        this.a1 = document.createElement("a");
        this.a1.classList.add ("w3-bar-item", "w3-button", "w3-border-bottom", "w3-large");
        this.a1.style.width = "80%";
        //dentro del a1
        this.img = document.createElement("img");
        this.img.src = "./img/logo.jpg";
        this.img.style.width = "100%";
        //this.img.style.height = "60%";

        this.btnClose = document.createElement("a");
        this.btnClose.classList.add("w3-bar-item", "w3-button", "w3-hide-large", "w3-large");
        this.btnClose.innerText = "Close";
        //i dentro de btnClose close y accordion. probar hacerlo una vez y dos a
        this.italic = document.createElement("i");
        this.italic.classList.add("fa", "fa-remove");

        this.btnHome = document.createElement("a");
        this.btnHome.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.btnHome.innerText= "Home";

        this.link1 = document.createElement("a");
        this.link1.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.link1.innerText = "Link 1"; 

        this.link2 = document.createElement("a");
        this.link2.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.link2.innerText = "Link 2";

        this.link3 = document.createElement("a");
        this.link3.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.link3.innerText = "Link 3";

        //dentro de body
        this.overlay = document.createElement("div");
        this.overlay.classList.add("w3-overlay", "w3-hide-large", "w3-animate-opacity");
        this.overlay.style.cursor = "pointer";
        //========================================
        //dentro de body
        this.container2 = document.createElement("div");
        this.container2.classList.add("w3-main");
        this.container2.style.marginLeft = "250px";
        //dentro de container2
        this.top = document.createElement("div");
        this.top.classList.add("w3-container", "w3-top", "w3-theme", "w3-large");
        //dentro de top
        this.parrafo = document.createElement("p");
        //dentro de parrafo
        this.btnMenu = document.createElement("i");
        this.btnMenu.classList.add("fa", "fa-bars", "w3-button", "w3-teal", "w3-hide-large", "w3-xlarge");
        this.btnMenu.innerText = " MENU";
        //dentro de parrafo
        this.intro = document.createElement("span");
        this.intro.classList.add("w3-hide");
         //cargarle texto
        //============================================
        //dentro de body
        this.encabezado = document.createElement("header");
        this.encabezado.classList.add("w3-container", "w3-theme");
        this.encabezado.style.padding = "64px 32px";
        //dentro de encabezado
        this.h1 = document.createElement("h1");
        this.h1.classList.add("w3-xxxlarge");//cargarle texto
        //=================================================
        //dentro de body
        this.container3 = document.createElement("div");
        this.container3.classList.add("w3-container");
        this.container3.style.padding = "32px";
        //dentro de container3
        this.ul = document.createElement("ul");
        this.ul.classList.add("w3-leftbar", "w3-theme-border");
        this.ul.style.listStyle = "none";
        //=================================================
        //dentro de body
        this.footer = document.createElement("footer");
        this.footer.classList.add("w3-container", "w3-theme");
        this.footer.style.padding = "32px";
        //dentro de footer
        this.parrafo2 = document.createElement("p"); //agregar texto
    
    }


    connectedCallback()
    {
        this.appendChild(this.navbar);
        this.navbar.appendChild(this.a1);
        this.a1.appendChild(this.img);
        this.navbar.appendChild(this.btnClose);
        this.btnClose.appendChild(this.italic);
        this.navbar.appendChild(this.btnHome);
        this.navbar.appendChild(this.link1);
        this.navbar.appendChild(this.link2);
        this.navbar.appendChild(this.link3);
       
        this.appendChild(this.overlay);

        this.appendChild(this.container2);
        this.container2.appendChild(this.top);
        this.top.appendChild(this.parrafo);
        this.parrafo.appendChild(this.btnMenu);
        this.parrafo.appendChild(this.intro);
        
        this.appendChild(this.encabezado);
        this.encabezado.appendChild(this.h1);

        this.appendChild(this.container3);
        this.container3.appendChild(this.ul);

        this.appendChild(this.footer);
        this.footer.appendChild(this.parrafo2);

        //----- asignar los event handler del controlador
        this.btnMenu.addEventListener('click', ()=> this.showSidebar() );
        this.btnClose.addEventListener('click', ()=> this.closeSidebar());

    }

    disconectedCallback(){}

    // Open and close the sidebar on medium and small screens
    showSidebar() 
    {
        this.navbar.style.display = "block";
        this.overlay.style.display = "block";
    }

    closeSidebar() {
        this.navbar.style.display = "none";
        this.overlay.style.display = "none";
    }

    addItemToSidebar(item)
    {
        this.navbar.appendChild(item);
    }
}

customElements.define('x-appview', AppView);

export{ AppView };