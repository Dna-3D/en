document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const adminPanel = document.getElementById('admin-panel');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const productImageInput = document.getElementById('product-image');
    const saveProductButton = document.getElementById('save-product');
    const productListDiv = document.getElementById('product-list');

    const correctPassword = 'B@logun';

    loginButton.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            loginSection.style.display = 'none';
            adminPanel.style.display = 'block';
            loadProducts();
        } else {
            alert('Incorrect password.');
        }
    });

    async function loadProducts() {
        // In a real app, you would fetch this from Firebase.
        const products = [
            { id: 1, name: 'Lip Gloss', price: 1500, image: 'images/lipgloss.jpg' },
            { id: 2, name: 'Chin Chin', price: 500, image: 'images/chinchin.jpg' },
        ];

        productListDiv.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <p>${product.name} - ₦${product.price}</p>
                <button onclick="editProduct(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            `;
            productListDiv.appendChild(productDiv);
        });
    }

    window.editProduct = function(id, name, price, image) {
        productIdInput.value = id;
        productNameInput.value = name;
        productPriceInput.value = price;
        productImageInput.value = image;
    };

    window.deleteProduct = async function(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            // In a real app, you would delete this from Firebase.
            alert(`Product with id ${id} deleted.`);
            loadProducts();
        }
    };

    saveProductButton.addEventListener('click', async () => {
        const product = {
            name: productNameInput.value,
            price: parseFloat(productPriceInput.value),
            image: productImageInput.value,
        };
        const id = productIdInput.value;

        if (id) {
            // In a real app, you would update this in Firebase.
            alert(`Product with id ${id} updated.`);
        } else {
            // In a real app, you would add this to Firebase.
            alert('Product added.');
        }
        loadProducts();
        productIdInput.value = '';
        productNameInput.value = '';
        productPriceInput.value = '';
        productImageInput.value = '';
    });
});