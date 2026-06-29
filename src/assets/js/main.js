import '../scss/style.scss'
import './assets/_artJs.js'
import artSlider from './assets/_artSlider.js';
import { artAcordeon01 } from './assets/_artAcordeon01.js';
import topBottom from './assets/_topBottom.js';
import darkMode from './assets/_darkMode.js';
import observer from './assets/_observer.js';
import navScrollTop from './assets/_navScrollTop.js';
import modal from './assets/_modal.js';
import dialog from './assets/templates/dialog.js';
import dialog1 from './assets/templates/dialog1.js';
import dialog2 from './assets/templates/dialog2.js';
import validationForm from './assets/_validationForm.js';


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
    navScrollTop();
    
    const $btnOpenModal = document.querySelector("#openModal1")
    const template = dialog()
     
    $btnOpenModal.addEventListener("click", ()=>{
        document.body.appendChild(
            modal(dialog())
        );
    })
    const $btnOpenModal2 = document.querySelector("#openModal2")
    const template2 = dialog1()
     
    $btnOpenModal2.addEventListener("click", ()=>{
        document.body.appendChild(
            modal(template2)
        );
    })
    const $btnOpenModal3 = document.querySelector("#openModal3")
    const template3 = dialog2()
     
    $btnOpenModal3.addEventListener("click", ()=>{
        document.body.appendChild(
            modal(template3)
        );
    })
    validationForm();
})




