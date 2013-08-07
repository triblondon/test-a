var c = require('test-c');
var my = require('othermodule.js');

exports.run = function() {

  return c.run() + my.run() + "[A:v1]";

};
