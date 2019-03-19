function myScrollFunction(item) {
  var elmnt = document.querySelector(item);
  elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  var nav = document.querySelector('.nav-links');
  nav.classList = "nav-links";
}

function myNavFunction() {
  var element = document.querySelector('.nav-links');
  element.classList.toggle("visible");
}