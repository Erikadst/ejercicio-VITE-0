//creo esta funcion para que desde el main llamar a la funcion y cuando carge todo lea la logica de esta funcion
//para llamar a una clase entre comillas y punto al principio, para llamar a un id con comillas y hastag
export default function navScrollTop(){
    const navScroll = document.querySelector(".navbar")
    console.log(navScroll)
    //ventana del navegador: window
    window.addEventListener("scroll", ()=>{
        const scrollTop = document.documentElement.scrollTop
        //scrollTop: muestra los pixeles de desplazamiento
        console.log(scrollTop)

        if(scrollTop > 800){
            navScroll.classList.remove("bg-body-tertiary")
            navScroll.style.backgroundColor = "#ffffffc4";
        }else{
            navScroll.classList.add("bg-body-tertiary")
        }
    })

}