let slides = document.querySelector('.slides');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots[currentIndex].classList.remove('active');
    dots[i].classList.add('active');

    currentIndex = i;
}

const grocery = document.querySelector('.grocery');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

let scrollAmount = 0;
const productWidth = 165 + 28; 

rightArrow.addEventListener('click', () => {
    const maxScroll = grocery.scrollWidth - document.querySelector('.grocery-wrapper').offsetWidth;
    scrollAmount += productWidth;
    if(scrollAmount > maxScroll) scrollAmount = maxScroll;
    grocery.style.transform = `translateX(-${scrollAmount}px)`;
});

leftArrow.addEventListener('click', () => {
    scrollAmount -= productWidth;
    if(scrollAmount < 0) scrollAmount = 0;
    grocery.style.transform = `translateX(-${scrollAmount}px)`;
});



const brands = document.querySelector(".brands");
const menu = document.querySelector(".menu");


const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;"; 
closeBtn.classList.add("close-btn");
brands.appendChild(closeBtn);

menu.addEventListener("click", () => {
  brands.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
  brands.style.left = "-250px";
});
