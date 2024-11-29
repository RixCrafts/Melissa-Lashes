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

// Carousel functionality

const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const itemWidth = document.querySelector(".carousel-slide").offsetWidth;

btnPrev.addEventListener('click', () => handleClick("prev"));
btnNext.addEventListener('click', () => handleClick("next"));

// TODO: Implement JS for opacity effect
// let slideSelected = 0
// carouselSlides[slideSelected].classList.toggle("carousel-slide-active");
console.log(itemWidth);

function handleClick(direction){
    if(direction === "prev"){
        carouselTrack.scrollBy({
            left: -itemWidth,
            behavior: "smooth"
        });
    } else{
        carouselTrack.scrollBy({
            left: itemWidth,
            behavior: "smooth"
        });
    }
}