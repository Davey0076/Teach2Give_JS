function areAnagrams(str1, str2) {
    // remove non-alphabetic characters and convert to lowercase
    let cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // Sort the characters in both strings
    let sortedStr1 = cleanStr1.split('').sort().join('');
    let sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr1)
    console.log(sortedStr2)
    
    //Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  console.log(areAnagrams("listen", "silent"));  // true
  console.log(areAnagrams("hello", "world"));    // false
  