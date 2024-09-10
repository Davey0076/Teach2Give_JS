function longestCommonPrefix(str) {
     // Return empty string if input list is empty
    if (str.length === 0) return ''; 
  
    // prefix variaable for storing the first initials of the strings 
    let prefix = str[0];
  
    // loop through the rest of the strings
    for (let i = 1; i < str.length; i++) {

    
      while (str[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);  // Remove the last character from the prefix
        if (prefix === '') return '';  // If there's no common prefix, return an empty string
      }
    }
  
    return prefix; 
  }
  
  console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));  
  