import React, { useState } from 'react';

const products = [
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Shirt", category: "clothing", price: 29 },
    { name: "Smartphone", category: "electronics", price: 699 },
    { name: "Pants", category: "clothing", price: 49 },
];

const ProductList = () => {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    return (
        <div className="container">
            <h1>Product List</h1>
            <div className="filter-section">
                <button onClick={() => setFilter('all')} className="filter-btn">All</button>
                <button onClick={() => setFilter('electronics')} className="filter-btn">Electronics</button>
                <button onClick={() => setFilter('clothing')} className="filter-btn">Clothing</button>
            </div>
            <div id="product-display" className="product-display">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-item">
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
