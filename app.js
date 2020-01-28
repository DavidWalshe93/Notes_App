const validator = require('validator');
const getNotes = require("./notes");

console.log(getNotes());

console.log(validator.isEmail("test.hello@example.com"));
console.log(validator.isURL("https://hello.com"));