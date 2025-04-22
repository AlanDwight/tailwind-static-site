let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('menu');

menuBtn.addEventListener('click', ()=>{ 
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
})