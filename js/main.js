
var header = document.querySelector("#header");
window.addEventListener("scroll", function() {
    header.classList.toggle("rolagem", window.scrollY > 0);
});


function abrirMenu() {
    var menu = document.getElementById("nav")
    menu.classList.add("abrir");
}

function fecharMenu() {
    var menu = document.getElementById("nav")
    menu.classList.remove("fechar");
}