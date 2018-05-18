const style = require('../css/style.css');
const style2 = require('../css/jquery.mCustomScrollbar.min.css');
const greeter = require('./a.js');
// const mousewheel = require('./malihu-custom-scrollbar-plugin/jquery.mousewheel.js');
// console.log(mousewheel)
// const scrollbar = require('./malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');
const test = require("jquery-mousewheel")($);
require('malihu-custom-scrollbar-plugin')($);
console.log(test)
document.querySelector(".container").appendChild(greeter.greet());
greeter.test(12)
$('.container').attr("name","test");
$('.box').css({background: 'red'});
$('.box').animate({height: '100px'});
$('.box2').mCustomScrollbar({
  theme:"dark"
})