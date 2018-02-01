console.log('Starting notes.js');
//module is available everywhere

//this property age will be shared where ever notes.js is required
//module.exports.age = 18;

//Setting an export called addNote equal to a function. So you can
//use addNote function where ever note.js is required
module.exports.add = function(x, y) {
  var sum = x + y;
  return sum;
}

module.exports.subtract = function(x,y) {
  var sub = y - x;
  return sub;
}
