const cartCountElement = document.getElementById('cart-count');

const cartButtons = document.querySelectorAll('#cartButton, .cart-btn');

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.getAttribute('data-name') || 'Gitarre',
            price: button.getAttribute('data-price') || '0'
        };

        let cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
        cart.push(product);
        localStorage.setItem('guitarCart', JSON.stringify(cart));

        updateCartDisplay();
    });
});

updateCartDisplay();