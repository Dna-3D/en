const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const cartCount = document.getElementById('cart-count');

    // Dark Mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.classList.remove('fa-moon');
            darkModeToggle.classList.add('fa-sun');
        } else {
            darkModeToggle.classList.remove('fa-sun');
            darkModeToggle.classList.add('fa-moon');
        }
    });

    // Cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // This is a placeholder. In a real application, you would fetch products from a database.
    const products = [
        { id: 1, name: 'Lip Gloss', price: 1500 },
        { id: 2, name: 'Chin Chin', price: 500 },
    ];

    // This is a placeholder for adding to cart.
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            saveCart();
            updateCartCount();
            alert(`${product.name} has been added to your cart.`);
        }
    };

    // This is a placeholder for the WhatsApp order.
    window.orderOnWhatsApp = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const message = `Hello, I would like to order ${product.name} for ₦${product.price}.`;
            const whatsappUrl = `https://wa.me/2348131823671?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    updateCartCount();
});