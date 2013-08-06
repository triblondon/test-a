var c = new require('test-c');
var my = new require('othermodule.js');

exports.run = function() {

  return c.run() + my.run() + "[A:v1]";

};
