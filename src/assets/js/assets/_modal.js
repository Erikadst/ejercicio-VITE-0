
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
    
    $btnClose.addEventListener("click", ()=> $modal.remove());

        return $modal; 
    }