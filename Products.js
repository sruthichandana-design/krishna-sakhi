// Product Data
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

// Initialize Products on Collection Page
function initProducts() {
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toLocaleString()}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProducts);
