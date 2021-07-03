console.log("Hola Programador, eres genial :)")

const myElement = document.getElementById("mariposa_verde")

function flyOnClick() {
 
  myElement.style.animationName = "vuelo"
  myElement.style.animationDuration = "9s"

  return
}

myElement.addEventListener("animationend", () => {

  myElement.style.animationName = "pepe"
  myElement.style.animationDuration = "0s"

  return
}, false)

