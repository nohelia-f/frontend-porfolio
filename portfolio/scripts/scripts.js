let navbar = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }
}
