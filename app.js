const validator = require('validator');
const chalk = require('chalk');
const getNotes = require("./notes");
const log = console.log;

console.log(getNotes());

console.log(validator.isEmail("test.hello@example.com"));
console.log(validator.isURL("https://hello.com"));

log(chalk.green("Success"));
log(chalk.red("Error"));
log(chalk.bold.bgCyan("Success"));