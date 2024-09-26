const products = [
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Shirt", category: "clothing", price: 29 },
    { name: "Smartphone", category: "electronics", price: 699 },
    { name: "Pants", category: "clothing", price: 49 },
];

function displayProducts(filter) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productDisplay.appendChild(productDiv);
    });
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        displayProducts(category);
    });
});

// Initial display
displayProducts('all');
