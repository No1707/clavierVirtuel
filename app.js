
//time
const options = { day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
const timeDisplay = document.querySelector("#time")

setInterval( () => {
    window.time = new Date()

    timeDisplay.innerHTML = time.toLocaleDateString("fr-FR", options)
}, 1000)

//night/light mode
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

//myMess & Txt
const myTxt = document.querySelector("#myTxt")
const myDiv = document.querySelector("#myMess")

//Observer
observer = new MutationObserver(function (mutationsList, observer) {
    if (myTxt.innerHTML.length < 1){
        myDiv.style.display = "none"
    } else {
        myDiv.style.display = "block"
    }
    if(shiftAct === true){
        divP.forEach(el => {
            el.style.textTransform = "lowercase"
        })
        specP.forEach(el => {
            el.innerHTML = el.parentNode.classList[1]
        })
        shiftAct = false
        shiftLed.style.backgroundColor = "transparent"
    }
});
observer.observe(myTxt, { characterData: false, childList: true, attributes: false })

//keys
const keys = document.querySelectorAll(".key")
for( i = 0; i<keys.length; i++){
    keys[i].addEventListener("click", (e) => {
        const audio = new Audio("./assets/typeSound1.mp3")
        audio.play()
        const key = e.target
        //caps lock / shift ?
        if(capsAct || shiftAct){
            const keyItem = key.classList[2]
            myTxt.innerHTML += keyItem
        } else {
            const keyItem = key.classList[1]
            myTxt.innerHTML += keyItem
        }
    })
}

//bigKeys
const capsLed = document.querySelector(".capsLed")
const shiftLed = document.querySelector(".shiftLed")
let capsAct = false
let shiftAct = false
const divP = document.querySelectorAll(".key p")
const specP = document.querySelectorAll(".spec p")
const chat = document.querySelector(".chat")

const bigKeys = document.querySelectorAll(".bigKey")
for (i = 0; i < bigKeys.length; i++) {
    bigKeys[i].addEventListener("click", (e) => {
        bigKeysClick(e)
    })
}

function bigKeysClick(e){
    const audio = new Audio("./assets/typeSound2.mp3")
    audio.play()
    const key = e.target
    const keyItem = key.classList[1]

    switch (keyItem) {

        //suppr
        case "del":
            const length = myTxt.innerHTML.length
            const lastChar = myTxt.innerHTML.slice(length-4, length)
            if(lastChar === "<br>"){
                const newText = myTxt.innerHTML.slice(0, -4)
                myTxt.innerHTML = newText
            } else {
                const newText = myTxt.innerHTML.slice(0, -1)
                myTxt.innerHTML = newText
            }
            break

        //entrée
        case "etr":
            myTxt.innerHTML += '</br>'
            break

        //shift
        case "shift":
            if (shiftAct === false) {
                divP.forEach(el => {
                    el.style.textTransform = "capitalize"
                })
                specP.forEach(el => {
                    el.innerHTML = el.parentNode.classList[2]
                    el.style.textTransform = "lowercase"
                })
                shiftAct = true
                shiftLed.style.backgroundColor = "rgb(65, 98, 187)"
            } else {
                divP.forEach(el => {
                    el.style.textTransform = "lowercase"
                })
                specP.forEach(el => {
                    el.innerHTML = el.parentNode.classList[1]
                })
                shiftAct = false
                shiftLed.style.backgroundColor = "transparent"
            }
            break

        //caps
        case "caps":
            if(capsAct === false){
                divP.forEach(el => {
                    el.style.textTransform = "capitalize"
                })
                specP.forEach(el => {
                    el.innerHTML = el.parentNode.classList[2]
                    el.style.textTransform = "lowercase"
                })
                capsAct = true
                capsLed.style.backgroundColor = "rgb(100, 240, 80)"
            } else {
                divP.forEach(el => {
                    el.style.textTransform = "lowercase"
                })
                specP.forEach(el => {
                    el.innerHTML = el.parentNode.classList[1]
                })
                capsAct = false
                capsLed.style.backgroundColor = "transparent"
            }
            break

        //emojis
        case "emojis":
            console.log(keyItem)
            break

        case "send":
            chat.innerHTML += "<div class='message'><p>"+myTxt.innerHTML+"</p></div>"
            myTxt.innerHTML = " "
    }
}

//hold del
let mouseDown = false
const del = document.querySelector("div .del")
del.addEventListener('mousedown', function () {
    mouseDown = true
    holding = setTimeout(function () {
        if (mouseDown) {
            myTxt.innerHTML = ""
        }
    }, 1200)
});
del.addEventListener('mouseup', function () {
    clearTimeout(holding);
    mouseIsDown = false
});

//space
const space = document.querySelector(".space")
space.addEventListener("click", () => {
    const audio = new Audio("./assets/typeSound2.mp3")
    audio.play()

    myTxt.innerHTML += " "
})

//reset
const reset = document.querySelector(".reset button")
reset.addEventListener("click", () => {
    chat.innerHTML = ""
})