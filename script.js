const menuActive = document.querySelector('.menu-bar');
const borger = document.querySelector('.head-menu');

console.dir(document.querySelector('body'))

function toggleMenu(){
    menuActive.classList.toggle("hidden");
}

borger.addEventListener('click', toggleMenu);