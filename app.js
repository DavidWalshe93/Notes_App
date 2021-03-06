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
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "The title of the note to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
});


yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        notes.listNotes();
    }
});

yargs.command({
    command: "read",
    describe: "Reading notes",
    builder: {
        title: {
            describe: "The title of the note to read",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
});


yargs.parse();


