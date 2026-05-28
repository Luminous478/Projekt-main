// Hitta elementet som visar antalet varor i kundvagnen.
var cartCountElem = document.getElementById('cartCount');
// Skapa en variabel för att hålla reda på antalet varor i kundvagnen.
var cartCount = 0;

function updateCartCount() {
  if (cartCountElem) {
    cartCountElem.textContent = cartCount;
  }
}

// Lägg till en produkt i kundvagnen och uppdatera antalet i kundvagnen. 
function addToCart() {
  cartCount = cartCount + 1;
  updateCartCount();
  alert('Produkten har lagts till i kundvagnen.');
}

// Visa en alert med antalet varor i kundvagnen när användaren klickar på kundvagnsikonen.
function showCartStatus() {
  if (cartCount === 0) {
    alert('Kundvagnen är tom.');
  } else {
    alert('Du har ' + cartCount + ' varor i kundvagnen.');
  }
}

// lägg till event listeners för alla "Lägg i kundvagn" knappar
var buttons = document.querySelectorAll('.product-btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addToCart);
}

// när användaren klickar på kundvagnsikonen, visa en alert med antalet varor i kundvagnen
var cartIcon = document.querySelector('.cart');
if (cartIcon) {
  cartIcon.addEventListener('click', showCartStatus);
}
