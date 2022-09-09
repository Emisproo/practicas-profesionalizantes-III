import { AppView } from './AppView.js';
import{BotonDesplegable} from './desplegable/BotonDesplegable.js'
function main()
{
    let appView = new AppView();
    
    document.body.appendChild(appView);

    let botondesplegable = new BotonDesplegable();
    appView.navbar.appendChild(botondesplegable);
    botondesplegable.show();
    botondesplegable.addItem("Link 1");
    botondesplegable.addItem("Link 2");

}

window.addEventListener( 'load', main)
{
    console.log(' cargado ');

}