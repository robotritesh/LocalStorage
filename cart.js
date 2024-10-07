const cartContainer = document.getElementById('cart-container');

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    cartContainer.innerHTML = '';
    cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(userCard);
    });
}

function removeFromCart(id) {
    cart = cart.filter(user => user.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

window.onload = renderCart;
