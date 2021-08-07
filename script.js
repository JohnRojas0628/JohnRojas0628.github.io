// menu

let enlacesHead = document.querySelectorAll(".enlaces-head")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    enlacesHead.classList.toggle("menudos")
})