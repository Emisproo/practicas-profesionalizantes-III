import{BotonDesplegable} from './desplegable/BotonDesplegable.js';

import { Vista } from './vista.js';

function main()
{
    let vista = new Vista();
    let botonDesplegable= new BotonDesplegable();
   
    document.body.appendChild(vista);

    vista.container.appendChild(botonDesplegable);
    botonDesplegable.addItem('prueba');
}
window.addEventListener( 'load', main)
{
    console.log(' cargado ');

}