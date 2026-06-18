export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01")
    console.log($carrousel);

        $carrousel.forEach(($el) => {
            const $pista = $el.querySelector(".artSlider01__pista");
            const $sliders = $el.querySelectorAll(".artSlider01__slide");
            //Comprobar que nuestra pista y los slider existan dentro del DOM
            if (!$pista | $sliders.length === 0) return;
            //console.log ($pista, $sliders);

            let contador = 0;

            const tiempoTransicion = 500;
            const tiempoEspera = 3000;

            $sliders.forEach($slide => {
                console.log($slide);
            })

            setInterval(() => {
                console.log(`Contador: ${contador}`);
                console.log(`Tiempo:${(tiempoEspera * contador)/1000}s`);
                //contador = contador +1;
                contador++;
            }, tiempoEspera);

        })
}