const fs = require('fs');

fs.writeFileSync('notes.txt', "My first name is Dave");
fs.appendFileSync('notes.txt', "\nMy second name is Walshe");