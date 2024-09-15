//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

function swapKeysAndValues(obj) {
    let swapped = {};
    for (let key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  }
  
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(swapKeysAndValues(student));  // Output: {"David Rayy": "name", "VI": "sclass", "12": "rollno"}
  