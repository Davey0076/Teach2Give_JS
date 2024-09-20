const addedData = []  // Global array to store fetched products
let cart = []         // Global array for cart items

// Fetch product data from the API and populate the global addedData array
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();

        // Add products to the global array
        addedData.push(...products);
        console.log("Products added successfully: ", addedData);

        // Populate products on the DOM
        populateProducts();
    } catch (error) {
        console.log("Error fetching products: ", error);
    }
}

// Function to populate products on the DOM
function populateProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear container before populating

    // Iterate over addedData and create HTML elements for each product
    addedData.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>Date: ${product.date}</p>
            <p>Location: ${product.location}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Function to add product to the cart
function addToCart(productId) {
    // Find the product by its ID from addedData
    const product = addedData.find(p => p.id === productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        // If product exists, increase its quantity
        existingProduct.quantity += 1;
    } else {
        // If not, add the product to the cart with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    // Update the cart UI
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartContainer = document.getElementById('cartContainer');

    // Clear the cart container but preserve the header
    cartContainer.innerHTML = '<h2 id="cart__header">My Cart</h2>';

    // Check if the cart is empty
    if (cart.length === 0) {
        // Display a message if no items are available in the cart
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('empty__message')
        emptyMessage.innerText = 'No Items Available in the Cart';
        cartContainer.appendChild(emptyMessage);
    } else {
        // If there are items in the cart, iterate over them and display
        cart.forEach((product, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <button onclick="increaseQuantity(${product.id})">+</button>
                <button onclick="decreaseQuantity(${product.id})">-</button>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItemDiv);
        });
    }
}


// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity += 1;
        updateCartUI(); // Update cart UI after changing quantity
    }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            // If quantity is 1, remove the product from the cart
            cart = cart.filter(p => p.id !== productId);
        }
        updateCartUI(); // Update cart UI after changing quantity
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    // Remove the product from the cart array by index
    cart.splice(index, 1);
    updateCartUI(); // Update cart UI after removing the product
}

// Initial call to fetch data and populate products
fetchData();
updateCartUI();
