import '../scss/style.scss'
import './assets/_artJs.js'
import artSlider from './assets/_artSlider.js';
import { artAcordeon01 } from './assets/_artAcordeon01.js';
import topBottom from './assets/_topBottom.js';
import darkMode from './assets/_darkMode.js';
import observer from './assets/_observer.js';


//con las funciones se espera a que el dom se carge
//con el import no
document.addEventListener("DOMContentLoaded", ()=>{
    artAcordeon01();
    artSlider();
    //obtenemos la referencia al main dentro del dom
    const $main = document.querySelector("main");  
    //agregar el boton dentro del main como nuevo hijo
    $main.appendChild(topBottom());
    //llamar al js de la funcion darkMode
    darkMode();
    observer();
})




