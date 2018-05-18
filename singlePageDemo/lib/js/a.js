/*module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};*/
// const $ = require('./jquery.min.js');
module.exports = {
  greet: function(){
    var greettxt = document.createElement('div');
    greettxt.textContent = "Hi there and greetings!";
    return greettxt;
  },
  test: function (option) {
    console.log(option)
    console.log($(".container"))
  }
};