import{BotonDesplegable} from './desplegable/BotonDesplegable.js';
import { Vista } from './vista.js';
function main()
{
    let vista = new Vista();
    let botonDesplegable= new BotonDesplegable();

    vista.container.appendChild(botonDesplegable);

    document.body.appendChild(vista);
    document.body.appendChild(botonDesplegable);
}

window.addEventListener( 'load', main)
{
    console.log(' cargado ');
}