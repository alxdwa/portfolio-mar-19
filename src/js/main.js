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

function myFolioFunction(classname) {


  var element = document.querySelector(classname);
  element.classList.toggle("visible");


  
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