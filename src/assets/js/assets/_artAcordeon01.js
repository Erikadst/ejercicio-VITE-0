export function artAcordeon01(){

    const botonesMostrar = document.querySelectorAll('.mostrar')

    botonesMostrar.forEach ((item)=>{
        item.addEventListener('click', ()=>{
            const parrafo=item.previousElementSibling
            parrafo.classList.toggle("open")

            item.textContent = parrafo.classList.contains("open") ? "Leer menos" : "Leer más"

    })
})

}