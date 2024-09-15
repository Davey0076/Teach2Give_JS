// //Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function subString(str) {
    let result = []

    for (let i = 0; i < str.length; i++){
        for(let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j))
        }

    }
    return result
}

console.log(subString("dog"))