/*
Write a JavaScript function to print all the methods in a JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/

function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(prop) {
        return typeof obj[prop] === 'function';
    });
}

// Example usage for Array object:
console.log(all_properties(Array));