const cartButton = document.getElementById('cartButton');
const cartCountElement = document.getElementById('cart-count');

function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
  cartCountElement.innerText = cart.length;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
  
  cart.splice(index, 1); 
  
  localStorage.setItem('guitarCart', JSON.stringify(cart));
  updateCartDisplay();
}

cartButton.addEventListener('click', () => {
  const product = {
    name: cartButton.getAttribute('data-name'),
    price: cartButton.getAttribute('data-price')
  };

  let cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
  cart.push(product);
  localStorage.setItem('guitarCart', JSON.stringify(cart));

  updateCartDisplay();
});
updateCartDisplay();