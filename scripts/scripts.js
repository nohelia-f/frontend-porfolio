let navbar = document.getElementById("navbar-menu-pages");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }
}
