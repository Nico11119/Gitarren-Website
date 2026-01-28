const cartCountElement = document.getElementById('cart-count');
const cartButtons = document.querySelectorAll('.ZumEinkaufswagenHinzufügen');

const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

function showToast(productName) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🎸</span> <span><strong>${productName}</strong> im Warenkorb!</span>`;
    
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('guitarCart')) || [];
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
        
        const mainBtn = document.querySelector('.ZumEinkaufswagenHinzufügen');
        if(mainBtn) {
            mainBtn.classList.add('bump');
            setTimeout(() => mainBtn.classList.remove('bump'), 400);
        }
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
        showToast(product.name);
    });
});

updateCartDisplay();