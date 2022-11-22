let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// end menu button

// slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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




 
