/*
Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
function getAllProperties(obj) {
    let allProps = [];
    for (let prop in obj) {
        allProps.push(prop);
    }
    return allProps;
}

console.log(getAllProperties(student)); 