export default function observer(){
    
    function loadElements(entradas){

        entradas.forEach((entrada)=>{
            if (entrada.isIntersecting){
                const fadeOutElements = entrada.target.querySelectorAll(".fadeOut")

                fadeOutElements.forEach(element=>{
                    element.classList.remove("fadeOut")
                    element.classList.add("fadeIn")
                })
            }
        })
    }

    const observador = new IntersectionObserver(loadElements, {
        threshold: 0.1,
    })

    const sections = document.querySelectorAll("section");

    sections.forEach((section)=>{
        observador.observe(section)
    })

}