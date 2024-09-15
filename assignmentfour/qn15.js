//15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function objectToKeyValuePairs(obj) {
    return Object.entries(obj);
  }
  
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(objectToKeyValuePairs(student));  // Output: [["name", "David Rayy"], ["sclass", "VI"], ["rollno", 12]]
  