function removeDuplicates(str) {

    // Create a Set from the string to remove duplicates
    // A Set is a collection of unique values. 
    //When you pass a string (or an array) to a Set, it automatically filters out duplicates.
    let uniqueChars = new Set(str);
    
    //Convert the set back to a string by spreading it into an array and joining it
    return Array.from(uniqueChars).join('')
    
  }
  
  console.log(removeDuplicates("hello")); 
  console.log(removeDuplicates("banana")); 
  