console.info("Website develop by Richard aka 'RixDev'");

// Mobile version Menu

const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('menu-container');
const menuCloseBtn = document.getElementById('menu-list__close-btn');
const menuListItems = document.querySelectorAll(".menu-list li")

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

menuCloseBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        menuContainer.classList.toggle('active');
    });
});

// Mobile version Menu => iFrame

const iframeContainer = document.querySelector(".iframe-container");
const iframeContainer_CloseBtn = document.querySelector(".iframe-container button");

console.log(menuListItems[2]);
menuListItems[2].addEventListener('click', () => {
    iframeContainer.classList.toggle("iframeVisible");
    menuContainer.classList.toggle('active');
});

iframeContainer_CloseBtn.addEventListener('click', () => {
    iframeContainer.classList.toggle("iframeVisible");
});

// Carousel functionality

const carouselTracks = document.querySelectorAll(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const btnsPrev = document.querySelectorAll(".prev");
const btnsNext = document.querySelectorAll(".next");
const itemWidth = document.querySelector(".carousel-slide").offsetWidth;

btnsPrev.forEach(btn => {
    btn.addEventListener('click', () => handleClick(btn, "prev"));
    // btn.addEventListener('click', () => handleClick(btn));
});
btnsNext.forEach(btn => {
    btn.addEventListener('click', () => handleClick(btn, "next"));
});

// TODO: Implement JS for opacity effect
// let slideSelected = 0
// carouselSlides[slideSelected].classList.toggle("carousel-slide-active");

function handleClick(element, direction){
    console.log(element.dataset.serviceNumber);
    if(direction === "prev"){
        carouselTracks[element.dataset.serviceNumber].scrollBy({
            left: -itemWidth,
            behavior: "smooth"
        });
    } else{
        carouselTracks[element.dataset.serviceNumber].scrollBy({
            left: itemWidth,
            behavior: "smooth"
        });
    }
}