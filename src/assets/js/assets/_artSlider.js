export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01")
    console.log($carrousel);

        $carrousel.forEach(($el) => {
            const $pista = $el.querySelector(".artSlider01__pista");
            const $sliders = $el.querySelectorAll(".artSlider01__slide");
            const $dots = $el.querySelectorAll(".artSlider01__track__dot");
            const $btnPrev = $el.querySelector(".artSlider01__arrow--prev");
            const $btnNext = $el.querySelector(".artSlider01__arrow--next");

            let contador = 0;
            let idInterval;

            $btnPrev.addEventListener("click", (e)=>{
                autoPlayInterval();
                contador = contador -1;
                renderSlide(contador, $pista, tiempoTransicion);
                console.log(contador, "prev");
                autoPlayInterval();
  
            })
            $btnNext.addEventListener("click", (e)=>{
                contador += 1;
                renderSlide();
                console.log(contador, "next");
            })

            //Comprobar que nuestra pista y los slider existan dentro del DOM
            if (!$pista | $sliders.length === 0) return;
            //console.log ($pista, $sliders);

            const tiempoTransicion = 500;
            const tiempoEspera = 3000;

            $sliders.forEach($slide => {
                const $copia = $slide.cloneNode(true);
                $pista.appendChild($copia);
            });


            autoPlayInterval();

        function renderSlide(){
            console.log(contador)
            $pista.style.transform= `translateX(-${100*contador}%)`;
            $pista.style.transition=`transform ${tiempoTransicion}ms`;
        } 

        function resetPista(){
            $pista.style.transform = "none";
            $pista.style.transition = "translateX(0)";
            contador = 0;
        }

        function renderDots(){
            $dots[contador - 1]?.classList.remove("active");
            //Siguiente elemento dot
            if ($dots[contador]){
                $dots[contador].classList.add("active");
            } else {
                $dots[0].classList.add("active");
            }
        }

        function autoPlayInterval(){
            
            if(!idInterval) {
            idInterval = setInterval(() => {
                handleInterval()
            }, tiempoEspera);
            } else {
            clearInterval(idInterval);
            idInterval= undefined
            }
            console.log(contador)
        }

        function handleInterval(){
            contador++;
            renderSlide();
            renderDots();
            //Validar que el contador sea igual al numero de la ultima posicion del slider
            if (contador === $sliders.length){
                setTimeout(()=>{
                    resetPista();
                },tiempoTransicion);
            }
        }
        });
}
