document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-whatsapp');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name}</span>
                    <span>₦${item.price}</span>
                `;
                cartItemsContainer.appendChild(cartItem);
                total += item.price;
            });
        }
        cartTotal.textContent = total;
    }

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            let message = 'Hello, I would like to order the following items:\n';
            cart.forEach(item => {
                message += `- ${item.name} (₦${item.price})\n`;
            });
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            message += `\nTotal: ₦${total}`;
            const whatsappUrl = `https://wa.me/2348131823671?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Your cart is empty.');
        }
    });

    displayCartItems();
});