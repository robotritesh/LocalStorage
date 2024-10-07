const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" }
];

const userContainer = document.getElementById('user-container');

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderUsers() {
    userContainer.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="addToCart(${user.id})">Add to Cart</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userContainer.appendChild(userCard);
    });
}

function addToCart(id) {
    const user = users.find(user => user.id === id);
    if (user && !cart.find(item => item.id === id)) {
        cart.push(user);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${user.name} added to cart.`);
    } else {
        alert('User is already in the cart.');
    }
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        renderUsers();
    }
}

window.onload = renderUsers;
