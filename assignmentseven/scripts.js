const container = document.querySelector('.container');

fetch('data.json')
.then((response) => response.json() )
.then((data) => {
    let output = ''
    //output ndio tuna append kwa container
    data.forEach((item) => {

        const { id, imageUrl, title, price, date, location, company } = item
        output += `
            <div class="item">
                <img src="${imageUrl}" alt="Food image"/>
                <h2 class="container__title">${title}</h2>
                <h3 class="container__price">Kshs. ${price}</h3>
                <p class="container__date">${date}</p>
                <p class="container__location">${location}</p>
                <p class="container__company">${company}</p>

                <div class="item__buttons">
                    <button>Buy Now</button>
                    <button>Add To My Favorites</button>
                </div>
            </div>
        `
        container.innerHTML = output
    })
} )
.catch(error => {
    console.log(error.message);
})