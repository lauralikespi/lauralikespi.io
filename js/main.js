let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

var workExp = function(){
  document.getElementById("corp-work-exp-feb-19").style.display = "block";
  document.getElementById("potato-feb-19").style.display = "none";
};

var potato = function(){
  document.getElementById("corp-work-exp-feb-19").style.display = "none";
  document.getElementById("potato-feb-19").style.display = "block";
};