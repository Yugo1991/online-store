const header = document.querySelector("header");

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let navmenu = document.querySelector('.navmenu');

let slideIndex = 0;
const mainSlides = document.querySelectorAll(".slide");

function showSlides() {
  mainSlides.forEach(slide => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > mainSlides.length) slideIndex = 1;

  mainSlides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // Change every 4 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

const reviewSlides = document.querySelectorAll('.review-slide');
let current = 0;

function showSlide(index) {
  reviewSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + reviewSlides.length) % reviewSlides.length;
  showSlide(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % reviewSlides.length;
  showSlide(current);
});

// Optional: Auto-play
// setInterval(() => {
//   current = (current + 1) % reviewSlides.length;
//   showSlide(current);
// }, 5000);