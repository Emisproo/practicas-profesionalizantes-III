class Vista extends HTMLElement
{
    constructor ()
    {
        super();

        this.container = document.createElement("nav");
        this.container.classList.add ("w3-sidebar", "w3-bar-block", "w3-collapse", "w3-animate-left", "w3-card"); //style="z-index:3;width:250px;"
        this.container.id = "mySidebar";
        this.container.style.zIndex = "3";
        this.container.style.width = "250px"

        //detro del nav
        this.a1 = document.createElement("a");
        this.a1.classList.add ("w3-bar-item", "w3-button", "w3-border-bottom", "w3-large");
        this.a1.id = "logoCorner";
        this.a1.style.width = "80%";
        //dentro del a1
        //this.img = createElement(img);
        //this.img.src = "./W3.CSS_files/w3schools.png";

        this.a2 = document.createElement("a");
        this.a2.classList.add("w3-bar-item", "w3-button", "w3-hide-large", "w3-large");
        this.a2.id = "close";
        this.a2.innerText = "Close";
        //i dentro de a2 close y accordion. probar hacerlo una vez y dos a
        this.italic = document.createElement("i");
        this.italic.classList.add("fa", "fa-remove");
        this.italic.id = "italic";

        this.a3 = document.createElement("a");
        this.a3.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.a3.id = "home";
        this.a3.innerText= "Home";

        this.a4 = document.createElement("a");
        this.a4.classList.add("w3-bar-item", "w3-button", "w3-teal");
        this.a4.innerText = "Link 1";
        

        this.a5 = document.createElement("a");
        this.a5.classList.add("w3-bar-item", "w3-button", "w3-teal");
        
        this.a5.innerText = "Link 2";

        this.a6 = document.createElement("a");
        this.a6.classList.add("w3-bar-item", "w3-button", "w3-teal");
       
        this.a6.innerText = "Link 3";

       

       /* //separar en otra clase
        this.desplegable = createElement("div");
        this.desplegable.id ="desplegable";
        //dentro del desplegable
        this.accordion.createElement("a"); 
        this.accordion.classList.add("w3-bar-item w3-button");
        this.accordion.className = ("menu-side");
        this.accordion.innerText = "Dropdown"; //agregar texto
        //dentro de desplegable
        this.demo = createElement("div");
        this.demo.classList.add("w3-hide");
        this.demo.id = ("demo");
        //dentro de demo
        this.desp1 = createElement("a");
        this.desp1.classList.add("w3-bar-item w3-button");
        this.desp1.className = "menu-side";
        this.desp1.innerText = "Link";

        this.desp2= createElement("a");
        this.desp2.classList.add("w3-bar-item w3-button");
        this.desp2.className = "menu-side";
        this.desp2.innerText = "Link";

        this.desp3 = createElement("a");
        this.desp3.classList.add("w3-bar-item w3-button");
        this.desp3.className = "menu-side";
        this.desp3.innerText = "Link";*/
        //=========================================
        //dentro de nav
        //this.div= document.createElement("div");

        //dentro de body
        this.overlay = document.createElement("div");
        this.overlay.classList.add("w3-overlay", "w3-hide-large", "w3-animate-opacity");
        this.overlay.id = "myOverlay";
        this.overlay.style.cursor = "pointer";
        //========================================
        //dentro de body
        this.container2 = document.createElement("div");
        this.container2.classList.add("w3-main");
        this.container2.style.marginLeft = "250px";
        //dentro de container2
        this.top = document.createElement("div");
        this.top.classList.add("w3-container", "w3-top", "w3-theme", "w3-large");
        this.top.id = "myTop";
        //dentro de top
        this.parrafo = document.createElement("p");
        //dentro de parrafo
        this.italic2 = document.createElement("i");
        this.italic2.classList.add("fa", "fa-bars", "w3-button", "w3-teal", "w3-hide-large", "w3-xlarge");
        //dentro de parrafo
        this.intro = document.createElement("span");
        this.intro.classList.add("w3-hide");
        this.intro.id = "myIntro"; //cargarle texto
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
        this.appendChild(this.container);
        this.container.appendChild(this.a1);
        //this.a1.appendChild(this.img);
        this.container.appendChild(this.a2);
        this.a2.appendChild(this.italic);
        this.container.appendChild(this.a3);
        this.container.appendChild(this.a4);
        this.container.appendChild(this.a5);
        this.container.appendChild(this.a6);
        //this.container.appendChild(this.div);
        this.appendChild(this.overlay);

        this.appendChild(this.container2);
        this.container2.appendChild(this.top);
        this.top.appendChild(this.parrafo);
        this.parrafo.appendChild(this.italic2);
        this.parrafo.appendChild(this.intro);
        
        this.appendChild(this.encabezado);
        this.encabezado.appendChild(this.h1);

        this.appendChild(this.container3);
        this.container3.appendChild(this.ul);

        this.appendChild(this.footer);
        this.footer.appendChild(this.parrafo2);

    }

    disconectedCallback(){}

}

customElements.define('x-vista', Vista);

export{ Vista };