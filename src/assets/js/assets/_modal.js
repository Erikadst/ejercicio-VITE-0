
export default function modal(template){
    const $modal = document.createElement("div")
    $modal.id="modal"
console.log(template)
    $modal.innerHTML=`
    <div class="modal__container">
        <div class="modal__header">
            <span class="modal--btn-close">
                <i class="fa-solid fa-xmark"></i>
            </span>
        </div>
        <div class="modal__body">
            ${template}
        </div>
    </div>`

    const $btnClose = $modal.querySelector(".modal--btn-close")
    const $modalContainer = $modal.querySelector(".modal__container")
    
    $btnClose.addEventListener("click", ()=> $modal.remove());

    $modal.addEventListener("click", (event)=>{
        if(event.target.closest("[data-modal-close]")){
            $modal.remove()
        }
        //cuando se hace click fuera de la caja se pueda cerrar aparte de darle a la x
        if(!$modalContainer.contains(event.target)){
            console.log(event.target)
            $modal.remove()
        }

    })

        return $modal; 
}