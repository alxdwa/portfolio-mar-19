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
  document.getElementById('box2').className = projectName;
  return false;
}

var imgState = {};
function imgToggle(id) {
    if (document.getElementById) {
        var imgid = document.getElementById(id);
        imgState[id] = (imgState[id]) ? false : true;

        for (var img in imgState){
            if (imgState[img] && img != id){
                document.getElementById(img).style.display = 'none';
                imgState[img] = false;
            }
        }
        imgid.style.display = (imgid.style.display == 'block' ? 'none' : 'block');
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