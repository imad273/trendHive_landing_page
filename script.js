/* Animation scroll initialize */
AOS.init({
  duration: 1200,
});

function openPhoneMenu() {
  var x = document.getElementById("links");
  x.style.display = "flex";
  x.style.position = "fixed";
}

function closeMenu() {
  var x = document.getElementById("links");
  if (screen.width <= "767") {
    x.style.display = "none";
    x.style.position = "static";
  }
}