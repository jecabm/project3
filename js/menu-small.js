
window.onscroll = function() {myFunction()};

var menuMin = document.getElementById("menuMin");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menuMin.classList.add("sticky")
  } else {
    menuMin.classList.remove("sticky");
  }
}
