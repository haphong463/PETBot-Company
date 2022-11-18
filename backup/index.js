// menu button
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// end menu button

// slide show
var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }
// end slideshow

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let toggle = button => {
    let element = document.getElementById("myul");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "- What is PET plastic?";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "+ What is PET plastic?";
    }
  }

  let toggle2 = button => {
    let element = document.getElementById("myul2");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "- Why is PET plastic used to make plastic bottles?";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "+ Why is PET plastic used to make plastic bottles?";
    }
  }

  let toggle3 = button => {
    let element = document.getElementById("myul3");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "- Is it safe to use for health?";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "+ Is it safe to use for health?";
    }
  }




let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
