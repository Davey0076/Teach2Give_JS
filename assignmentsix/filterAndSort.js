function filterAndSort(filterFn, ...numbers) {
    return numbers.filter(filterFn).sort()
}

//test case
const isEven = (num) => num % 2 ===0
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2))