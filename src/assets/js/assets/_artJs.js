let mivariable
let miotravariable
const mivariableinalterable = 'cualquier cosa'

mivariable = 'Erika'
miotravariable = 'De Santiago'

let num1 = 2
let num2 = 5
let resultado = num1 + num2

console.log(mivariable + ' ' + miotravariable)

console.log(resultado)


// aqui recojo un elemento Html dentro de una constante en un memoria, getElementById le puedo cambiar y agregar propiedades
// const boton = document.getElementById("boton")
const boton = document.querySelector('#boton')
const h4 = document.querySelector('h4') 
h4.style.color='#00c7a9'
// boton.style.backgroundColor="pink"

console.log(boton)

boton.addEventListener("click", function(){
    boton.style.backgroundColor = 'pink'
    boton.style.color = 'black'
})

/* si tengo muchos botones va a cambiar el color al que se haga en click */

const botones = document.querySelectorAll('.boton')

botones.forEach(function(boton){
    boton.addEventListener('click', function(){
        boton.style.backgroundColor = 'pink'
        boton.style.color = 'black'
    })
})


// Funcion flecha 
/*
const botones = document.querySelectorAll('.boton')

botones.forEach ((boton)=>{
    boton.addEventListener('click', ()=>{
        boton.style.backgroundColor='pink'
        boton.style.color='black'
    })
}) */

//
