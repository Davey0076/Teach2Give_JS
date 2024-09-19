let showingFavorites = false; // Global variable to track if we're viewing favorites

const fetchData = async (showFavorites = false, sortOption = null) => {
    try {
        const response = await fetch('./data.json');
        let data = await response.json();

        // Retrieve favorites from localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Filter data to show only favorite items if needed
        if (showFavorites) {
            data = data.filter(item => favorites.includes(item.id));
        }

        // Sort the data based on the selected option
        if (sortOption === 'price-asc') {
            data = data.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            data = data.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date-asc') {
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortOption === 'date-desc') {
            data = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        // Generate HTML to display products
        let output = '';
        const container = document.querySelector('.container');
        data.forEach((item) => {
            const { id, imageUrl, title, price, date, location, company } = item;
            const isFavorite = favorites.includes(id);

            output += `
                <div class="item">
                    <img src="${imageUrl}" alt="Image of ${title}">
                    <h2 class="container__title">${title}</h2>
                    <h3 class="container__price">Price: Kshs. ${price}</h3>
                    <p class="container__date">Date: ${date}</p>
                    <p class="container__location">Location: ${location}</p>
                    <p class="container__company">Company: ${company}</p>
                    <div class="item__buttons">
                        <button>Buy Now</button>
                        <button class="favorite-btn" data-id="${id}">
                            ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            `;
        });

        // Update the container with the product cards
        container.innerHTML = output;

        // Add event listeners to the "Add to Favorites" buttons
        const favoriteButtons = document.querySelectorAll('.favorite-btn');
        favoriteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const id = Number(e.target.getAttribute('data-id'));
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

                if (favorites.includes(id)) {
                    // Remove from favorites
                    favorites = favorites.filter(favId => favId !== id);
                } else {
                    // Add to favorites
                    favorites.push(id);
                }

                // Update localStorage
                localStorage.setItem('favorites', JSON.stringify(favorites));

                // Refresh the displayed data
                fetchData(showingFavorites, sortOption);
            });
        });
    } catch (error) {
        console.log(error);
    }
};

// Attach event listeners for sorting
const sortByPriceAscButton = document.getElementById('price-asc');
const sortByPriceDescButton = document.getElementById('price-desc');
const sortByDateAscButton = document.getElementById('date-asc');
const sortByDateDescButton = document.getElementById('date-desc');
const viewFavoritesButton = document.getElementById('view-favorites');

sortByPriceAscButton.addEventListener('click', () => fetchData(showingFavorites, 'price-asc'));
sortByPriceDescButton.addEventListener('click', () => fetchData(showingFavorites, 'price-desc'));
sortByDateAscButton.addEventListener('click', () => fetchData(showingFavorites, 'date-asc'));
sortByDateDescButton.addEventListener('click', () => fetchData(showingFavorites, 'date-desc'));

// Event listener for "View Favorites" button
viewFavoritesButton.addEventListener('click', () => {
    showingFavorites = !showingFavorites; // Toggle the favorites view
    viewFavoritesButton.textContent = showingFavorites ? 'View All' : 'View Favorites';
    fetchData(showingFavorites);
});

// Initial fetch to display all data without sorting
fetchData();

