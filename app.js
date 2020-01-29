// const validator = require('validator');
// const chalk = require('chalk');
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log("Title: " + argv.title + "\n" + argv.body)
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removing a note")
    }
});


yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function () {
        console.log("Listing notes")
    }
});

yargs.command({
    command: "read",
    describe: "Reading notes",
    handler: function () {
        console.log("Reading notes")
    }
});


yargs.parse();


