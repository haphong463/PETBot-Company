let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#user').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
// end menu button

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


  function checkSub2(){
   alert("Login success!");
  }


function popup(){
   document.getElementById("open-popup-btn").addEventListener("click", function(){
      document.getElementsByClassName("popup")[0].classList.add("active");
   })
}

function dismiss(){
   document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
      document.getElementsByClassName("popup")[0].classList.remove("active");
   })
}


 