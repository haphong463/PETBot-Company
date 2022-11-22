var removeCartButtons = document.getElementsByClassName('fas fa-times')
console.log(removeCartButtons)
for (var x = 0; x < removeCartButtons.length; x++){
   var button = removeCartButtons[x]
   button.addEventListener('click', removeCartItem)
}

function removeCartItem(event){
   var buttonClicked = event.target;
   buttonClicked.parentElement.remove();
}