
//time
const options = { day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric' };
const elem = document.querySelector("#time")

setInterval( () => {
    window.time = new Date()

    elem.innerHTML = time.toLocaleDateString("fr-FR", options)
}, 1000)


const toggleButton = document.querySelector(".toggleButton")

toggleButton.addEventListener("click", () => {
   
    const styleSheet = document.getElementsByTagName("link")[4]
    if( styleSheet.getAttribute("href") === "keyboard-light.css"){

        styleSheet.setAttribute("href", "keyboard-night.css")
        toggleButton.innerHTML = "<p>Light</p>"

    } else {

        styleSheet.setAttribute("href", "keyboard-light.css")
        toggleButton.innerHTML = "<p>Night</p>"

    }

})