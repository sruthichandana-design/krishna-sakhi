// Cart State - Using localStorage for persistence
let cart = JSON.parse(localStorage.getItem('Krishna SakhiCart')) || [];

// Product data (needed for cart operations)
const products = [
    {
        id: 1,
        name: "Classic Diamond Ring",
        category: "Rings",
        price: 2850,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Ccircle cx='200' cy='200' r='70' fill='none' stroke='%23C9A961' stroke-width='2'/%3E%3Cpolygon points='200,160 210,180 190,180' fill='%23fff' stroke='%23C9A961' stroke-width='1'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Pearl Strand Necklace",
        category: "Necklaces",
        price: 1950,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Cpath d='M100 200 Q200 170 300 200' stroke='%23C9A961' stroke-width='2' fill='none'/%3E%3Ccircle cx='160' cy='185' r='12' fill='%23fff' stroke='%23C9A961' stroke-width='1'/%3E%3Ccircle cx='200' cy='175' r='12' fill='%23fff' stroke='%23C9A961' stroke-width='1'/%3E%3Ccircle cx='240' cy='185' r='12' fill='%23fff' stroke='%23C9A961' stroke-width='1'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Simple Hoop Earrings",
        category: "Earrings",
        price: 890,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Ccircle cx='140' cy='200' r='45' fill='none' stroke='%23C9A961' stroke-width='6'/%3E%3Ccircle cx='260' cy='200' r='45' fill='none' stroke='%23C9A961' stroke-width='6'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Emerald Pendant",
        category: "Necklaces",
        price: 3200,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Cline x1='200' y1='120' x2='200' y2='180' stroke='%23C9A961' stroke-width='2'/%3E%3Crect x='185' y='180' width='30' height='40' fill='%23B4C4AE' stroke='%23C9A961' stroke-width='1'/%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: "Delicate Chain Bracelet",
        category: "Bracelets",
        price: 1450,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Cellipse cx='200' cy='200' rx='110' ry='25' fill='none' stroke='%23C9A961' stroke-width='5'/%3E%3Ccircle cx='160' cy='200' r='6' fill='%23fff'/%3E%3Ccircle cx='200' cy='200' r='6' fill='%23fff'/%3E%3Ccircle cx='240' cy='200' r='6' fill='%23fff'/%3E%3C/svg%3E"
    },
    {
        id: 6,
        name: "Sapphire Stud Earrings",
        category: "Earrings",
        price: 1580,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F4F1EA'/%3E%3Ccircle cx='140' cy='200' r='28' fill='%234169E1' opacity='0.3' stroke='%23C9A961' stroke-width='2'/%3E%3Ccircle cx='260' cy='200' r='28' fill='%234169E1' opacity='0.3' stroke='%23C9A961' stroke-width='2'/%3E%3C/svg%3E"
    }
];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('Krishna SakhiCart', JSON.stringify(cart));
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCart();
    showNotification('Added to cart');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = `$${totalPrice.toLocaleString()}`;
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toLocaleString()} × ${item.quantity}</div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert('Thank you for your order! Total: $' + total.toLocaleString());
    cart = [];
    saveCart();
    updateCart();
    toggleCart();
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #C9A961;
        color: white;
        padding: 0.9rem 1.8rem;
        z-index: 3000;
        font-size: 0.9rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});
