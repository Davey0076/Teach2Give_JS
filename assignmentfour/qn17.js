//17. Write a JavaScript function to check whether an object contains a given property.

function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
  }
  
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(hasProperty(student, 'name'));  // Output: true
  console.log(hasProperty(student, 'age'));   // Output: false
  