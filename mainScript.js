console.info("Website develop by Richard aka 'RixDev'");

const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('menu-container');
const menuCloseBtn = document.getElementById('menu-list__close-btn');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

menuCloseBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

