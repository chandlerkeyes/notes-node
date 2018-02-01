console.log("Starting app");
//Gaining access to fs and os module
//const means constant - never changes
const fs = require('fs');
const os = require('os');
//since this is our own file, we give it the path of the file
//if it was a core node module, you'd just give the name
const notes = require('./notes.js');
var add = notes.add(5,5);
console.log(add);
var subtract = notes.subtract(5,10);
console.log(subtract);

//Holds my username, home directory, uid, gid, shell , etc
//var user = os.userInfo();
//console.log(user);
//Creates file and adds text to it (if the file is already there it will add to it)
//fs.appendFileSync('greetings.txt', '\n Hi ' + user.username + ' age = ' + notes.age);
