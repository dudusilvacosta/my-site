window.addEventListener('scroll', function() {
    let header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let nav = document.getElementById('nav')

function toggleMenu() {
    nav.classList.toggle('toggle__menu');
}