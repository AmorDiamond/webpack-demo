const styles2 = require('./css/Greeter.css');//导入
const styles = require('./css/style.css');//导入
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!223";
  return greet;
};