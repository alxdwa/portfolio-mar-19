function myScrollFunction(item) {
  var elmnt = document.querySelector(item);
  elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  var nav = document.querySelector('.nav-links');
  nav.classList = "nav-links";
}

function myNavFunction(className) {
  var element = document.querySelector(className);
  element.classList.toggle("visible");
}

function showWork(projectName) {
  document.getElementById('portfolio-main').className = projectName;
  return false;
}

function toggleDarkLight() {
  const body = document.querySelector('body');
  const moon = document.getElementById('moon');
  const work = document.getElementById('nav-work-bg');

  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    moon.classList.remove('far');
    moon.classList.add('fas');
    work.style.backgroundImage = "url('src/img/redbg2.svg')";
    // work.style.backgroundSize = "60%";
    // work.style.backgroundPosition = "top 10px right 10px";
  }
  else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    moon.classList.remove('fas');
    moon.classList.add('far');
    work.style.backgroundImage = "url('src/img/greybg2.svg')";
    // work.style.backgroundSize = "60%";
    // work.style.backgroundPosition = "top 10px right 10px";
  }
}

// accessibility for tabbing: https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);