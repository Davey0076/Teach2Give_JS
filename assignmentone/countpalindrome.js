function countPalindromes(str) {

    //variable with a set used for storing the palindromes
    let palindromes = new Set();  
  
    //function to check if a string is a palindrome
    function isPalindrome(s) {
      return s === s.split('').reverse().join('');  // Check if the string is the same reversed
    }
  
    // Loop through all possible substrings
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j);  // Extract substring from i to j
  
        // If the substring is a palindrome, add it to the set
        if (isPalindrome(substring)) {
          palindromes.add(substring);
        }
      }
    }
  
    // Return the number of distinct palindromes
    return palindromes.size;
  }
  
  console.log(countPalindromes("ababa"));
  console.log(countPalindromes("racecar"));
  