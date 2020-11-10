
//time
const options = { day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
const timeDisplay = document.querySelector("#time")

setInterval( () => {
    window.time = new Date()

    timeDisplay.innerHTML = time.toLocaleDateString("fr-FR", options)
}, 1000)

// night/light mode
const toggleButton = document.querySelector(".toggleButton")

toggleButton.addEventListener("click", () => {
   
    const styleSheet = document.getElementsByTagName("link")[3]
    if( styleSheet.getAttribute("href") === "keyboard-light.css"){

        styleSheet.setAttribute("href", "keyboard-night.css")
        toggleButton.innerHTML = "<p>Light</p>"

    } else {

        styleSheet.setAttribute("href", "keyboard-light.css")
        toggleButton.innerHTML = "<p>Night</p>"

    }

})

//textarea
const textarea = document.querySelector("textarea")
//keys
const keys = document.querySelectorAll(".key")

for( i = 0; i<keys.length; i++){
    keys[i].addEventListener("click", (e) => {
        const key = e.target
        const keyItem = key.className[4]
        textarea.innerHTML += keyItem
    })
}