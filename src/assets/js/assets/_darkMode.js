export default function darkMode(){
    const $btnDarkMode = document.querySelector(
        ".header--darkModeButton",
    )

    const $icon = $btnDarkMode.querySelector(".fa-solid")
    const theme = localStorage.getItem("theme")

    if(theme === "dark"){
        $icon.classList.remove("fa-moon")
        $icon.classList.add("fa-sun")
        document.body.classList.add("dark")
    }

    $btnDarkMode.addEventListener("click", (e)=>{

        const isDark = localStorage.getItem("theme") === "dark"

        $icon.classList.toggle("fa-sun")
        $icon.classList.toggle("fa-moon")
        //Sirven las dos

    /* if($icon.classList.contains("fa-sun")){
        $icon.classList.remove("fa-sun")
        $icon.classList.add("fa-moon")
    } else {
        $icon.classList.remove("fa-moon")
        $icon.classList.add("fa-sun")
    } */
        document.body.classList.toggle("dark")

        localStorage.setItem("theme", isDark ? "light" : "dark")

   })


}
