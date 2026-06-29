export default function validationForm(){
    const errors={
        name : {
            pattern:"[A-Za-z]{3}",
            message:"El nombre debe contener solo letras y 3 dígitos"
        },
        surname : {
            pattern:"[A-Za-z]{3}",
            message:"El nombre debe contener solo letras y 3 dígitos"
        }
    }

    document.addEventListener("submit", (event)=>{
        //preventDefault no deja actualizar la pagina
        event.preventDefault()
        
        const $form = event.target

        const $inputs = $form.querySelectorAll("input")
        

        $inputs.forEach((input) => {
            const pattern = new RegExp(errors[input.name].pattern)
            //crear un elemento span para mensaje de error
            const $span = document.createElement("span")
            const formFiled= document.querySelector(".form__field")
            $span.innerText = errors[input.name].message
                if(!pattern.test(input.value)){
                    formFiled.insertAdjacentElement("afterbegin", $span)

                }
                
        })


    })
}
