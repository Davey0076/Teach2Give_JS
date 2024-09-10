function isPalindrome(str) {
    //variable for non alphabetic characters
    let re = /[\W_]/g;
    //convert the string to lowercase and remove non alphabetic characters
    let lowerStr = str.toLowerCase().replace(re, '');

    //reverse the lowercase string
    let reverseStr = lowerStr.split('').reverse().join('');

    //check if palindrome and return the value
    return reverseStr === lowerStr
}

//test cases
console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Hello, World!'));