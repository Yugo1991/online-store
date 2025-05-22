const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
});


window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // Change every 4 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

