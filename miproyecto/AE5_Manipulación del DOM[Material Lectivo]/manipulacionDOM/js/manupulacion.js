let encabezado = document.querySelector("h1")

encabezado.textContent = "Tengo hambre"

let imagen = document.querySelector("img")

imagen.setAttribute("src", "img/3.avif")

let recuadro = document.querySelector(".cuadro")

recuadro.style.backgroundColor = "blue"

let lista = document.querySelector("li")

lista.textContent = "Tres"

let tres = document.querySelector("#tres")

tres.textContent = "Uno"

lista.style.backgroundColor = "purple"

let dos = document.querySelector("#dos")

dos.style.border = "solid white"

let bye = document.querySelector(".bye")

bye.addEventListener("click", function(){
    alert("Adiós mi gente")
})