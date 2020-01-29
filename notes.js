const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if( notes.length > notesToKeep.length ) {
        console.log(chalk.green.inverse("Note removed"));
    } else {
        console.log(chalk.red.inverse("No note found"))
    }
    saveNotes(notesToKeep);
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach( (note) => {
        console.log(chalk.green("Title") + ": " + note.title);
        console.log(chalk.blue("Body") + ": " + note.body);
        console.log("-------------------------------------")
    })
};

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }
    
    if(note) {
        
    }
    
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};