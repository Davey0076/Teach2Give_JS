// Fetch data from the JSON Server
fetch('http://localhost:3000/products')
    .then(response => response.json())  // Convert the response to JSON
    .then(data => {
        // pass data to a function that will be used to display the products
        showProducts(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to display products in the DOM
function showProducts(products) {
    // Select the container to hold the products
    const productList = document.getElementById('product-list'); 

    // Loop through the product data and create HTML for each product
    products.forEach(product => {
        // Create a div for each product
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); 

        // Add the product details inside the div
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
        `;

        // Append the product div to the product list container
        productList.appendChild(productDiv);
    });
}
