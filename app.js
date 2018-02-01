console.log("Starting app");
//Gaining access to fs and os module
//const means constant - never changes
const fs = require('fs');
const os = require('os');
//since this is our own file, we give it the path of the file
//if it was a core node module, you'd just give the name
const notes = require('./notes.js');

var command = process.argv[2];
if(command === 'list') {
  console.log('Listing notes');
  } else if(command === 'add') {
      console.log('Adding note');
  } else if(command === 'read') {
      console.log('Reading note');
  } else if(command == 'remove') {
      console.log('Removing note');
  } else {
      console.log('Did not recognize command');
  }
