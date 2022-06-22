class CalculatorView extends HTMLElement
{
    constructor(model) //objeto model
    {
        super();
          
        this.container = document.createElement("div");
        this.container.className = "container";
        this.container.classList.add("container");

        this.display = document.createElement("input");
        this.display.id="display";
        this.display.type = "text";
        this.display.classList.add("container_input");

        this.fila0 = document.createElement("div");
        this.fila0.id="fila0";

        this.fila1 = document.createElement("div");
        this.fila1.id="fila1";

        this.fila2 = document.createElement("div");
        this.fila2.id="fila2";

        this.fila3 = document.createElement("div");
        this.fila3.id="fila3";

        this.fila4 = document.createElement("div");
        this.fila4.id="fila4";

        this.button1 = document.createElement("input");
        this.button1.id = "button1"
        this.button1.type = "button";
        this.button1.value = "1";
        this.button1.classList.add("button_input");

        this.button2 = document.createElement("input");
        this.button2.id = "button2"
        this.button2.type = "button";
        this.button2.value = "2";
        this.button2.classList.add("button_input");

        this.button3 = document.createElement("input");
        this.button3.id = "button3"
        this.button3.type = "button";
        this.button3.value = "3";
        this.button3.classList.add("button_input");

        this.button4 = document.createElement("input");
        this.button4.id = "button4"
        this.button4.type = "button";
        this.button4.value = "4";
        this.button4.classList.add("button_input");

        this.button5 = document.createElement("input");
        this.button5.id = "button5"
        this.button5.type = "button";
        this.button5.value = "5";
        this.button5.classList.add("button_input");
        
        this.button6 = document.createElement("input");
        this.button6.id = "button6"
        this.button6.type = "button";
        this.button6.value = "6";
        this.button6.classList.add("button_input");
        
        this.button7 = document.createElement("input");
        this.button7.id = "button7"
        this.button7.type = "button";
        this.button7.value = "7";
        this.button7.classList.add("button_input");
        
        
        this.button8 = document.createElement("input");
        this.button8.id = "button8"
        this.button8.type = "button";
        this.button8.value = "8";
        this.button8.classList.add("button_input");
        
        this.button9 = document.createElement("input");
        this.button9.id = "button9"
        this.button9.type = "button";
        this.button9.value = "9";
        this.button9.classList.add("button_input");
        
        this.button0 = document.createElement("input");
        this.button0.id = "button0"
        this.button0.type = "button";
        this.button0.value = "0";
        this.button0.classList.add("button_input");

        this.buttonAdd = document.createElement("input");
        this.buttonAdd.id = "buttonAdd"
        this.buttonAdd.type = "button";
        this.buttonAdd.value = "+";
        this.buttonAdd.classList.add("button_input");

        this.buttonSubtract = document.createElement("input");
        this.buttonSubtract.id = "buttonSubtract"
        this.buttonSubtract.type = "button";
        this.buttonSubtract.value = "-";
        this.buttonSubtract.classList.add("button_input");
       
        this.buttonMult = document.createElement("input");
        this.buttonMult.id = "buttonMult"
        this.buttonMult.type = "button";
        this.buttonMult.value = "*";
        this.buttonMult.classList.add("button_input");

        this.buttonDiv = document.createElement("input");
        this.buttonDiv.id = "buttonDiv"
        this.buttonDiv.type = "button";
        this.buttonDiv.value = "/";
        this.buttonDiv.classList.add("button_input");

        this.buttonAC = document.createElement("input");
        this.buttonAC.id = "buttonAC"
        this.buttonAC.type = "button";
        this.buttonAC.value = "AC";
        this.buttonAC.classList.add("button_input");

        this.buttonSqrt = document.createElement("input");
        this.buttonSqrt.id = "buttonSqrt"
        this.buttonSqrt.type = "button";
        this.buttonSqrt.value = "√";
        this.buttonSqrt.classList.add("button_input");

        this.buttonPow = document.createElement("input");
        this.buttonPow.id = "buttonPow"
        this.buttonPow.type = "button";
        this.buttonPow.value = "^";
        this.buttonPow.classList.add("button_input");

        this.buttonComa = document.createElement("input");
        this.buttonComa.id = "buttonComa"
        this.buttonComa.type = "button";
        this.buttonComa.value = ",";
        this.buttonComa.classList.add("button_input");

        this.buttonClean = document.createElement("input");
        this.buttonClean.id = "buttonClean"
        this.buttonClean.type = "button";
        this.buttonClean.value = "←";
        this.buttonClean.classList.add("button_input");

        this.buttonOpen = document.createElement("input");
        this.buttonOpen.id = "buttonOpen"
        this.buttonOpen.type = "button";
        this.buttonOpen.value = "(";
        this.buttonOpen.classList.add("button_input");

        this.buttonClose = document.createElement("input");
        this.buttonClose.id = "buttonClose"
        this.buttonClose.type = "button";
        this.buttonClose.value = ")";
        this.buttonClose.classList.add("button_input");

        this.buttonDecimal = document.createElement("input");
        this.buttonDecimal.id = "buttonDecimal"
        this.buttonDecimal.type = "button";
        this.buttonDecimal.value = ".";
        this.buttonDecimal.classList.add("button_input");

        this.buttonEqual = document.createElement("input");
        this.buttonEqual.id = "buttonEqual"
        this.buttonEqual.type = "button";
        this.buttonEqual.value = "=";
        this.buttonEqual.classList.add("button_input");

        this.innerModel = model;
        this.innerController = new CalculatorController(this, this.innerModel);
    }
    
    connectedCallback()
    {
        document.body.appendChild(this.container);
        this.container.appendChild(this.display);
        this.container.appendChild(this.fila0);
        this.container.appendChild(this.fila1);
        this.container.appendChild(this.fila2);
        this.container.appendChild(this.fila3);
        this.container.appendChild(this.fila4);
        
        this.fila0.appendChild(this.buttonAC);
        this.fila0.appendChild(this.buttonClean);
        this.fila0.appendChild(this.buttonComa);

        this.fila1.appendChild(this.button7);
        this.fila1.appendChild(this.button8);
        this.fila1.appendChild(this.button9);
        this.fila1.appendChild(this.buttonOpen);
        this.fila1.appendChild(this.buttonClose);

        this.fila2.appendChild(this.button4);
        this.fila2.appendChild(this.button5);
        this.fila2.appendChild(this.button6);
        this.fila2.appendChild(this.buttonSqrt);
        this.fila2.appendChild(this.buttonPow);

        this.fila3.appendChild(this.button1);
        this.fila3.appendChild(this.button2);
        this.fila3.appendChild(this.button3);
        this.fila3.appendChild(this.buttonMult);
        this.fila3.appendChild(this.buttonDiv);

        this.fila4.appendChild(this.button0);
        this.fila4.appendChild(this.buttonDecimal);
        this.fila4.appendChild(this.buttonEqual);
        this.fila4.appendChild(this.buttonAdd);
        this.fila4.appendChild(this.buttonSubtract);

        this.button0.addEventListener('click', () => this.innerController.onclickbutton0() );
        this.button1.addEventListener('click', () => this.innerController.onclickbutton1() );
        this.button2.addEventListener('click', () => this.innerController.onclickbutton2() );
        this.button3.addEventListener('click', () => this.innerController.onclickbutton3() );
        this.button4.addEventListener('click', () => this.innerController.onclickbutton4() );
        this.button5.addEventListener('click', () => this.innerController.onclickbutton5() );
        this.button6.addEventListener('click', () => this.innerController.onclickbutton6() );
        this.button7.addEventListener('click', () => this.innerController.onclickbutton7() );
        this.button8.addEventListener('click', () => this.innerController.onclickbutton8() );
        this.button9.addEventListener('click', () => this.innerController.onclickbutton9() );
        this.buttonAdd.addEventListener('click', () => this.innerController.onclickbuttonAdd() );
        this.buttonSubtract.addEventListener('click', () => this.innerController.onclickbuttonSubstract() );
        this.buttonMult.addEventListener('click', () => this.innerController.onclickbuttonMuilt() );
        this.buttonDiv.addEventListener('click', () => this.innerController.onclickbuttonDiv() );
        this.buttonSqrt.addEventListener('click', () => this.innerController.onclickbuttonSqrt() );
        this.buttonPow.addEventListener('click', () => this.innerController.onclickbuttonPow() );
        this.buttonOpen.addEventListener('click', () => this.innerController.onclickbuttonOpen() );
        this.buttonClose.addEventListener('click', () => this.innerController.onclickbuttonClose() );
        this.buttonDecimal.addEventListener('click', () => this.innerController.onclickbuttonDecimal() );
        this.buttonComa.addEventListener('click', () => this.innerController.onclickbuttonComa() );
        this.buttonAC.addEventListener('click', () => this.innerController.onclickbuttonAC() );
        this.buttonClean.addEventListener('click', () => this.innerController.onclickbuttonC() );
        this.buttonEqual.addEventListener('click', () => this.innerController.onclickbuttonEcual() );   
    }
}