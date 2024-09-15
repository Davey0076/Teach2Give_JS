//14. Write a JavaScript function to retrieve all the values of an object's properties.

function getObjectValues(obj) {
    return Object.values(obj);
  }
  
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(getObjectValues(student));  // Output: ["David Rayy", "VI", 12]
  