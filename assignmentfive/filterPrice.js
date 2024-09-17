//array of different foods
const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]

let total = 0

//filter prices on foods available
const filteredFoods = availableFoods.filter((foodPrices) => {

    return foodPrices.price > 450
})

const totalPrices = filteredFoods.forEach((filterPrice) => {
    total += filterPrice.price
})

//print the foods that are above 450
console.log(filteredFoods)
console.log(total)

console.log(`My total bill for items above 450 is ${total}`)