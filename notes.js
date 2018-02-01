console.log('Starting notes.js');

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
