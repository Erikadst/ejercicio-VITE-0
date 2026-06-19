export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01")
    console.log($carrousel);

        $carrousel.forEach(($el) => {
            const $pista = $el.querySelector(".artSlider01__pista");
            const $sliders = $el.querySelectorAll(".artSlider01__slide");
            const $dots = $el.querySelectorAll(".artSlider01__track__dot");

            console.log($dots);
            //Comprobar que nuestra pista y los slider existan dentro del DOM
            if (!$pista | $sliders.length === 0) return;
            //console.log ($pista, $sliders);

            let contador = 0;

            const tiempoTransicion = 500;
            const tiempoEspera = 3000;

            $sliders.forEach($slide => {
                const $copia = $slide.cloneNode(true);
                $pista.appendChild($copia);
            });

            setInterval(() => {
                //contador = contador +1;
                contador++;
                $pista.style.transform= `translateX(-${100*contador}%)`;
                $pista.style.transition=`transform ${tiempoTransicion}ms`
                $dots[contador - 1]?.classList.remove("active");
                $dots[contador]?.classList.add("active");
                //Siguiente elemento dot
                if ($dots[contador]){
                    $dots[contador].classList.add("Active");
                } else {
                    $dots[0].classList.add("active");
                }

                //Validar que el contador sea igual al numero de la ultima posicion del slider
                if (contador === $sliders.length){
                    setTimeout(()=>{
                    //console.log({contador});
                    //reiniciar contador
                        contador = 0
                        $pista.style.transform =`translateX(0)`;
                        $pista.style.transition="none";
                    },tiempoTransicion);

                }}, tiempoEspera);

/*          setTimeout(()=> {},tiempoEspera);
            console.log(`Me ejecuto cada ${tiempoEspera}`) */

        })
}