function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }
  
  function longestPalindrome(s) {
    let longest = '';  // To store the longest palindrome
  
    // Generate all possible substrings
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let substring = s.slice(i, j);  // Extract substring from i to j
  
        // Check if the current substring is a palindrome and if it's longer than the previous palindrome
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;  // Update the longest palindrome
        }
      }
    }
  
    return longest;  // Return the longest palindrome found
  }
  
  console.log(longestPalindrome("babad"));  // Outputs: "bab" or "aba"
  console.log(longestPalindrome("cbbd"));   // Outputs: "bb"
  