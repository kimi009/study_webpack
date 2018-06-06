var css = require('./greet.css');
var config = require('./config.json');
module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  greet.className = css.root;
  return greet;
}