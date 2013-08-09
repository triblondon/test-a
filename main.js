var c = require('test-c');
var my = require('src/js/othermodule.js');

exports.run = function() {

  return c.run() + my.run() + "[A:v1]";

};
