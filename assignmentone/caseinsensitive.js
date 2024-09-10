function caseInsensitive(str){

    //convert string to lower case and clean the string to remove unwanted non alphabetic characters
    let cleanString = str.toLowerCase().replace(/[\W_]/g, '')

    //reverse the cleaned lower case string to check if palindrome
    //three methods involved: split(), reverse(), join()
    let reverseString = cleanString.split('').reverse().join('')

    return cleanString === reverseString
}


//test cases
console.log(caseInsensitive("MUm"))
console.log(caseInsensitive("Work hard"))
console.log(caseInsensitive("Dad"))


