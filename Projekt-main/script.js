// Find the element that shows the number of items in the cart.
var cartCountElem = document.getElementById('cartCount');
// Store how many items have been added.
var cartCount = 0;

function updateCartCount() {
  if (cartCountElem) {
    cartCountElem.textContent = cartCount;
  }
}

// Add one item to the cart and update the displayed count.
function addToCart() {
  cartCount = cartCount + 1;
  updateCartCount();
  alert('Produkten har lagts till i kundvagnen.');
}

// Show a simple message about the current cart contents.
function showCartStatus() {
  if (cartCount === 0) {
    alert('Kundvagnen är tom.');
  } else {
    alert('Du har ' + cartCount + ' varor i kundvagnen.');
  }
}

// Attach click handlers to each add-to-cart button.
var buttons = document.querySelectorAll('.product-btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addToCart);
}

// When the cart icon is clicked, show the cart status.
var cartIcon = document.querySelector('.cart');
if (cartIcon) {
  cartIcon.addEventListener('click', showCartStatus);
}
