window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


function abrirMenu() {
    var menu = document.getElementById("nav")
    menu.classList.add("abrir");
}

function fecharMenu() {
    var menu = document.getElementById("nav")
    menu.classList.remove("fechar");
}