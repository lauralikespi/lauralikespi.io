let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
// document.getElementById("rightClickInspect").style.display = "none";
// document.getElementById("dockSide").style.display = "none";
// document.getElementById("toolbar").style.display = "none";

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

var workExp = function(){
  document.getElementById("corp-work-exp-feb-19").style.display = "block";
  document.getElementById("potato-feb-19").style.display = "none";
  document.getElementById("paddle-feb-19").style.display = "none";
};

var potato = function(){
  document.getElementById("corp-work-exp-feb-19").style.display = "none";
  document.getElementById("potato-feb-19").style.display = "block";
  document.getElementById("paddle-feb-19").style.display = "none";
};

var paddle = function(){
  document.getElementById("corp-work-exp-feb-19").style.display = "none";
  document.getElementById("potato-feb-19").style.display = "none";
  document.getElementById("paddle-feb-19").style.display = "block";
};

// var rightClickInspectButton = function(){
//   var x = document.getElementById("rightClickInspect");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// var dockSideButton = function(){
//   var x = document.getElementById("dockSide");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// var toolbarButton = function(){
//   var x = document.getElementById("toolbar");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }