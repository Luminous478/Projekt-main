var cartCountElem = document.getElementById('cartCount');
var cartCount = 0;

function updateCartCount() {
  if (cartCountElem) {
    cartCountElem.textContent = cartCount;
  }
}

function addToCart() {
  cartCount = cartCount + 1;
  updateCartCount();
  alert('Produkten har lagts till i kundvagnen.');
}

function showCartStatus() {
  if (cartCount === 0) {
    alert('Kundvagnen är tom.');
  } else {
    alert('Du har ' + cartCount + ' varor i kundvagnen.');
  }
}

var buttons = document.querySelectorAll('.product-btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addToCart);
}

var cartIcon = document.querySelector('.cart');
if (cartIcon) {
  cartIcon.addEventListener('click', showCartStatus);
}
