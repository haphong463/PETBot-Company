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

var addCart = document.getElementsByClassName("add-cart");
for(var x=0; x<addCart.length ; x++){
   var button = addCart[x];
   button.addEventListener("click", addCartClicked);
}

function addCartClicked(event){
   var button = event.target
   var shopProducts = button.parentElement.parentElement;
   var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
   var price = shopProducts.getElementsByClassName('price')[0].innerText;
   var product = shopProducts.getElementsByClassName('product-img')[0].src;
   addProducts(title, price, product);
}
function addProducts(title, price, product){
   var cartShopbox = document.createElement('div');
   cartShopbox.classList.add('cart-item');
   var cartItems = document.getElementsByClassName('cart-items-container')[0];
   var cartItemsNames = cartItems.getElementsByClassName('cart-content');
   for (var x = 0; x < cartItemsNames.length; x++){
      if(cartItemsNames[x].innerText == title){
         alert('You have already add this item to cart');
         return;
      }
   }
 

var cartBoxContent = `
                        <span class="fas fa-times"></span>
                        <img src="${product}" width="75" height="75" alt="">
                        <div class="cart-content">
                           <h3 class="cart-product">${title}</h3>
                           <div class="price">${price}/-</div>
                        </div>
                     `;
cartShopbox.innerHTML = cartBoxContent;
cartItems.append(cartShopbox)
cartShopbox.getElementsByClassName('fas fa-times')[0].addEventListener('click', removeCartItem)
}
