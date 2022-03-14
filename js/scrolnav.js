window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Navbar");
var scroltop = document.getElementById("scrol-top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("NavFixed")
    scroltop.classList.add("scroltopshow")
  } else {
    navbar.classList.remove("NavFixed");
    scroltop.classList.remove("scroltopshow");
  }
}

